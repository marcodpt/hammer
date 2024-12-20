import {html} from '../index.js'

const input = document.getElementById('input')
const output = document.getElementById('output')

const formatter = (H, element) => {
  if (element.nodeType === 3 && element.textContent.trim()) {
    return H.text(element.textContent)
  } else if (element.nodeType === 1) {
    const tag = element.tagName.toLowerCase()
    return H[tag](Array.from(element.attributes).reduce((A, {
      nodeName,
      nodeValue
    }) => ({
      ...A,
      [nodeName]: nodeValue
    }), {}), Array.from(
      (tag == 'template' ? element.content : element).childNodes
    ).map(child => formatter(H, child)))
  }
} 

window.format = () => {
  const data = document.body.querySelector('textarea').value
  if (!data) {
    window.alert('Fill the text area with HTML.')
    return
  }

  const isTemplate = document.body
    .querySelector('input[type="checkbox"]').checked

  var target
  if (isTemplate) {
    target = document.createElement('div')
    target.innerHTML = data
  } else {
    const parser = new DOMParser()
    target = parser.parseFromString(data, "text/html")
  }
  target = target.firstElementChild || target.firstChild

  input.setAttribute('style', 'display:none')
  output.querySelector('code')
    .textContent = html(H => formatter(H, target))
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
