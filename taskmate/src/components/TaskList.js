import { useState } from "react"
import { Form } from "./Form"
import { Userlist } from "./Userlist"
import "./tasklist.css"

export const TaskList = () => {
  
    const [taskList, setTasklist] = useState([])
  return (
    <section className="taskContainer">
        <h1>Task Mate App</h1>
        <div>
            <Form tasks={taskList} setTasks={setTasklist}/>
            <Userlist tasks={taskList} setTasks={setTasklist}/>
        </div>
    </section>
  )
}
