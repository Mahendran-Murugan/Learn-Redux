import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAttendence } from '../slices/attendenceSlice';

export const ShowAttendence = () => {

    const data = useSelector((state) => state.attendence);
    const dispatcher = useDispatch();

    const handleDelete = (index) => {
        dispatcher(removeAttendence(index));
    }

    return (
        <>
            <h2>Attendence Data</h2>
            <ul className='item-container'>
                {data.map((attendence, index) => {
                    return (
                        <div className='container' key={index}>
                            <li>{attendence}</li>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    )
                })}
            </ul>
        </>
    )
}
