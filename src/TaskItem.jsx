// import { useState } from 'react'

export default function TaskItem ({task, onToggle }) {

    return (
        <div 
        className={`item ${task.isDone ? 'done' : ''}`}
        onClick={onToggle}
        >
            <span>
                {task.text}
            </span>
        </div>

    )

}