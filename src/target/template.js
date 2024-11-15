import hammer from '../index.js'

const MAX_LENGTH = 60

const sanitize = (unsafe, quoted) => {
  unsafe = unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "&#10;")

  if (quoted) {
    unsafe = unsafe
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
  }

  return unsafe
}

const print = (X, ident) => {
  ident = ident || ''
  if (typeof X == 'string') {
    return X.split('\n').map(line => ident+line).join('\n')
  }
  const {tagName, attributes, children} = X
  const Attrs = Object.keys(attributes).map(k => 
    `${k}="${sanitize(attributes[k], true)}"`
  )
  var attrs = Attrs.join(' ')

  if (attrs.length + ident.length + tagName.length + 3 > MAX_LENGTH) {
    attrs = '\n'+Attrs.map(attr => ident+'  '+attr).join('\n')+'\n'+ident
  } else if (attrs) {
    attrs = ' '+attrs
  }
  var s = (tagName == 'html' ? '<!DOCTYPE html>\n' : '')+
    ident+'<'+tagName+attrs

  if (children == null) {
    return s+'>'
  } else {
    s += '>'
    if (!children.length) {
      return tagName ? s+`</${tagName}>` : ''
    } else if (
      children.length == 1 &&
      typeof children[0] === "string" &&
      children[0].indexOf('<') < 0
    ) {
      return s+`${children[0]}</${tagName}>`
    } else {
      return s+'\n'+children.map(
        child => print(child, ident+'  ')
      ).join('\n')+'\n'+ident+`</${tagName}>`
    }
  }
}

export default hammer((tagName, attributes, children) => 
  print({tagName, attributes, children})
, text => sanitize(text))
