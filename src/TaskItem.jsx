import { useState } from 'react'

export default function TaskItem ({task, onToggle, onSave, onDelete }) {
    
    // EDIT and SAVE LOGIC    
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);    
    const editButton = !isEditing && <div className="action" title="Edit Task" onClick={() => onEdit()}>✍️</div>;
    const saveButton = isEditing && <div className="action" title="Save Task" onClick={() => onConfirm()}>💾</div>;

    function onEdit() {
        setIsEditing(true);        
    }
    function onConfirm() {
        if (editText) {
            onSave(task.id, editText.trim());
            setIsEditing(false);        
        }
    }
 
    return (
        <div className="task-wrapper">
            {/* DONE BTN */}
            <div className="action" title="Mark as Done" onClick={onToggle}>✅</div>            
            <div className={`item animate ${task.isDone ? 'done' : ''}`}>                
                {/* TASK TEXT or EDIT INPUT */}
                {isEditing ?
                <input type="text" value={editText} onChange={e => setEditText(e.target.value)} required pattern=".*\S.*"></input> :
                <span>{task.text}</span>
                }
                {/* EDIT SAVE DELETE BTNS */}
                <div className="btn-wrapper">       
                    {editButton}         
                    {saveButton}         
                    <div className="action" title="Delete Task" onClick={onDelete}>💣</div>
                </div>
            </div>
        </div>
    )

}