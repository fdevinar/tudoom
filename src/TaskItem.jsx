// import { useEffect } from 'react'

export default function TaskItem ({task, onToggle, onEdit, onDelete }) {

    return (
        <div className={`item animate ${task.isDone ? 'done' : ''}`}>
            <span>{task.text}</span>
            <div className="btn-wrapper">
                <div title="Mark as Done" onClick={onToggle}>✅</div>
                <div title="Edit Task" onClick={onEdit}>✍️</div>
                <div title="Delete Task" onClick={onDelete}>💣</div>
            </div>
        </div>

    )

}