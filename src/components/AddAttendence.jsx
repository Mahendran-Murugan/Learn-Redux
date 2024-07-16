import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addAttendence } from '../slices/attendenceSlice';

export const AddAttendence = () => {

    const [input, setInput] = useState("");
    const dispatcher = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        if (input) dispatcher(addAttendence(input));
        setInput("");
    }

    return (
        <>
            <h2>Add Attendence</h2>
            <div className='container'>
                <label htmlFor='name'>Name:</label>
                <input id='name' type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            <button onClick={handleClick}>Add</button>
        </>
    )
}
