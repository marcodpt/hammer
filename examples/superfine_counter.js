import superfine from './superfine.js'

const setState = state => superfine(
  document.getElementById("app"),
  ({main, h1, button, text}) => main({}, [
    h1({}, [
      text(state)
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
