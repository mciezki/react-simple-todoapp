import React, { useState } from 'react';
import '../css/App.css';

import Form from './Form';
import List from './List';


const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [idCounter, setIdCounter] = useState(0);
  const [tasks, setTasks] = useState([])

  const valueChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  }

  const addTask = () => {
    if (inputValue === "") return alert('Wpisz coś!');
    const task = {
      id: idCounter,
      name: inputValue
    }
    setIdCounter(prevId => prevId + 1);
    setTasks([...tasks, task]);
    setInputValue('');
    console.log(tasks);
  }

  const deleteTask = (id) => {
    let list = tasks;
    list = list.filter(task => task.id !== id);
    setTasks(list);
  }

  return (
    <div className="App">
      <Form value={inputValue} valueChange={valueChange} handleClick={addTask} />
      <List tasks={tasks} remove={deleteTask} />
    </div>
  );
}

export default App;
