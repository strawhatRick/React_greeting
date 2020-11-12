import React, { useState } from 'react';
import './index.css';

const App = () => {
    const[fullName, setName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    });
    const InputEvent = (event) => {
        // console.log(event.target.value);
        const { value, name } = event.target;

        setName((prevVal) => {
            // console.log(prevVal);
            
            return{
                ...prevVal,
                [name]: value
            }
        })
    }

    const onSubmits = (e) => {
        e.preventDefault();
        alert('form submitted');
    }

    return (
        <>
            <form onSubmit={onSubmits} >
                <div>
                    <h1> Hello {fullName.fname} {fullName.lname} </h1>
                    <p> {fullName.email} </p>
                    <p> {fullName.phone} </p>
                    <input type='text' placeholder='Enter Name' 
                    onChange={InputEvent} value={fullName.fname}
                    name='fname' />
                    <br />
                    <input type='text' placeholder='Enter Last Name' 
                    onChange={InputEvent} value={fullName.lname}
                    name='lname' />
                    <br />
                    <input type='email' placeholder='Enter Email' 
                    onChange={InputEvent} value={fullName.email}
                    name='email' />
                    <br />
                    <input type='number' placeholder='Enter phone number' 
                    onChange={InputEvent} value={fullName.phone}
                    name='phone' />
                    <button type='submit' onClick={onSubmits} > Click Me </button>
                </div>
            </form>
        </>
    )
}

export default App;
