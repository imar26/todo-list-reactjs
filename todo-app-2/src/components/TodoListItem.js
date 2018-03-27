import React from 'react';
import moment from 'moment';

export default class TodoListItem extends React.Component {
	constructor(props) {
		super(props);		
	}
	render() {
		let date = this.props.todo.date;
		let formattedDate = moment(date).format('LL');
		return(
        	<div>
	          <h3>{ this.props.todo.title }</h3>
	          <p>{ this.props.todo.todoItem }</p>
	          <i>Created By: { this.props.todo.author }</i>
	          <i>Date: { formattedDate }  </i>
	          <button className="editBtn fa">Edit</button>
	          <button className="deleteBtn fa">Delete</button>
	        </div>
		);
	}
}