import React, { Component, useState } from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import Todo from './components/Todo';
import FooterList from './components/FooterList';
import TodoList from './components/TodoList';
import BtnDarkMode from './components/BtnDarkMode';

const filters = (todos =[] , etat ='' , id) => {
  switch(etat) {
    case 'ACTIVE' :
      return todos.filter(todo => todos.completed)
    case 'COMPLETED' :
        return todos.filter(todo => todos.completed)
     case 'REMOVE' :
          return todos.filter(todo => todo.id !==id)
    default:
      return todos
      
  }
}




 class App extends Component {

  state ={
    todos :[
      {
        id:1,
        text: "First task",
        completed: true
      },
      {
        id:2,
        text: "Second task",
        completed: false
      },

    ],

    todoEditingId:'' ,
    etat:'ALL'

  }

  



//   // addTodo = (e) => {
//   //   e.preventDefault();
//   //   let todoName=this.state.todoName;
//   //  let  todos=this.state.todos;
//   //   todos.push ({text:todoName})

//   //   this.setState({
//   //     todos,
//   //     todoName:""
//   //   })

//   //  };
  
   


  addTodo = (todo) => {
    this.setState(preState => ({
      todos : [...preState.todos, todo]
    
    }))
    console.log(todo)

  }

  getTodoEditingId = (id ='') => {
    this.setState ({  todoEditingId:id})
  }
  //j'ai copié collé le code tel que j'ai trouvé
  onEditTodo = (todo ={} , index = -1) => {
    if (index>= 0) {
      const {todos :list} =this.state
    list.splice  (index , 1 , todo )
    this.setState({todos :list,
                todoEditingId :''})  
  }
  }
  // remove = (todo, index) => {
  //    let  todos = this.state.todos;
  //   todos.splice (index,1)
  //   this.setState({
  //   todos
  //    })
  //   console.log("hiii")
  //    let  todos = this.state.todos;
  //   const updateTodos = [...todos].filter((todo) =>
  //     todo.index !== todo);
  //   this.setState([...updateTodos])
  //   console.log(todo)
    
  // }

 

//   // remove = (index) => {
//   //   console.log(index)
//   //   let  todos = this.state.todos;
//   //    todos.filter(todo => {
//   //   return todo.index !== index
//   //    })

    

  // toggleCompleted = (id='')=> {
  //  this.setState(preState =>({
  //    todos: preState.todos.map( todo =>  todo.id ? ({...todo, completed : !todo.completed}) :todo)
  //  }))
  // };

  toggleCompleted = (index)=> {
    let  todos=this.state.todos;
    todos[index].completed = !todos[index].completed;
    this.setState({
      todos
    })
  };

  remove =(id) => {
    const {todos} =this.state
    this.setState ({
      todos :filters (todos , 'REMOVE',id)
    })
    console.log('hiiii')
  }

   setEtatFilter = (etat) => {
    this.setState ({
      etat
    })
}
  render () {
    const {todos, todoEditingId, etat} = this.state;
  
 
        return (
      <section className="App">
        <div className='title'>todos</div>
      
       
        <InputTodo  addTodo={this.addTodo} todos ={todos} />
        <TodoList todos= {filters(todos , etat) }
                  todoEditingId ={todoEditingId} 
                  getTodoEditingId ={this.getTodoEditingId}
                  onEditTodo ={this.onEditTodo}
                  toggleCompleted ={this.toggleCompleted}
                  remove= {this.remove}
                    />

        {/* <FooterList  setEtatFilter={(etat) => this.setState({ etat }) } etat ={etat}/> */}
        <FooterList  setEtatFilter={this.setEtatFilter } etat ={etat}/>
  
      </section>
    );
  }

}



// function App (props) {
// const [todos, setTodos] = useState ([
//   {
//     id:1,
//     text: "First task",
//     completed: true
//   },
//   {
//     id:2,
//     text: "Second task",
//     completed: false
//   },
// ])

// const [todoEditingId, settodoEditingId]= useState ('')
  
// const [etat, setEtat] =useState("All")
  
  
   


//   const addTodo = (todo) => {
//     setTodos(preState => ({
//       todos : [...preState.todos, todo]
    
//     }))
//     console.log(todo)

//   }

//   const getTodoEditingId = (id ='') => {
//   setTodos ({  todoEditingId:id})
//   }
//   // j'ai copié collé le code tel que j'ai trouvé
//   const onEditTodo = (todo ={} , index = -1) => {
//     if (index>= 0) {
//       const {todos :list} =todos
//     list.splice  (index , 1 , todo )
//     this.setTodos({todos :list,
//                 todoEditingId :''})  
//   }
//   }
 

//  const toggleCompleted = (index)=> {

//     todos[index].completed = !todos[index].completed;
//     setTodos({
//       todos
//     })
//   };

//   const remove =(id) => {

//     setTodos ({
//       todos :filters (todos , 'REMOVE',id)
//     })
//     console.log('hiiii')
//   }

// //    setEtat = (etat) => {
// //     setEtat ({
// //       etat
// //     })
// // }
//   return (
   
  
 
         
//       <section className="App">
//         <div className='title'>todos</div>
      
       
//         <InputTodo  addTodo={addTodo} todos ={todos} />
//         <TodoList todos= {filters(todos , etat) }
//                   todoEditingId ={todoEditingId} 
//                   getTodoEditingId ={getTodoEditingId}
//                   onEditTodo ={onEditTodo}
//                   toggleCompleted ={toggleCompleted}
//                   remove= {remove}
//                     />

//         {/* <FooterList  setEtatFilter={(etat) => this.setState({ etat }) } etat ={etat}/> */}
//         <FooterList  setEtat={setEtat } etat ={etat}/>
  
//       </section>
//     );
//   }


export default App;
