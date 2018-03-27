import React from 'react';
import './Header.css';

export default class Header extends React.Component {
	render() {
		return(
			<header id="header" className="clearfix">
		        <nav className="menu">
		            <div className="left-header">
		                <span>TechCrat&apos;s Todo List</span>
		            </div>
		            <div className="right-header">
		                <span>
		                    <i className="fa fa-user"></i>Welcome, Aadesh!
		                </span>
		            </div>
		        </nav>
		    </header>
		);
	}
}