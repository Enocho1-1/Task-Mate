import { useState } from "react"
import Logo from "../assests/to-do-list.png"
import "./form.css"

export const Form = ({tasks, setTasks}) => {
    const [taskValue, setTaskvalue] = useState('')
    const handleInput = (e) => {
        e.preventDefault()

        const date = new Date()
        const newInput = 
        {
            id: date.getMilliseconds(),
            name:taskValue,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }

        setTasks([...tasks, newInput])
    }
  return (
    <div className="taskInput">
        <form onSubmit={handleInput}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    <img src={Logo} alt="" />
                </span>
                <input onChange={(e) => {setTaskvalue(e.target.value)}} value={taskValue} type="text" placeholder="Add Task Item..." aria-label="Username" aria-describedby="basic-addon1"/>
                <button type="submit">
                    <span className="box">
                        SUBMIT
                    </span>
                </button>
            </div>
        </form>
        
    </div>
  
  )
}
