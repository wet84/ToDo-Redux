export const ACTION_CHANGE_FORM_ITEM = 'ACTION_CHANGE_FORM_ITEM';
export function changeFormItem(changes) {
    return {
        type: ACTION_CHANGE_FORM_ITEM,
        payload: changes
    };
}

export const ACTION_SAVE_FORM_ITEM = 'ACTION_SAVE_FORM_ITEM';
export function saveFormItem(save) {
    return {
        type: ACTION_SAVE_FORM_ITEM,
        payload: save
    };
}

export const ACTION_DELETE_TASK = 'ACTION_DELETE_TASK';
export function deleteTodoTask(id) {
    return {
        type: ACTION_DELETE_TASK,
        payload: id
    };
}

export const ACTION_TOGGLE = 'ACTION_TOGGLE';
export function toggleTodoTask(id) {
    return {
        type: ACTION_TOGGLE,
        payload: id
    };
}