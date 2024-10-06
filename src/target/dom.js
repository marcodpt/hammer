import hammer from '../index.js'

export default hammer((tagName, attributes, children) => {
  const e = document.createElement(tagName)

  Object.keys(attributes).forEach(k => {
    if (typeof attributes[k] == 'function') {
      if (k.substr(0, 2) == 'on') {
        e.addEventListener(k.substr(2), attributes[k])
      } else {
        e[k] = (...args) => attributes[k](e, ...args)
      }
    } else {
      e.setAttribute(k, attributes[k])
    }
  })

  (children || []).forEach(child => e.appendChild(child))

  return e
}, text => document.createTextNode(text))
