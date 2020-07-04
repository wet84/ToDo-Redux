import {
    ACTION_CHANGE_FORM_ITEM,
    ACTION_SAVE_FORM_ITEM,
    ACTION_DELETE_TASK,
    ACTION_TOGGLE
} from '../actions';

const initialState = {
    todoItems: [
        { id: 1, taskTitle: 'One', isDone: false },
        { id: 2, taskTitle: 'Two', isDone: false },
        { id: 3, taskTitle: 'Three', isDone: false },
    ],

    formItem: {
        taskTitle: '',
    },
};

function createTask(todoItems, todoItem) {
    todoItem.id = Date.now();
    todoItem.isDone = false;
    return [...todoItems, todoItem];
}

export default function(state = initialState, { type, payload }) {
    
    switch (type) {
        case ACTION_DELETE_TASK:
            return {
                ...state,
                todoItems: state.todoItems.filter(item => item.id !== payload)
            };

        case ACTION_CHANGE_FORM_ITEM:
            return {
                ...state,
                formItem: { ...state.formItem, ...payload }
            };

        case ACTION_SAVE_FORM_ITEM:
            return {
                ...state,
                todoItems: createTask(state.todoItems, payload),
                formItem: { ...state.taskTitle, taskTitle:'' }
            };

        case ACTION_TOGGLE:
            return {
                ...state,
                todoItems: state.todoItems.map(item =>
                    item.id !== payload ? item : { ...item, isDone: !item.isDone }
                )
            };

        default: return state;
    }
}