export const DELETE_TODO = 'DELETE_TODO';
export function deleteTodo(payload) {
    return { type: DELETE_TODO, payload };
}

export const TOGGLE_TODO = 'TOGGLE_TODO';
export function toggleTodo(payload) {
    return { type: TOGGLE_TODO, payload };
}

export const SAVE_NEW_TODO = 'SAVE_NEW_TODO';
export function saveNewTodo(payload) {
    return { type: SAVE_NEW_TODO, payload };
}