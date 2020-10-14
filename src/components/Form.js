import React from 'react';
import '../css/Form.css'

const Form = ({ value, handleClick, valueChange }) => {

    return (
        <div className="Form">
            <label>Zadanie: </label><input value={value} onChange={valueChange} type="text" />
            <button onClick={handleClick}>Dodaj</button>
        </div>
    );
}

export default Form;