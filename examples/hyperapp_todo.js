import hyperapp from './hyperapp.js'

const AddTodo = state => ({
  ...state,
  value: '',
  todos: state.todos.concat(state.value),
})

const NewValue = (state, event) => ({
  ...state,
  value: event.target.value,
})

hyperapp({
  init: {
    todos: [],
    value: ''
  },
  view: ({
    todos, value
  }, {
    main, h1, input, ul, li, button, text
  }) => 
    main({}, [
      h1({}, [
        text('To do list')
      ]),
      input({
        type: 'text',
        oninput: NewValue,
        value
      }),
      ul({}, todos.map(todo =>
        li({}, [
          text(todo)
        ])
      )),
      button({
        onclick: AddTodo
      }, [
        text('New!')
      ])
    ]),
  node: document.getElementById("app")
})
