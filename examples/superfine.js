import {h, text, patch} from "https://unpkg.com/superfine"
import {hammer} from '../index.js'

const vDom = hammer(h, text) 
export default (el, view) => patch(el, vDom(view))
