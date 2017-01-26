import {
	ADD_TODO,
	DELETE_TODO,
	CHANGE_TODO,
	CHANGE_EDITING_ITEMS
} from '../constants/todo'

export function addTodo(todoItem) {
	return {
		type: ADD_TODO,
		todoItem
	};
};

export function deleteTodo(index) {
	return {
		type: DELETE_TODO,
		index
	};
};

export function changeTodo(index, value) {
	return {
		type: CHANGE_TODO,
		index,
		value
	}
}

export function changeEditingItems (typeMethod, key) {
	return {
		type: CHANGE_EDITING_ITEMS,
		typeMethod,
		key
	}
}