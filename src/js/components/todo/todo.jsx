import React from 'react'


// make TodoList component
export default class TodoList extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	listItems: [{
	    		value: 'Позвонить президенту'
	    	}]
	    };
  	}
	render() {
		// generete todo list items
		var todoList = this.state.listItems.map(function(item, key) {
			return (
				<section key={key}>
					<div>{item.value}</div>
					<img src="img/icons/rubbish-bin.png" />
				</section>
				);
		});
		return (
			<section className="app-wrap">
				<h1>My todo list</h1>
				<section className='todo-wrap'>{todoList}</section>
			</section>
			)
	}
};
