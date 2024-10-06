import hammer from '../index.js'

export default hammer((tagName, attributes, children) => ({
  tagName,
  attributes,
  children
}), text => text)
