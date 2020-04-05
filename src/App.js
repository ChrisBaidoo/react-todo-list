import React, { Component } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import { v4 as uuidv4 } from 'uuid'
import './App.css';


 class App extends Component {

  state = {
    todos :[
      {
        id: uuidv4(),
        title: "Wash dishes",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Do abs",
        completed: true
      },

      {
        id: uuidv4(),
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
this.setState({todos: [...this.state.todos.filter(todo =>
   todo.id !== id
)]})
}

//Add Todo
addTodo = (title) => {
  const newTodo = {
    id: uuidv4(),
    title,
    completed: false
  }
  this.setState({todos: [...this.state.todos, newTodo]})
}

    render() {
      console.log(this.state.todos)

      return(
      <div className="App">
        <div className="container">
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
      <Todos todos ={this.state.todos} markCompleted={this.markCompleted} delTodo={this.delTodo}/>
        </div>
    </div>
      )
        
    }
}



export default App;
