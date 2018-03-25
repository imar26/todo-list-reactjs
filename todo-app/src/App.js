import React, { Component } from 'react';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 0,
          text: "Make dinner tonight"
        },
        {
          id: 1,
          text: "Go for laundry"
        },
        {
          id: 2,
          text: "Learn to make a React App"
        }
      ],
      nextId: 3
    }
  }

  addTodo(text) {
    let todoList = this.state.todos;
    todoList.push({id: this.state.nextId, text: text});
    this.setState({
      todos: todoList,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo.bind(this)} />
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={() => this.removeTodo(todo.id)} />
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
