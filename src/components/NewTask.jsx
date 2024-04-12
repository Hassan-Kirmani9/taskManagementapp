import React, { useState } from 'react';

export const NewTask = ({ onAddNewTask }) => {
    const [enteredValue, setEnteredValue] = useState("");

    const handleChange = (e) => {
        setEnteredValue(e.target.value);
    };

    const handleClick = () => {
        if (enteredValue.trim() === '') {
                  return;
                }
        onAddNewTask(enteredValue);
        setEnteredValue(""); 
        };

    return (
        <div>
            <input type="text" className='border-2 border-yellow-600' onChange={handleChange} value={enteredValue} />
            <button type="button" onClick={handleClick}>Add</button>
        </div>
    );
};
