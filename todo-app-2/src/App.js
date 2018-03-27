import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const todos = [{
        "title": "Cooking",
        "todoItem": "Cook food for 8 people",
        "author": "Aadesh",
        "date": "2018-02-12"
    },
    {
        "title": "Grocery",
        "todoItem": "Get Milk and Bread",
        "author": "Bhumika",
        "date": "2018-02-13"
    },
    {
        "title": "Cleaning",
        "todoItem": "Kitchen area and bathtub",
        "author": "Aadesh",
        "date": "2018-02-14"
    },
    {
        "title": "Laundry",
        "todoItem": "Take the bedsheets, pillow covers and curtains",
        "author": "Bhumika",
        "date": "2018-02-15"
    },
    {
        "title": "Bills",
        "todoItem": "Pay the electricity and Wi-fi bills",
        "author": "Bhumika",
        "date": "2018-02-16"
    }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <TodoList todos={todos} />              
        <Footer />
      </div>
    );
  }
}

export default App;
