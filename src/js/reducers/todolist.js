import {
    ADD_TODO,
    DELETE_TODO,
    CHANGE_TODO,
    CHANGE_EDITING_ITEMS
} from '../constants/todo'

const initialState = {
    todoItems: [{
        value: 'Позвонить президенту'
    }],
    newTodoValue: {
        value: ''
    },
    editItems: []
}

export default function todo(state = initialState, action) {
    let newList = state.todoItems;
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {todoItems: [...state.todoItems, action.todoItem]});

        case DELETE_TODO:
            newList.splice(action.index, 1);

            return Object.assign({}, state, {todoItems: newList});

        case CHANGE_TODO:
            newList[action.index].value = action.value;

            return Object.assign({}, state, {todoItems: newList});

        case CHANGE_EDITING_ITEMS:
            let newEditingList = state.editItems;

            if (action.typeMethod) {
                  newEditingList.push(action.key);  
            } else {
                newEditingList = newEditingList.filter(function(item) {
                    return item != action.key;
                })
            }
            
            return Object.assign({}, state, {editItems: newEditingList});

        default:
            return state;
    }
}