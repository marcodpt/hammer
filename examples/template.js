import {template} from "../index.js"

document.body.querySelector('main').innerHTML = template(({
  h1, input, ul, li, button, text
}) => {
  window.addTodo = btn => {
    const main = btn.closest('main')
    const input = main.querySelector('input')
    const list = main.querySelector('ul')
    list.innerHTML = list.innerHTML+li({}, [
      text(input.value)
    ])
    input.value = ""
  }
  return [
    h1({}, [
      text(' To do list (text based!)')
    ]),
    input({
      type: 'text'
    }),
    ul(),
    button({
      onclick: 'addTodo(this)'
    }, [
      text('New!')
    ])
  ].join('\n')
})
