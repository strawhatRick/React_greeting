import React, { useState } from 'react';
import './index.css';
import SlotM from './SlotM';

const App = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setTime] = useState(time);
    const UpTime = () =>{setTime(new Date().toLocaleTimeString())}
    setInterval(UpTime, 1000);
    return (
        <>
            <h1>{ctime}</h1>
        </>
    )
}

export default App;
