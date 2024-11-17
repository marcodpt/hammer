const kebabToCamel = string => string.replace(/-./g, x => x[1].toUpperCase())

const print = (x, ident) => {
  ident = ident || ''
  const next = ident+'  '
  return ident+(
    x == null ? 'null' :
    x === true ? 'true' :
    x === false ? 'false' :
    typeof x == 'number' ? String(x) :
    typeof x == 'string' ? `'${x.replaceAll('\n', '\\n')}'` :
    x instanceof Array ? (
      !x.length ? '[]' :
      `[\n${x.map(v => print(v, next)).join(',\n')}\n${ident}]`
    ) : 
    typeof x == 'object' ? (
      x.nodeType === 1 ? x.outerHTML : 
      x.nodeType === 3 ? `document.createTextNode('${x.textContent}')` : 
      !Object.keys(x).length ? '{}' :
      `{\n${Object.keys(x).map(
        k => next+k+': '+print(x[k], next).substr(next.length)
      ).join(',\n')}\n${ident}}`
    ) : fixIdent(x.toString(), ident)
  )
}

const htmlToJs = (h, text, Tags, element, ident) => {
  ident = ident || ''

  if (element.nodeType === 3 && element.textContent.trim()) {
    if (Tags.indexOf(text) < 0) {
      Tags.push(text)
    }
    return `${ident}${text}('${element.textContent.replaceAll('\n', '\\n')}')`
  } else if (element.nodeType !== 1) {
    return ''
  }

  const tag = element.tagName.toLowerCase()
  if (Tags.indexOf(tag) < 0) {
    Tags.push(tag)
  }

  const attributes = Array.from(element.attributes).reduce((A, {
    nodeName,
    nodeValue
  }) => ({
    ...A,
    [kebabToCamel(nodeName)]: nodeName == 'class' ?
      nodeValue.split(' ').map(c => c.trim()).filter(c => c) :
    nodeName == 'style' ?
      nodeValue.split(';').reduce((S, style) => {
        const V = style.split(':')
        const key = kebabToCamel(V.shift().trim())
        const value = V.join(':').trim()
        if (key && value) {
          S[key] = value
        }
        return S
      }, {}) : 
      nodeValue
  }), {})
  if (attributes.class) {
    const l = attributes.class.length
    if (l == 0) {
      delete attributes.class
    } else if (l == 1) {
      attributes.class = attributes.class[0]
    }
  }
  if (attributes.style && !Object.keys(attributes.style).length) {
    delete attributes.style
  }
  const attrs = print(attributes, ident).substr(ident.length)

  const next = ident+'  '
  const C = Array.from(
    (tag == 'template' ? element.content : element).childNodes
  ).map(child => htmlToJs(h, text, Tags, child, next)).filter(c => c)
  const children = !C.length ? '' :
    `[\n${C.join(',\n')}\n${ident}]`

  const a = Object.keys(attributes).length
  const c = C.length
  const n = next.length

  return ident+(h || tag)+'('+[
    h ? `'${tag}'` : '',
    !a && c ? '{}' : attrs,
    children
  ].filter(v => v).join(', ')+')'
} 

const input = document.getElementById('input')
const output = document.getElementById('output')

window.convert = () => {
  const html = document.body.querySelector('textarea').value
  if (!html) {
    window.alert('Fill the text area with HTML.')
    return
  }

  const h = document.body.querySelector('input[name="hyperscript"]').value
  const text = document.body.querySelector('input[name="text"]').value
  const isTemplate = document.body
    .querySelector('input[type="checkbox"]').checked

  var target
  if (isTemplate) {
    target = document.createElement('div')
    target.innerHTML = html
  } else {
    const parser = new DOMParser()
    target = parser.parseFromString(html, "text/html")
  }

  const Tags = []
  const jsCode = htmlToJs(h, text || h || 'text', Tags,
    target.firstElementChild || target.firstChild, '  '
  )
  input.setAttribute('style', 'display:none')
  output.querySelector('code').textContent = h ? jsCode : 
    `html(({\n  ${Tags.join(',\n  ')}\n}) => \n${jsCode}\n)`
  output.setAttribute('style', '')
}

window.copy = () => {
  if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText(output.querySelector('code').textContent)
    window.alert('Hyperscript copied to clipboard!')
  } else {
    window.alert('Unable to save text to clipboard!')
  }
}

window.again = () => {
  output.setAttribute('style', 'display:none')
  input.querySelector('textarea').value = ''
  input.querySelector('input[type="checkbox"]').checked = true
  input.setAttribute('style', '')
}
