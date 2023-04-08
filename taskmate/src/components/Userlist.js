import { Taskcard } from "./Taskcard"
import "./userlist.css"

export const Userlist = ({tasks, setTasks}) => {

    const handleDelete = (id) => {
        const userDelete = tasks.filter( item => item.id !== id)
        setTasks(userDelete)
      }
  return (
   <section className="tasklistContainer">
        <div>
            <h2>List</h2>
            <span>
                <p>{tasks.length}</p>
            </span>
        </div>
        <hr />
        <ul>
         <Taskcard taskList={tasks} handleDelete={handleDelete } />
        </ul>
   </section>
  )
}
