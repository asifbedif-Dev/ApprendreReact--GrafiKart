

const todos = [
    'PRESENTER REACTJS',
    'PRESENTER JSX',
    'CREER DES COMPOSANTS'
  ]

export {todos}

function GetTodo({todosArr}) {
    return todosArr.map(todo => (<li key={todo}>{todo}</li>))

} export default GetTodo