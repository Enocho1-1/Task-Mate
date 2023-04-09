import Logo from "../assests/to-do-list.png"
import "./form.css"

export const Form = ({tasks, setTasks, taskEdit, setTaskEdit}) => {


    const handleInput = (e) => {
        e.preventDefault()

            if(taskEdit.id){
                const date = new Date()
                const updatedList = tasks.map( item => (
                    item.id === taskEdit.id ?{ id: taskEdit.id, name:e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : item
                ))
                setTasks(updatedList)
            } else {
                const date = new Date()
                const newInput = 
                {
                    id: Math.floor(Math.random() * 10000),
                    name:e.target.task.value,
                    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                }
        
                setTasks([...tasks, newInput])
                e.target.task.value = ''
            }
         
    }
  return (
    <div className="taskInput">
        <form onSubmit={handleInput}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    <img src={Logo} alt="" />
                </span>
                <input onChange={ e => {setTaskEdit( {...taskEdit, name: e.target.value})}} value={taskEdit.name} type="text" name="task" placeholder="Add Task Item..." aria-label="Username" aria-describedby="basic-addon1" autoComplete="off"/>
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
