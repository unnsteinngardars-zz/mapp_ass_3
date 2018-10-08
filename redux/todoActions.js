import {
	GET_TODOS, GET_TODO, DELETE_TODO, CREATE_TODO, TOGGLE_STATUS,
} from './constants';

export const createTodo = todo => ({
	type: CREATE_TODO,
	payload: todo,
});

export const toggleStatus = id => ({
	type: TOGGLE_STATUS,
	payload: id,
});


export const getAllTodos = todos => ({
	type: GET_TODOS,
	payload: todos,
});

export const getTodo = todo => ({
	type: GET_TODO,
	payload: todo,
});

export const deleteTodo = todo => ({
	type: DELETE_TODO,
	payload: todo,
});
