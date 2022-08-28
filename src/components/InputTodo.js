import React, { useState } from "react";
import './InputTodo.css'

const InputTodo = (props) =>{

const {addTodo} = props
const [text, setText]= useState ('')

const OnaddTodo = (event) => {

    if(event.key === 'Enter' && text) {
      
        addTodo({
            id : Math.random(),
            text,
            completed : false

        })
        setText ('')
    }
    console.log("hiii")
}
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                 <div class="card card-white">
                    <div class="card-body">
                           
                                <input type="text" 
                                    class="form-control add-task" 
                                    // value={todoName}
                                    value={text}
                                    placeholder="New Todo..." 
                                    // onChange={props.updateTodo}/>
                                    onChange={(e) => setText(e.target.value)}
                                    onKeyPress={(e) => OnaddTodo(e)}
                                 
                                   
                                />
                              
                            
                            
                        </div>
                     </div>
                </div>
            </div>
        </div>

    )
    
}

export default InputTodo ;