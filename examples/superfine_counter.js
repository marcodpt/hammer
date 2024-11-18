import superfine from './superfine.js'

const setState = state => superfine(
  document.getElementById("app"),
  ({main, h1, button, text}) => main({}, [
    h1({}, [
      text('Counter: '+String(state))
    ]),
    button({
      onclick: () => setState(state - 1)
    }, [
      text('-')
    ]),
    button({
      onclick: () => setState(state + 1)
    }, [
      text('+')
    ])
  ])
)

setState(0)
