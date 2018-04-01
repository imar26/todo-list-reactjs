import React from 'react';
import './TodoList.css';
import TodoListItem from '../TodoListItem/';

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			success: false,
			empty: false,
			updateSuccess: false,
			error: false,
			message: ''
		};		
	}
	getTodo(event) {
		event.preventDefault();
		if(this.refs.todoId.value) {
			for(let i=0; i<this.props.todos.length; i++) {
				if(this.props.todos[i].todoId == this.refs.todoId.value) {
					this.props.todos[i].title = this.refs.title.value.trim();
					this.props.todos[i].todoItem = this.refs.todoItem.value.trim();
					this.props.todos[i].author = this.refs.author.value;
					this.props.todos[i].date = this.refs.date.value;
					document.getElementById("todoListForm").reset();
					this.setState({
						updateSuccess: true		
					});
					setTimeout(() => {
						this.setState({
							updateSuccess: false
						});
					}, 2500);
				}
			}						
		} else if(this.checkObject()) {
			this.setState({
				error: true		
			});
			setTimeout(() => {
				this.setState({
					error: false
				});
			}, 2500);			
		} else {
			var todo = {
				todoId: Math.floor(Math.random() * 100000000),
				title: this.refs.title.value.trim(),
				todoItem: this.refs.todoItem.value.trim(),
				author: this.refs.author.value,
				date: this.refs.date.value
			};
			this.props.createTodo(todo);
			document.getElementById("todoListForm").reset();
			this.setState({
				success: true		
			});
			setTimeout(() => {
				this.setState({
					success: false
				});
			}, 2500);
		}
	}
	checkObject() {
		let flag = false;
		for(let i=0; i<this.props.todos.length; i++) {
			if(this.props.todos[i].title == this.refs.title.value && this.props.todos[i].todoItem == this.refs.todoItem.value && this.props.todos[i].author == this.refs.author.value && this.props.todos[i].date == this.refs.date.value) {
				flag = true;
				break;
			}
		}
		return flag;
	}
	editTodo(todo) {
		this.refs.todoId.value = todo.todoId;
		this.refs.title.value = todo.title;
		this.refs.todoItem.value = todo.todoItem;
		this.refs.author.value = todo.author;
		this.refs.date.value = todo.date;
	}
	deleteTodo(todoId) {
		this.props.deleteTodo(todoId);
	}
	render() {
		if(this.props.todos.length > 0) {
			return(
				<div id="mainContent" className="mainContent">
					<h1>Welcome to TechCrat&apos;s Todo List</h1>
					<div className="clearfix">
						<div className="left-section">
							<h2>List of Todo Items</h2>
							<div id="todoLists">
								{
									  this.props.todos.map((todo, i) => {
										return <TodoListItem todo={todo} key={i} editTodoItem={this.editTodo.bind(this)} deleteTodoItem={this.deleteTodo.bind(this)} />
									  })
								}
							</div>
						</div>
						<div className="right-section">
							<h2>Add/Update Todo Item</h2>
							<form method="post" id="todoListForm" onSubmit={this.getTodo.bind(this)}>
								<label htmlFor="title">
									Title <span className="required">*</span>
								</label>
								<input type="text" id="title" name="title" ref="title" required />
								<label htmlFor="todoItem">
									Todo Item <span className="required">*</span>
								</label>
								<textarea id="todoItem" name="todoItem" rows="3" ref="todoItem" required></textarea>
								<label htmlFor="author">
									Author <span className="required">*</span>
								</label>
								<select id="author" name="author" ref="author">
									{
										this.props.authors.map((author, i) => {
											return <option value={author} key={i}>{author}</option>
										})
									}
								</select>
								<label htmlFor="date">
									Date <span className="required">*</span>
								</label>
								<input type="date" id="date" name="date" ref="date" required />
								<input type="hidden" id="todoId" name="todoId" ref="todoId" value="" />
								<input type="submit" name="action" value="Add/Update Todo Item" id="addBtn" />
							</form>
							<h4 className={`success ${this.state.success ? 'visible' : 'hide'}`}>Todo Item added successfully.</h4>
							<h4 className={`success ${this.state.updateSuccess ? 'visible' : 'hide'}`}>Todo Item updated successfully.</h4>
							<h4 className={`error ${this.state.error ? 'visible' : 'hide'}`}>Todo item already exists.</h4>
						</div>
					</div>
				</div>
			);
		} else {
			return(
				<div id="mainContent" className="mainContent">
					<h1>Welcome to TechCrat&apos;s Todo List</h1>
					<div className="clearfix">
						<div className="left-section">
							<h2>List of Todo Items</h2>
							<div id="todoLists">
								<h4 className="error">No todo items available.</h4>
							</div>
						</div>
						<div className="right-section">
							<h2>Add/Update Todo Item</h2>
							<form method="post" id="todoListForm" onSubmit={this.getTodo.bind(this)}>
								<label htmlFor="title">
									Title <span className="required">*</span>
								</label>
								<input type="text" id="title" name="title" ref="title" required />
								<label htmlFor="todoItem">
									Todo Item <span className="required">*</span>
								</label>
								<textarea id="todoItem" name="todoItem" rows="3" ref="todoItem" required></textarea>
								<label htmlFor="author">
									Author <span className="required">*</span>
								</label>
								<select id="author" name="author" ref="author">
									{
										this.props.authors.map((author, i) => {
											return <option value={author} key={i}>{author}</option>
										})
									}
								</select>
								<label htmlFor="date">
									Date <span className="required">*</span>
								</label>
								<input type="date" id="date" name="date" ref="date" required />
								<input type="hidden" id="todoId" name="todoId" ref="todoId" value="" />
								<input type="submit" name="action" value="Add/Update Todo Item" id="addBtn" />
							</form>
							<h4 className={`success ${this.state.success ? 'visible' : 'hide'}`}>Todo Item added successfully.</h4>
							<h4 className={`success ${this.state.updateSuccess ? 'visible' : 'hide'}`}>Todo Item updated successfully.</h4>
						</div>
					</div>
				</div>
			);
		}	
	}
}