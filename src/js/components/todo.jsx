import React from 'react'
import TodoItem from './todoitem'


// make TodoList component
export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodoValue: {}
        };
        // init handle fucntion
        this.handleChange = ::this.handleChange;
        this.handleAdd = ::this.handleAdd;
    }

    // add new todo
    handleAdd() {
        this.props.todoActions.addTodo(this.state.newTodoValue);
        this.setState({newTodoValue: ''});
    }
    // bind todo in input
    handleChange(event) {
        this.setState({newTodoValue: {value: event.target.value}});
    }

    render() {
        // generete todo list items
        const todoActions = this.props.todoActions;
        const todo = this.props.todo;
        const todoList = this.props.todo.todoItems.map((item, key) => {
            return (
                <TodoItem todo={todo} todoActions={todoActions} key={key} index={key} item={item}/>
            )
        });
        return (
            <section className="todo">
                <h1 className="todo__title">My todo list</h1>
                <section className="todo__list">{todoList}</section>
                <section className="todo__panel">
                    <input className="todo__new" value={this.state.newTodoValue.value || ''} onChange={this.handleChange} placeholder="Еще нужно .."/>
                    <button className="todo__add" onClick={this.handleAdd} disabled={!this.state.newTodoValue.value}>Добавить</button>
                </section>
            </section>
            )
    }
};
