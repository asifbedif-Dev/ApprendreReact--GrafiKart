import React, {useState} from 'react'

const styleH1 = {backgroundColor: 'blue', color:'aqua'}
const title = "=== Person App ==="
const people = {
  name: "John",
  age: 25,
  city: "New York"
}

function AppPersonHookUseState() {
  const [person, setPerson] = useState(people)
  
  const getName = ()=> {
    setPerson({...person, name: "Bedif", age: people.age + 10, city: "Alberta"})
  }
  

  return (
    <>
      <h1>{title}</h1>
      Name: <strong>{person.name}</strong><br />
      Age: <strong>{person.age}</strong><br />
      City: <strong>{person.city}</strong><br />
      <hr/>
      <button onMouseEnter={getName}>Change Person on HOVER</button>
    </>
  )

 

} export default AppPersonHookUseState


