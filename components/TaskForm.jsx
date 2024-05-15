import React, { useState } from 'react'
import "./TaskForm.css"
import Tag from './tag'

 const TaskForm = ({settasks}) => {
    const [taskdata, settaskdata] = useState({
        task:"", /* name of the task */
        status: "todo", /* status of the task */
        tags: [] 
    })

const checktag = (tag) =>{
    return taskdata.tags.some(item => item === tag)
    // only want true or false so we use the same some function from below and just get the bool
}

    const selectTag = (tag) => {
        if(taskdata.tags.some(item => item===tag)) {
            const filtertags = taskdata.tags.filter(item => item !==tag)
            settaskdata(prev => {
                return {...prev, tags: filtertags}
            } )
        } else{
            settaskdata(prev=> {
                return {...prev, tags:[...prev.tags, tag]}
            })
        } 
    }
    const handlechange = (e) => {
        const {name,value} = e.target

        settaskdata(prev => {
            return {...prev, [name]:value}
        })
    }

    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log(taskdata)
        settasks(prev=> {
            return [...prev,taskdata]
        })
    }
    // const[task,setTask]= useState("")
    // const [status,setStatus] = useState("todo")


    // const handletaskchange = e => {
    //     setTask(e.target.value)
    // }
    // const handlestatuschange = e => {
    //     setStatus(e.target.value)
    // }
    // console.log(task,status) 
    
    return (
    <header className='app_header'>
        <form onSubmit={handlesubmit}>
            <input 
                type = "text" 
                name = "task"
                className = "task_input"
                placeholder = 'Enter your task' 
                onChange={handlechange}
            />

            <div className = 'task_form_bottom_line'>
                <div>
                    <Tag tagName='MAT102' selectTag = {selectTag} selected = {checktag("MAT102")}/>
                    <Tag tagName='CSC148' selectTag = {selectTag} selected = {checktag("CSC148")}/>
                    <Tag tagName='MAT136' selectTag = {selectTag} selected = {checktag("MAT136")}/>
                    <Tag tagName='ISP100' selectTag = {selectTag} selected = {checktag("ISP100")}/>

                </div>

                <div>
                <select 
                    name = "status"
                    className = 'task_status' 
                    onChange={handlechange}>
                    <option value="todo">To do</option>
                    <option value="doing">Doing</option>
                    <option value="completed">Completed</option>
                </select>
                </div>
                <button type="submit" className = 'task_submit'> +Add Task </button>
            </div>
        </form>
    </header>
)
 }
 
 export default TaskForm

 