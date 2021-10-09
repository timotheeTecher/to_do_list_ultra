import React, { useState } from 'react';
import './App.css';

import Task from '../../Components/Task/Task'

function App() {
  //State
  const [tasks, setTasks] = useState([
    {
      name: "Aller chercher les courses",
      checked: false
    },
    {
      name: "Faire la vaisselle",
      checked: false
    },
    {
      name: "Laver la voiture",
      checked: false
    },
    {
      name: "Apprendre React",
      checked: false
    }
  ]);

  //Méthodes
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
    <div className="App">
      <header>
        <span>TO-DO</span>
      </header>

      <div className="add">
        <form>
          <input type="text" placeholder="Que souhaitez-vous ajouter ?" />
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