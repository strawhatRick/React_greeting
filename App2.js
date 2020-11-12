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
            // console.log(response.data);
            let prevData = [];
            response.data.forEach(element => {
                let data = {content: element.content, title: element.title}
                prevData.push(data);
            });
            // console.log(prevData);
            setAddItem(prevData);
        }
        addData();
    });
    
    const addNote = (note) => {
        // alert('clicked');

        setAddItem((prevData) => {
            return [...prevData, note];
        })
        // console.log(addItem);

    };

    const onDelete = (id) => {
        setAddItem((prevData) => {
            const updatedData = prevData.filter((currData, index) => {
                return index !== id;
            })
            // console.log(addItem);
            return updatedData;
        })
    }

    return (
        <>
            <Header />
            <CreateNote
                passNote={addNote}
            />
            {addItem.map((val, index) => {
                return <Note key={index} id={index} 
                title={val.title} content={val.content} 
                deleteItem={onDelete} />
            })}
            <Footer />
        </>
    )
}

export default App;
