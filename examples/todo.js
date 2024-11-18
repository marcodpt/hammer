import {dom} from "../index.js"

document.body.appendChild(dom(({
  main, h1, img, input, ul, li, button, text
}) => 
  main({}, [
    ul(),
    button({
      onclick: ev => {
        const main = ev.target.closest('main')
        const input = main.querySelector('input')
        main.querySelector('ul').appendChild(
          li({}, [
            text(input.value)
          ])
        )
        input.value = ""
      }
    }, [
      text('New!')
    ])
  ])
))
