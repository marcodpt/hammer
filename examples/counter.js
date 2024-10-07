import {dom} from "../index.js"

document.body.appendChild(dom(({
  main, h1, img, span, text, button
}) => 
  main({}, [
    h1({}, [
      img({
        src: '../favicon.ico'
      }),
      text(' Counter: '),
      span({}, [
        text('0')
      ])
    ]),
    button({
      onclick: ev => {
        const el = ev.target.closest('main').querySelector('span')
        el.textContent = parseInt(el.textContent) - 1
      }
    }, [
      text('-')
    ]),
    button({
      onclick: ev => {
        const el = ev.target.closest('main').querySelector('span')
        el.textContent = parseInt(el.textContent) + 1
      }
    }, [
      text('+')
    ])
  ])
))
