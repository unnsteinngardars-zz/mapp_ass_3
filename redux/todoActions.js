import {
	DELETE_TODO, CREATE_TODO, TOGGLE_STATUS, CLEAR_LIST,
} from './constants';

export const createTodo = todo => ({
	type: CREATE_TODO,
	payload: todo,
});

export const toggleStatus = todo => ({
	type: TOGGLE_STATUS,
	payload: todo,
});

export const deleteTodo = todo => ({
	type: DELETE_TODO,
	payload: todo,
});

export const clearList = () => ({
	type: CLEAR_LIST,
	payload: [],
});
