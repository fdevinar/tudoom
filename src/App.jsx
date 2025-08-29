import { useState, useEffect } from 'react';
import logo from './assets/images/tudoom-logo.png';
import sounds from './utils/sounds.js';
import TaskItem from './TaskItem';
import './App.css'

function App() {
  
  const { playPlatform, playPunch, playPain, playExplode, playPowerUp, playBFG, playBreak } = sounds(0.5);

  // INPUT LIST

  const defaultTasks = [    
    { id:"e473a0ea-aa3e-42ab-8be8-6e9e79baba2a",
      text:"Study React",
      isDone: false
    },
    { id:"8a909ff6-6bfb-4e8a-bd54-6c9c2c4642cc",
      text:"Play Boogie",
      isDone: false
    },
    { id:"be864c40-55b2-4f3c-acc4-92ec415c7105",
      text:"Go to Gym",
      isDone: false
    },
    { id:"'defa947f-d873-4d87-94b6-aad16006c1ac'",
      text:"Buy Food",
      isDone: true
    }
  ]

  const [inputValue, setInputValue] = useState('');
  const [taskList, setTaskList] = useState(() => {
    const storageList = localStorage.getItem('tudoom-tasks');
    return storageList ? JSON.parse(storageList) : defaultTasks;
  });

  // MISC
  const [isCalmDown, setIsCalmDown] = useState(false);
  const taglineList = ['Rip and list it.','Stay frosty, marine.','No task too tough.','One list to slay them all.','Secure the objective.',
  'Lock. Load. Complete.','Your mission starts here.','All demons cleared… eventually.','Command & complete.','The only easy task was yesterday’s.']

  // DONE CONTROL
  const countTask = taskList.length;
  const countDone = taskList.filter((task) => task.isDone === true).length;
  const [allDone, setAllDone] = useState(false);
  const clearDoneBtn = countDone > 0 && <button className="clear-done-btn" title="Clear All Done" onClick={() => clearAllDone()}>🧨 Detonate Completed</button>; 
  
  useEffect(() => {  
  if (allDone != true && countTask === countDone && countTask != 0) {
    playPowerUp();
    setAllDone(true);
  } else if (allDone === true && countTask != countDone) {
    setAllDone(false);
  }
  }), [countTask, countDone];

  // PERSISTENCE
  useEffect(() => {
    localStorage.setItem("tudoom-tasks", JSON.stringify(taskList));
  }), [taskList];

  // FILTER
  const [filterValue, setFilterValue] = useState('all');

  let visibleList = taskList;
    if (filterValue === 'done') {
      visibleList = taskList.filter((task) => task.isDone);  
    } else if (filterValue === "active") {
      visibleList = taskList.filter((task) => !task.isDone);
    }

  // FUNCTIONS
  const newTask = (e) => {        
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

  const toggleTask = (id) => {
    setTaskList(prev => 
      prev.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task)
    )
    playPunch();
  }

  const deleteTask = (id) => {
    setTaskList(prev =>
      prev.filter(task => task.id != id)
    )
    playExplode();
  }

  const editTask = (id, newText) => {    
    setTaskList(prev => 
      prev.map(task => task.id === id ? { ...task, text: newText } : task)
    )
    playBreak();
  }

  function notifyInvalid() {
    playPain();
  }

  const deleteAllTasks = () => {
    if (taskList.length > 0) {
      setTaskList([]);
      playBFG();
    } else {
      setIsCalmDown(true);
      setTimeout(() => setIsCalmDown(false), 2000);
    }
  }

  const clearAllDone = () => {
    setTaskList(prev =>
      prev.filter(task => !task.isDone)
    )
    playExplode();
  }

  function resetTasks() {
    localStorage.removeItem('tudoom-tasks');
    setTaskList(defaultTasks);
    window.location.reload();
  }

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  }

  return (
    <main>      
      <img className='logo' src={logo} alt="logo" onClick={() => resetTasks()} />
      <p className="tagline">{taglineList[Math.random() * Math.floor(taglineList.length) | 0]}</p>      
      <div className='input-task-wrapper'>
        {/* FILTER */}
        <div className='filter-wrapper'>
          <div className="filter-item">
            <input type="radio" name="task-filter" id="all" value="all" checked={filterValue === 'all'} onChange={ handleFilterChange }/>
            <label htmlFor="all">All</label>
          </div>
          <div className="filter-item">
            <input type="radio" name="task-filter" id="active" value="active" checked={filterValue === 'active'} onChange={ handleFilterChange }/>
            <label htmlFor="active">Active</label>
          </div>
          <div className="filter-item">
            <input type="radio" name="task-filter" id="done" value="done" checked={filterValue === 'done'} onChange={ handleFilterChange }/>
            <label htmlFor="done">Done</label>
          </div>
        </div>                
        {/* FORM */}
        <form onSubmit={newTask} onInvalid={notifyInvalid}>
          <input type="text" name="input" required pattern=".*\S.*"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          />
          <button type="submit">➕</button>
        </form>
        {/* TASK LIST */}
        <div className='task-list'>          
            {visibleList            
            .map((task) => (
              <TaskItem
                key={task.id}
                task={task}                                 
                onToggle={() => toggleTask(task.id)}
                onDelete={() => deleteTask(task.id)}
                onSave={(id, newText) => editTask(id, newText)}
                >
              </TaskItem>
            ))}     
        </div>                    
      </div>
      {/* DONE CONTROL/MISC */}
      <span className={`task-count ${countTask != 0 && countDone === countTask ? "alldone" : ""}`}>
        {countDone} tasks out of {countTask}
      </span>
      {clearDoneBtn}
      <button className='BFG' onClick={deleteAllTasks}>BRING HELL!</button>
      <p className={`calm ${isCalmDown ? 'animate' : ''}`}>Calm down chief...</p>
    </main>
  )
}

export default App
