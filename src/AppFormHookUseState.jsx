import React, { useState } from 'react';

function AppFormHookUseState() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')

    const [controlName, setControlName] = useState('asif bedif')    
    const [controlEmail, setControlEmail] = useState('')

    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeControlName = (e) => {
        setControlName(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail( e.target.value)
    }

    const changeControlEmail = (e) => {
        setControlEmail(e.target.value)
    }

    const changeDescription = (e) => {
        setDescription(e.target.value)
    }

    const reset = () => {
        setName('')
        setEmail('')
        setControlName('')        
        setControlEmail('')
        setDescription("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        setEmail( data.get('email'))
        setName( data.get('name'))

    }

    function FormWithControlField({title, children}) {
        return <>
            <br /><hr />
            <h2>{title}</h2>
            {children}
        </>
    }

    function FormWithNonControlField({title, children}) {
        return <form onSubmit={handleSubmit}>
            <br /><hr />
            <h2>{title}</h2>
            {children}
        </form>
    }

    return <>
        <h1>Forms with useState</h1>

        {/* control field have attribute value and onChange() event */}
        <hr /><h2>CONTROL input FIELD</h2>
        <input type="text" name='name' value={controlName} onChange={(e) => changeControlName(e)} />
        <input type="email" name='email' value={controlEmail} onChange={(e) => changeControlEmail(e)} />
        
        <h2>Name: {controlName}</h2>
        <h2>Email: {controlEmail}</h2>           
        

        <hr /><h2>CONTROL textarea FIELD</h2>
        <textarea name='description' value={description} onChange={(e) => changeDescription(e)} />
        <h2>Description: {description}</h2>            
       
        {/* non-control field do not have attribute value and onChange() event */}
        <hr /><h2>NON-CONTROL email FIELD</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" name='name' defaultValue={name} />&nbsp;
        <input type="email" name='email' defaultValue={email} />
        <button type='submit'>submit</button>
        </form>
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
        
        <hr />

        <button onClick={reset}>Reset</button>

    </>

}
export default AppFormHookUseState