
import Title from "./Title"
import GetTodo, {todos} from "./GetTodo"
const styleH1 = {backgroundColor: 'blue', color:'aqua'}
const title = "Welcome, Everyone!"


function AppTodosList() {

  const handleClick = (e)=> {
    console.log(e)
    alert("Cliked!")
  }

  const loremP = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Quam vel tempore nobis voluptas repellendus quis repellat quidem magni`
  const showLoremP = true
  

  return (
    <>
      <Title TAG="h1" COLOR="red" id="mon-titre" className="ma-classe">{title}</Title>
      {showLoremP ? <p>{loremP}</p> : <p>Clck Show LoremP</p>} 

      <ul>
        <GetTodo  todosArr={todos}/>
      </ul>


    </>
  )


} export default AppTodosList


