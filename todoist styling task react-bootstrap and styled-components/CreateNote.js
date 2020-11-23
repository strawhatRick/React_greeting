import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {Form} from 'react-bootstrap';

const CreateNote = (props) => {
    
    const[note, setNote] =useState({
        title: "",
        content: ""
    });

    const InputEvent = (e) => {
        // const value = e.target.value;
        // const name = e.target.name;

        const {name, value} = e.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const addEvent = () => {
        props.passNote(note)
        setNote({
            title: "",
            content: ""
        });
    }
    
    return (
        <>
            {/* <div className='main_note'>
                <form>
                    <input type='text' name='title' value={note.title} onChange={InputEvent} placeholder='Title' autoComplete='off' />
                    <textarea rows='' column='' name='content' value={note.content} onChange={InputEvent} placeholder='Write a note' ></textarea>
                    <Button onClick={addEvent}>
                        <AddIcon className='plus_sign' />
                    </Button>
                </form>
            </div> */}
            <div className="main_note">
                <Form>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Title" size="lg" name="title" value={note.title} onChange={InputEvent} autoComplete="off" />
                        <br />
                        <Form.Control type="text" placeholder="Write a note" rows="" column="" name="content" value={note.content} onChange={InputEvent} />
                        <br />
                    </Form.Group>
                    <Button onClick={addEvent}>
                        <AddIcon className='plus_sign' />
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default CreateNote;