import React from 'react'


// make TodoList component
export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [],
            newTodoValue: {
                value: ''
            },
            editItems: []
        };
        // init handle fucntion
        this.handleChange = this.handleChange.bind(this);
        this.nahdleAdd = this.nahdleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCurrentValue = this.handleCurrentValue.bind(this);
        this.handleChangeEditStatus = this.handleChangeEditStatus.bind(this);
        this.handleCheckStatusEdit = this.handleCheckStatusEdit.bind(this);
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
        let newListItems = this.state.todoItems;
        newListItems.splice(key, 1);
        this.setState({todoItems: newListItems});
    }

    // edit current value
    handleCurrentValue(event, key) {
        let editedItem = this.state.todoItems;
        editedItem[key].value = event.target.value;
        this.setState({todoItems: editedItem});
    }

    // change edit statut
    handleChangeEditStatus(isEdit, key) {
        let newList = this.state.editItems;

        if (isEdit) {
            newList.push(key);
        } else {
            newList = newList.filter(function(item) {
                return item != key;
            });
        }

        this.setState({editItems: newList});
    }

    handleCheckStatusEdit(key) {

        return this.state.editItems.indexOf(key) >= 0;
    }

    render() {
        // generete todo list items
        let todoList = this.state.todoItems.map((item, key) => {
            return (
                <section key={key} className={"todo__item " + (this.handleCheckStatusEdit(key) ?  "item--edit-mode" : "")}>
                    <input className={"todo__item__value " + (this.handleCheckStatusEdit(key)  ?  "" : "item__change--not-active")}
                    value={item.value} onChange={(e) => this.handleCurrentValue(e, key)} readOnly/>
                    <section className="todo__change">
                        <div
                        className={"icon icon-edit " + (this.handleCheckStatusEdit(key)  ?  "edit--not-active" : "")}
                        onClick={() => this.handleChangeEditStatus(true, key)}></div>
                        <div
                        className={"icon icon-save " + (this.handleCheckStatusEdit(key) ?  "" : "save--not-active")}
                        onClick={() => this.handleChangeEditStatus(false, key)}></div>
                        <div className="icon icon-delete icon--indent" onClick={() => this.handleDelete(key)}></div>
                    </section>
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
