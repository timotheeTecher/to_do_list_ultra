import React, { useState } from 'react';
import './App.css';

import Task from '../../Components/Task/Task'

function App() {
  //State
  const [tasks, setTask] = useState([
    "Aller chercher les courses",
    "Aller chercher les courses",
    "Aller chercher les courses",
    "Aller chercher les courses"
  ]);

  //Variables
  let cardsTasks = tasks.map((task, index) => {
    return (
      <Task 
        key={ index } 
        taskName={ task }
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

      {/* <div className="task">
        <div className="content">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          </svg>
          Aller chercher les courses
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </div>
      */}
    </div>
  );
}

export default App;