import { useState } from 'react';
import logo from './assets/images/tudoom-logo.png';
import useSound from 'use-sound';
import platformSfx from './assets/sounds/platform-start.wav';
import punchSfx from './assets/sounds/punch.wav';
import painSfx from './assets/sounds/generic-demon-pain.wav';
import explodeSfx from './assets/sounds/calamity-blade-projectile-explode.wav';
import TaskItem from './TaskItem';
import './App.css'

function App() {
  
  const [inputValue, setInputValue] = useState('');
  const [taskList, setTaskList] = useState([    
    { id:"e473a0ea-aa3e-42ab-8be8-6e9e79baba2a",
      text:"Study React",
      isDone: false
    },
    { id:"8a909ff6-6bfb-4e8a-bd54-6c9c2c4642cc",
      text:"Play Boogie React",
      isDone: false
    },
    { id:"be864c40-55b2-4f3c-acc4-92ec415c7105",
      text:"Go to Gym ",
      isDone: false
    },
  ]);

  const [playPlatform] = useSound(platformSfx);
  const [playPunch] = useSound(punchSfx);
  const [playPain] = useSound(painSfx);
  const [playExplode] = useSound(explodeSfx);


  function newTask(e) {        
    e.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      text: inputValue,
      isDone: false
    }
    setTaskList(prev=> [...prev, newTask]);
    setInputValue('');
    playPlatform();
  }

  function toggleTask(id) {
    setTaskList(prev => 
      prev.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task)
    )
    playPunch();
  }

  function deleteTask(id) {
    setTaskList(prev =>
      prev.filter(task => task.id != id)
    )
    playExplode();
  }

  function editTask(id) {
    alert('edit this task' + id);
  }

  function notifyInvalid() {
    playPain();
  }

  return (
    <main>
      <img className='logo' src={logo} alt="logo" />
      <div className='input-wrapper'>
        
        <form onSubmit={newTask} onInvalid={notifyInvalid}>
          <input type="text" name="input" required pattern=".*\S.*"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          />
          <button type="submit">➕</button>
        </form>

        <div className='input-list'>          
            {taskList.map((task) => (
              <TaskItem
                key={task.id}
                task={task}                                 
                onToggle={() => toggleTask(task.id)}
                onDelete={() => deleteTask(task.id)}
                onEdit={() => editTask(task.id)}
                >
              </TaskItem>                                            
            ))}          
        </div>
            <span className="task-count">
              {/* const count = arr.reduce((a, str) => a + str.includes('ABC'), 0); */}              
              {taskList.filter((task) => task.isDone === true).length} tasks out of {taskList.length}
              </span>
             
      </div>

    </main>
  )
}

export default App
