import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import {BASE_URL} from './Constant';

const Todoist = () => {

    const[Items, setItems] = useState([]);

    useEffect(() => {
        async function addData(){
            const response = await axios.get(BASE_URL);
            setItems(response.data);
        }
        addData();
    }, []);
    
    const addNote = async (note) => {
        // alert('clicked');
        const addedNote = await axios.post(BASE_URL, note);
        // console.log(addedNote);
        setItems((prevData) => {
            return [...prevData, addedNote.data];
        })
        // console.log(Items);

    };

    const onDelete = (key) => {
        setItems((prevData) => {
            // console.log(prevData);
            // const updatedData = prevData.filter((currData, index) => {
            //     return index !== id;
            // })
            // console.log(Items);
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
            {/* {console.log(Items)} */}
            {Items.map((val, index) => {
                return <Note key={val._id} id={val._id} 
                title={val.title} content={val.content} 
                deleteItem={onDelete} />
            })}
            <Footer />
        </>
    )
}

export default Todoist;