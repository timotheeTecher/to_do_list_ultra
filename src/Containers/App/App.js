import React, { useState } from 'react';
import classes from './App.module.css';

import Task from '../../Components/Task/Task'

function App() {
  //State
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  //Méthodes
  const submittedTaskHandler = event => {
    event.preventDefault();
    const newTask = {
      name: input,
      checked: false
    }
    const newTasks = [...tasks];
    newTasks.unshift(newTask);
    setTasks(newTasks);
    setInput('');
  }

  const changedFormHandler = event => {
    setInput(event.target.value);
  }

  const deleteTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  const toCheck = index => {
    const newTasks = [...tasks];
    newTasks[index].checked = !newTasks[index].checked;
    setTasks(newTasks);
  }

  //Variables
  let cardsTasks = tasks.map((task, index) => {
    return (
      <Task 
        key={ index } 
        taskName={ task.name }
        toDelete={ () => deleteTask(index) }
        isChecked={ task.checked }
        toggleCheck={ () => toCheck(index) }
      >
      </Task>
    );
  });

  //Rendu JSX
  return (
    <div className={ classes.App }>
      <header>
        <span>TO-DO</span>
      </header>

      <div className={ classes.add }>
        <form onSubmit={ e => submittedTaskHandler(e) }>
          <input value={ input } onChange={ e => changedFormHandler(e) } type="text" placeholder="Que souhaitez-vous ajouter ?" />
          <button type="submit">
            Ajouter
          </button>
        </form>
      </div>
      { cardsTasks }
    </div>
  );
}

export default App;