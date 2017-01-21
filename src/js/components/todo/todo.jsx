import React from 'react'


// make TodoList component
export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [{
                value: 'Позвонить президенту'
            }],
            newTodoValue: {
                value: ''
            }
        };
        // init handle fucntion
        this.handleChange = this.handleChange.bind(this);
        this.nahdleAdd = this.nahdleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // add new todo
    nahdleAdd(event) {
        this.setState({todoItems: [...this.state.todoItems, this.state.newTodoValue]});
        this.setState({newTodoValue: ''});
    }
    // bind todo in input
    handleChange(event) {
        this.setState({newTodoValue: {value: event.target.value}});
    }
    // delete one todo
    handleDelete(key) {
        let newListItems = this.state.todoItems.splice(1, key);
        this.setState({todoItems: newListItems});
    }

    render() {
        // generete todo list items
        let _this = this;
        let todoList = this.state.todoItems.map(function(item, key) {
            return (
                <section key={key} className="todo__item">
                    <div>{item.value}</div>
                    <div className="icon-delete"></div>
                </section>
                );
        });
        return (
            <section className="todo">
                <h1 className="todo__title">My todo list</h1>
                <section className="todo__list">{todoList}</section>
                <section className="todo__panel">
                    <input className="todo__new" value={this.state.newTodoValue.value || ''} onChange={this.handleChange} placeholder="Еще нужно .."/>
                    <button className="todo__add" onClick={this.nahdleAdd} disabled={!this.state.newTodoValue.value}>Добавить</button>
                </section>
            </section>
            )
    }
};
