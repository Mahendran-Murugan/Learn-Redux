import React from 'react'

export const ShowAttendence = ({ data }) => {
    return (
        <>
            <h2>Attendence Data</h2>
            <ul className='item-container'>
                {data.map((attendence, index) => {
                    return (
                        <div className='container' key={index}>
                            <li>{attendence}</li>
                            <button>Delete</button>
                        </div>
                    )
                })}
            </ul>
        </>
    )
}
