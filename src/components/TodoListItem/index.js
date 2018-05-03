import React from 'react';
import moment from 'moment';

export default class TodoListItem extends React.Component {
	editTodo(todo) {
		this.props.editTodoItem(todo);
	}
	deleteTodo(todoId) {
		this.props.deleteTodoItem(todoId);
	}
	render() {
		let date = this.props.todo.date;
		let formattedDate = moment(date).format('LL');
		this.props.todo.todoId = Math.floor(Math.random() * 100000000);
		return(
        	<div>
	          <h3>{ this.props.todo.title }</h3>
	          <p>{ this.props.todo.todoItem }</p>
	          <i>Created By: { this.props.todo.author }</i>
	          <i>Date: { formattedDate }  </i>
	          <button className="editBtn fa" onClick={() => this.editTodo(this.props.todo)}>Edit</button>
	          <button className="deleteBtn fa" onClick={() => this.deleteTodo(this.props.todo.todoId)}>Delete</button>
	        </div>
		);
	}
}