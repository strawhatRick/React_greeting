import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const BASE_URL = 'https://crudcrud.com/api/e202ddf9dbff482380c9a7fa76ac2fbc/keep';

const App = () => {

    const[addItem, setAddItem] = useState([]);

    useEffect(() => {
        async function addData(){
            const response = await axios.get(BASE_URL);
            setAddItem(response.data);
        }
        addData();
    }, []);
    
    const addNote = (note) => {
        // alert('clicked');
        const addedNote = axios.post(BASE_URL, note);
        console.log(addedNote.data);
        setAddItem((prevData) => {
            return [...prevData, addedNote];
        })
        // console.log(addItem);

    };

    const onDelete = (key) => {
        setAddItem((prevData) => {
            // console.log(prevData);
            // const updatedData = prevData.filter((currData, index) => {
            //     return index !== id;
            // })
            // console.log(addItem);
            const newData = [];
            prevData.forEach(element => {
                if(element._id === key){
                    axios.delete(`${BASE_URL}/${element._id}`)
                }
                else{
                    newData.push(element);
                }
            });
            return newData;
            
        })
    }

    return (
        <>
            <Header />
            <CreateNote
                passNote={addNote}
            />
            {/* {console.log(addItem)} */}
            {addItem.map((val, index) => {
                return <Note key={val._id} id={val._id} 
                title={val.title} content={val.content} 
                deleteItem={onDelete} />
            })}
            <Footer />
        </>
    )
}

export default App;
