import {h, text, app} from "https://unpkg.com/hyperapp"
import {hammer} from '../index.js'

const vDom = hammer(h, text) 

export default ({view, ...props}) => app({
  ...props,
  view: state => vDom(html => view(state, html))
})
