import { useState } from 'react'
import logo from './assets/tudoom-logo.png'

import './App.css'

function App() {
  
  const [inputValue, setInputValue] = useState('');
  const [inputList, setInputList] = useState([]);

  function newTask() {    
    const newTask = {
      id: crypto.randomUUID(),
      text: inputValue
    }
    setInputList(prev=> [...prev, newTask]);
    setInputValue('');
  }

  return (
    <main>
      <img className='logo' src={logo} alt="logo" />
      <div className="input-wrapper">

        <input type="text" name="input"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        />

        <button onClick={newTask}>+</button>

        <div className='input-list'>
          <ul>
            {inputList.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}

export default App
