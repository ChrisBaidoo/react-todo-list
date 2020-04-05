import React, { Component } from 'react'
import Todos from './components/Todos'
import './App.css';


 class App extends Component {

  state = {
    todos :[
      {
        id: 1,
        title: "Wash dishes",
        completed: true
      },
      {
        id: 2,
        title: "Do abs",
        completed: true
      },

      {
        id: 3,
        title: "Read book", 
        completed: true
      },
    ]
  }
  
  //Toggle Completed
  markCompleted = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      } 
      return todo;
    })})
    console.log(id)
}
//Delete Todo
delTodo = (id) => {
console.log("hello" + id)
}

    render() {
      console.log(this.state.todos)

      return(
      <div className="App">
      <Todos todos ={this.state.todos} markCompleted={this.markCompleted} delTodo={this.delTodo}/>
    </div>
      )
        
    }
}



export default App;
