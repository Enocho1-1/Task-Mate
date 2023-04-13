import { useEffect, useState } from "react"
import { Form } from "./Form"
import { Userlist } from "./Userlist"
import "./tasklist.css"

export const TaskList = () => {
  
    const [taskList, setTasklist] = useState(JSON.parse(localStorage.getItem("taskList")) || [])
    const [taskEdit, setTaskEdit] = useState({})

    useEffect( () => {
       localStorage.setItem("taskList", JSON.stringify(taskList))
    },[taskList])
    
  return (
    <section className="taskContainer">
        <h1>Task Mate App</h1>
        <div>
            <Form tasks={taskList} 
                setTasks={setTasklist}
                taskEdit={taskEdit}
                setTaskEdit={setTaskEdit}
            />
            <Userlist 
                tasks={taskList} 
                setTasks={setTasklist}
                taskEdit={taskEdit}
                setTaskEdit={setTaskEdit}
            />
        </div>
    </section>
  )
}
