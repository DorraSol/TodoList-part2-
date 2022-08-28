
//import './Todo.css'
import './InputTodo.css'
import { useState } from 'react'


const Todo = (props) =>{
        const { todo , getTodoEditingId , todoEditingId , onEditTodo, index, toggleCompleted , remove} = props
        const isEditing =todoEditingId === todo.id
        const [text, setText] = useState (todo.id)
        const editTodo =() => {
            onEditTodo({
                ...todo,
                text
            } , index)
                

        }
        return (
            <li key={index} className={todo.completed ? "completed" : ""}>
                {
                    !isEditing ?
                    <div className='cheked' >
                    <input onClick={() => {toggleCompleted(index)}} type="checkbox" className='checkbox' checked={todo.completed}/>
                    <span onDoubleClick={() => getTodoEditingId(todo.id)}>{todo.text}</span>
                    <span className='icon-interdit'><i onClick={() => {remove(todo.id)}} class="fa fa-times" ></i></span>
                </div> :
                    <input className='edit'
                     type="text"
                    value={text} 
                     onChange ={e => setText (e.target.value)}
                    onBlur= {editTodo}
                    onKeyPress={(e) => {
                        if (e.key ==='Enter') {
                            editTodo()
                        }
                    }

                    }

                      />
                }
               


            </li>



        )

       
  
}




export default Todo;