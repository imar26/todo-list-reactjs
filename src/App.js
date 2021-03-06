import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/';
import TodoList from './components/TodoList/';
import Footer from './components/Footer/';

const todos = [{
        "todoId": "",
        "title": "Cooking",
        "todoItem": "Cook food for 8 people",
        "author": "Aadesh",
        "date": "2018-02-12"
    },
    {
        "todoId": "",
        "title": "Grocery",
        "todoItem": "Get Milk and Bread",
        "author": "Bhumika",
        "date": "2018-02-13"
    },
    {
        "todoId": "",
        "title": "Cleaning",
        "todoItem": "Kitchen area and bathtub",
        "author": "Aadesh",
        "date": "2018-02-14"
    },
    {
        "todoId": "",
        "title": "Laundry",
        "todoItem": "Take the bedsheets, pillow covers and curtains",
        "author": "Bhumika",
        "date": "2018-02-15"
    },
    {
        "todoId": "",
        "title": "Bills",
        "todoItem": "Pay the electricity and Wi-fi bills",
        "author": "Bhumika",
        "date": "2018-02-16"
    }
];

const authors = ["Aadesh", "Bhumika", "Rohit", "Meven", "Li"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    }    
  }
  createTodo(todo) {
    this.state.todos.push(todo);
    this.setState({
      todos: this.state.todos
    });
  }
  deleteTodo(todoId) {
    for(let i=0; i<this.state.todos.length; i++) {
      if(this.state.todos[i].todoId === todoId) {
        this.state.todos.splice(i, 1);
        this.setState({
          todos: this.state.todos
        });
        return;
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <TodoList todos={todos} authors={authors} createTodo={this.createTodo.bind(this)} deleteTodo={this.deleteTodo.bind(this)}/>              
        <Footer />
      </div>
    );
  }
}

export default App;
