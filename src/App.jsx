
import { useState } from 'react'
import App1 from './App1.jsx'
import AppTodosList from './AppTodosList.jsx'
import LetCount from './LetCount.jsx'
import AppPersonHookUseState from './AppPersonHookUseState.jsx'
import AppFormHookUseState from './AppFormHookUseState.jsx'

const styleH1 = {
  padding: '10px', 
  backgroundColor: 'ghostwhite', 
  color:'#981727',
  border: '1px solid #981727',
  borderRadius: '20px',
}
const title = "Welcome, Everyone!"
const todos = [
  'PRESENTER REACTJS',
  'PRESENTER JSX',
  'CREER DES COMPOSANTS'
]

function App() {
  const [display, setDisplay] = useState()
  const btnAppCount = () => { return setDisplay(<LetCount />)}
  const btnAppTodos = () => { return setDisplay(<AppTodosList />)}
  const btnAppPersonHookUseState = () => { return setDisplay(<AppPersonHookUseState />)}
  const btnAppFormHookUseState = () => { return setDisplay(<AppFormHookUseState />)}

  return (
    <>
      <hr/>
      <button onClick={btnAppCount} style={styleH1}>COUNTER</button>&nbsp;
      <button onClick={btnAppTodos} style={styleH1}>TODOS</button>&nbsp;
      <button onClick={btnAppPersonHookUseState} style={styleH1}>PERSON OBJECT</button>&nbsp;
      <button onClick={btnAppFormHookUseState} style={styleH1}>FORMS</button>&nbsp;
      <hr/>
      {display}
      <hr/>

    </>
  )

  function Title({TAG, COLOR, children, ...props}) {
    return <TAG id='title' {...props} style={{color: COLOR}}>{children}</TAG>
  }
  

} export default App


