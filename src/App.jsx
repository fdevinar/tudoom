import { useState } from 'react';

import logo from './assets/images/tudoom-logo.png';

import useSound from 'use-sound';
import platformSfx from './assets/sounds/platform-start.wav';
import punchSfx from './assets/sounds/punch.wav';
import painSfx from './assets/sounds/generic-demon-pain.wav';

import './App.css'

function App() {
  
  const [inputValue, setInputValue] = useState('');
  const [inputList, setInputList] = useState([    
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


  function newTask(e) {        
    e.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      text: inputValue,
      isDone: false
    }
    setInputList(prev=> [...prev, newTask]);
    setInputValue('');
    playPlatform();
  }

  function toggleTask(id) {
    setInputList(prev => 
      prev.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task)
    )
    playPunch();
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
          <button type="submit">+</button>
        </form>


        <div className='input-list'>
          
            {inputList.map((item) => (
              <div 
              className={`item ${item.isDone ? 'done' : ''}`} 
              onClick={()=> toggleTask(item.id)} 
              key={item.id}>                
                {item.text}
                {/* <span className="trash">🗑️</span> */}
              </div>              
            ))}
          
        </div>
      </div>
    </main>
  )
}

export default App
