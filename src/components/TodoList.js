import React from 'react'
import Todo from './Todo'
import './InputTodo.css'






 const TodoList = (props) => {
    const {todos} = props
  return (

    <div>
        
       <ul class="card-body">
           {todos.map((todo, index) =>
        <Todo {...{todo}} {...props} index= {index}/> )}
     </ul> 
        
        
    </div>
  )
}

export default TodoList 