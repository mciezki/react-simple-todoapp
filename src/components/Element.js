import React from 'react';
import '../css/Element.css';

const Element = ({ name, id, remove }) => {

    return (
        <li>
            <p>Zadanie {id}:</p>
            <p>{name}</p>
            <button onClick={() => remove(id)}>Usuń</button>
        </li>
    );
}

export default Element;