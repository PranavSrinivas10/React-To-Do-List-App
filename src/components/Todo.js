import React from 'react'
import {FiEdit, FiTrash} from 'react-icons/fi'

function Todo({task, toggleComplete, deleteTask, editTask}) {
  return (
    <div className='Todo'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>
            {task.task}
        </p>
        <div>
            {task.time}
        </div>
        <div>
            <FiEdit onClick={() => editTask(task.id)}/>
            <FiTrash onClick={() => deleteTask(task.id)} className='fitrash'/>
        </div>

    </div>
  )
}

export default Todo