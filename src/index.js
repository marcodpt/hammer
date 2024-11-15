import selfClosing from './html/selfClosing.js'
import normalTags from './html/normalTags.js'

const camelToKebab = string => string
  .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
  .toLowerCase()

const resolveAttrs = attributes => Object.keys(attributes)
  .reduce((A, key) => {
    let v = attributes[key]
    const k = camelToKebab(key)

    if (k === 'style') {
      if (v && typeof v === 'object') {
        v = Object.keys(v).reduce((style, k) => {
          if (typeof v[k] == 'number' || typeof v[k] == 'string') {
            const s = String(v[k]).trim()
            if (s) {
              style += (style ? '; ' : '')+camelToKebab(k)+': '+s
            }
          }
          return style
        }, "")
      } else if (typeof v === 'string') {
        v = v
          .split(';')
          .map(s => s.trim())
          .filter(s => s && s.indexOf(':') > 0)
          .join('; ')
      }
    } else if (k === 'class') {
      if (v instanceof Array) {
        v = v
          .filter(c => typeof c == "string")
          .map(c => c.trim())
          .filter(c => c)
          .join(" ")
      } else if (typeof v == 'string') {
        v = v
          .split(" ")
          .map(c => c.trim())
          .filter(c => c)
          .join(" ")
      }
    } else if (v === true) {
      v = ''
    } else if (typeof v === 'number') {
      v = String(v)
    } 

    if (v === '' && (k == 'class' || k == 'style')) {
      v = null
    }

    if (typeof v == 'function' || typeof v == 'string') {
      A[k] = v
    }
    return A
  }, {})

const resolveChildren = children => 
  (children instanceof Array ? children : []).filter(c => c)

export default (h, text) => {
  const Tags = {}
  Tags.h = (tagName, attributes, children) => h(tagName,
    attributes &&
    typeof attributes == 'object' &&
    !(attributes instanceof Array) ? resolveAttrs(attributes) : {},
    children ? resolveChildren(children) : children
  )
  Tags.text = str => text(
    typeof str === 'string' ? str :
    str === undefined ? '' : 
    typeof str === 'function' ? str.toString() : 
      JSON.stringify(str, undefined, 2)
  )

  selfClosing.forEach(tag => {
    Tags[tag] = attributes => Tags.h(tag, attributes)
  })
  normalTags.forEach(tag => {
    Tags[tag] = (attributes, children) => Tags.h(tag, attributes,
      children instanceof Array ? children : []
    )
  })

  return node => node(Tags)
}
