

const styleH1 = {backgroundColor: 'blue', color:'aqua'}
const title = "Welcome, Everyone!"
const todos = [
  'PRESENTER REACTJS',
  'PRESENTER JSX',
  'CREER DES COMPOSANTS'
]

function App1() {

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
        <GetTodo/>
      </ul>


    </>
  )

  function Title({TAG, COLOR, children, ...props}) {
    return <TAG id='title' {...props} style={{color: COLOR}}>{children}</TAG>
  }
  
  function GetTodo(){
    return todos.map(todo => (<li key={todo}>{todo}</li>))
  }

} export default App1


