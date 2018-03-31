import React from 'react';
import './TodoList.css';
import TodoListItem from '../TodoListItem/';

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			success: false,
			error: false,
			message: ''
		};
	}
	getTodo(event) {
		event.preventDefault();
		var todo = {
			title: this.refs.title.value,
			todoItem: this.refs.todoItem.value,
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
	render() {
		return(
			<div id="mainContent" className="mainContent">
		        <h1>Welcome to TechCrat&apos;s Todo List</h1>
		        <div className="clearfix">
		            <div className="left-section">
		                <h2>List of Todo Items</h2>
		                <div id="todoLists">
		                	{
					          this.props.todos.map((todo, i) => {
					            return <TodoListItem todo={todo} key={i} />
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
		                    <input type="hidden" id="todoId" name="todoId" value="" />
		                    <input type="submit" name="action" value="Add Todo Item" id="addBtn" />
		                    <input type="submit" name="action" value="Update Todo Item" id="updateBtn" />
		                </form>
						<h4 className={`success ${this.state.success ? 'visible' : 'hide'}`}>Todo Item added successfully.</h4>
		            </div>
		        </div>
    		</div>
		);
	}
}