import React, { Component } from 'react'

export default class todoItem extends Component {

	// delete one todo
    handleDelete(key) {
        this.props.todoActions.deleteTodo(key);
        this.props.todoActions.changeEditingItems(false, key);
    }

    handleCheckStatusEdit(key) {
        return this.props.todo.editItems.indexOf(key) >= 0;
    }

	render() {
		const index = this.props.index;
		const item = this.props.item;
		const {changeEditingItems, changeTodo, deleteTodo} = this.props.todoActions;
		
		return (
            <section className={"todo__item " + (this.handleCheckStatusEdit(index) ?  "item--edit-mode" : "")}>
                <div className={"todo__item__value " + (this.handleCheckStatusEdit(index)  ?  "item__value--not-active" : "")}>
                    {item.value}
                </div>
                <input className={"todo__item__change " + (this.handleCheckStatusEdit(index)  ?  "" : "item__change--not-active")}
                value={item.value} onChange={(e) => changeTodo(e, index)} />
                <section className="todo__change">
                    <div
                    className={"icon icon-edit " + (this.handleCheckStatusEdit(index)  ?  "edit--not-active" : "")}
                    onClick={() => changeEditingItems(true, index)}></div>
                    <div
                    className={"icon icon-save " + (this.handleCheckStatusEdit(index) ?  "" : "save--not-active")}
                    onClick={() => changeEditingItems(false, index)}></div>
                    <div className="icon icon-delete icon--indent" onClick={() => this.handleDelete(index)}></div>
                </section>
            </section>
        );
	}
}