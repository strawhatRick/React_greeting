import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './index.css';

const App = () => {
    
    const[inputList, setInputList] = useState('');
    const[Items, setItems] = useState([]);

    const itemEvent = (e) => {
        setInputList(e.target.value);
    }
    const listOfItems = (e) => {
        setItems((oldItems)=> {
            return [...oldItems, inputList];
        });
        setInputList('');
    }
    const deleteItems = (id) =>{
        console.log('deleted');
        setItems((oldItems) => {
            return oldItems.filter((arrEle, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type='text' placeholder='Add an item' onChange={itemEvent} value={inputList} ></input>
                    <button onClick={listOfItems}>+</button>

                    <ol>
                        {/* <li>{inputList}</li> */}
                        {Items.map((itemval, index) => {
                            return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems} />
                        })}

                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;