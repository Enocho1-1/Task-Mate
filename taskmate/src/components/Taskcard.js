import Trash from "../assests/trash-bin.png"
import Edit from "../assests/edit.png"
import "./userlist.css"

export const Taskcard = ({taskList, handleDelete, handleEdit}) => {
  
  return (
    <>
    { taskList.map( item => (
        <li key={item.id}>
            <span>
                <h3>{item.name}</h3>
                <button><img src={Edit} onClick={() => {handleEdit(item.id)}} alt="" /></button>
                <button><img src={Trash} alt="" onClick={() => {handleDelete(item.id)}}/></button>
            </span>
            <p>{item.time}</p>
        </li>
    ))}
        
    </>
 
  )
}
