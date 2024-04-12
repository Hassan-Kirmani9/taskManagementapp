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
        <div className="flex items-center gap-4">
        <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteredValue} />
            <button type="button" className="px-6 py-2 rounded-md  bg-custom-green text-white" onClick={handleClick}>Add</button>
        </div>
    );
};
