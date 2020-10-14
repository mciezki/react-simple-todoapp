import React from 'react';
import '../css/List.css';

import Element from './Element'

const List = ({ tasks, remove }) => {

    const elements = tasks.map(task => <Element key={task.id} id={task.id} name={task.name} remove={remove} />)

    return (
        <ul>
            {elements}
        </ul>
    );
}

export default List;