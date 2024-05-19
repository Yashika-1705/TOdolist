import React, {useState, useEffect} from 'react'

import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'

const oldtasks = localStorage.getItem("tasks")
console.log(oldtasks)




const App = () => {
  const [tasks, settasks] = useState(JSON.parse(oldtasks) || [])

  useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  const handleDelete = (taskIndex) => {
    const newtasks = tasks.filter((task, index) => index !== taskIndex)
    settasks(newtasks)
  }
  return (
    <div className='app'>
      <TaskForm settasks={settasks}/>
      <main className='app_main'>
        <TaskColumn 
          title = "To Do" 
          icon = {todoIcon} 
          tasks={tasks} 
          status = "todo"
          handleDelete={handleDelete}
        />
        <TaskColumn 
          title = "Doing" 
          icon = {doingIcon} 
          tasks={tasks} 
          status = "doing"
          handleDelete={handleDelete}
        />
        <TaskColumn 
          title = "Done" 
          icon = {doneIcon} 
          tasks={tasks} 
          status = "done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  )
}

export default App
