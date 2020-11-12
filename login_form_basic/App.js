import React, { useState } from 'react';
import './index.css';

const App = () => {
    const[name, setName] = useState('');
    const[lname, setLname] = useState('');
    const[fName, setFName] = useState('');
    const[fLname, setFLname] = useState('');
    const InputEvent = (event) => {
        // console.log(event.target.value);
        setName(event.target.value)
    }

    const InputEventTwo = (event) => {
        // console.log(event.target.value);
        setLname(event.target.value)
    }

    const onSubmits = (e) => {
        e.preventDefault();
        setFName(name);
        setFLname(lname);
    }

    return (
        <>
            <form onSubmit={onSubmits} >
                <div>
                    <h1> Hello {fName} {fLname}</h1>
                    <input type='text' placeholder='Enter Name' onChange={InputEvent} value={name} />
                    <br />
                    <input type='text' placeholder='Enter Last Name' onChange={InputEventTwo} value={lname} />
                    <button type='submit' onClick={onSubmits} > Click Me </button>
                </div>
            </form>
        </>
    )
}

export default App;
