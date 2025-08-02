// import { useState } from 'react'

export default function TaskItem ({task, onToggle, onEdit, onDelete }) {

    return (
        <div className={`item ${task.isDone ? 'done' : ''}`}>
            <span onClick={onToggle}>{task.text}</span>
            <div className="btn-wrapper">
                <div onClick={onEdit}>✍️</div>
                <div onClick={onDelete}>💣</div>
            </div>
        </div>

    )

}