import React from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem';

export default class TodoList extends React.Component {
	constructor(props) {
        super(props);
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
		                <form method="post" id="todoListForm">
		                    <label htmlFor="title">
		                        Title <span className="required">*</span>
		                    </label>
		                    <input type="text" id="title" name="title" required="required" />
		                    <label htmlFor="todoItem">
		                        Todo Item <span className="required">*</span>
		                    </label>
		                    <textarea id="todoItem" name="todoItem" rows="3" required="required"></textarea>
		                    <label htmlFor="author">
		                        Author <span className="required">*</span>
		                    </label>
		                    <select id="author" name="author">
		                        <option value="Aadesh">Aadesh</option>
		                        <option value="Bhumika">Bhumika</option>
		                        <option value="Rohit">Rohit</option>
		                        <option value="Meven">Meven</option>
		                        <option value="Li">Li</option>
		                    </select>
		                    <label htmlFor="date">
		                        Date <span className="required">*</span>
		                    </label>
		                    <input type="date" id="date" name="date" required="required" />
		                    <input type="hidden" id="todoId" name="todoId" value="" />
		                    <input type="submit" name="action" value="Add Todo Item" id="addBtn" />
		                    <input type="submit" name="action" value="Update Todo Item" id="updateBtn" />
		                </form>
		            </div>
		        </div>
    		</div>
		);
	}
}