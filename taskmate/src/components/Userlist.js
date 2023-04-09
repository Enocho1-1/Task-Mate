import { Taskcard } from "./Taskcard"
import "./userlist.css"

export const Userlist = ({tasks, setTasks,  taskEdit, setTaskEdit}) => {

    const handleEdit = (id) =>{
        const editedListitem = tasks.find( item => ( item.id === id))
        setTaskEdit(editedListitem)
    }

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
         <Taskcard taskList={tasks} handleDelete={handleDelete} handleEdit={handleEdit}/>
        </ul>
   </section>
  )
}
