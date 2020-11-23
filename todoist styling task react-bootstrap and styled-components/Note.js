import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Card } from 'react-bootstrap';


const Note = (props) => {
    
    const deleteNote = () => {
        props.deleteItem(props.id);
    };
    
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <br />
                    
                    <Card.Text>{props.content}</Card.Text>
                    <button onClick={deleteNote} >
                        <DeleteOutlineIcon className='deleteIcon' />
                    </button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Note;