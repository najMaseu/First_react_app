import React, {Component} from 'react';
import './App.css';
import Todos from "./components/Todos";
import Header from "./components/layout/Header"
import AddTodo from "./components/addTodo"
import uuid from "uuid"

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Learn React",
        completed: false
      }, {
        id: uuid.v4(),
        title: "Electroaccoustics test",
        completed: false
      }, {
        id: uuid.v4(),
        title: "Law assignment",
        completed: false
      }
    ]
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed
        return todo
      })
    })
  }

  //Delete todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  //AddTodo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>);
    }
  }

export default App;
