import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'
uuidv4()

function TodoWrapper() {
    const [todos, setTodos] = useState([])

    const addTask = value => {
        if (!value || /^\s*$/.test(value)) {
            return;
        }
        setTodos([...todos, {id: uuidv4(), task: value, completed: false, isEditing: false}])        
    }

    const toggleComplete = task_id => {
        setTodos(todos.map(todo => (todo.id === task_id) ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTask = task_id => {
        setTodos(todos.filter(todo => (todo.id !== task_id)))
    }

    const editTask = task_id => {
        setTodos(todos.map(todo => (todo.id === task_id) ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTodo = (value,task_id) => {
        setTodos(todos.map(todo => (todo.id === task_id) ? ({...todo, task: value, isEditing: !todo.isEditing}) : todo))
    }

  return (
    <div className='TodoWrapper'>
        <h1>To-Do List</h1>
        <TodoForm addTask={addTask}/>
        {todos.map((todo,index) => ((todo.isEditing) ? 
            (<EditTodoForm editTodo={editTodo} task={todo}/>) :
            (<Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask}/> )
        ))}
    </div>
  )
}

export default TodoWrapper