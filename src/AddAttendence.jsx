import React, { useState } from 'react'
import { ShowAttendence } from './ShowAttendence';

export const AddAttendence = () => {

    const [input, setInput] = useState("");
    const [attendence, setAttendence] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        if (input) setAttendence([...attendence, input]);
        setInput("");
        console.log(attendence);
    }

    return (
        <>
            <h2>Add Attendence</h2>
            <div className='container'>
                <label htmlFor='name'>Name:</label>
                <input id='name' type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            <button onClick={handleClick}>Add</button>
            <ShowAttendence data={attendence} />
        </>
    )
}
