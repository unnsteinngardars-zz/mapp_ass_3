import {
	GET_TODOS, GET_TODO, DELETE_TODO, CREATE_TODO, TOGGLE_STATUS,
} from './constants';


let incrementedId = 1;
const initialState = [];

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
	case CREATE_TODO:
		return [...state, Object.assign({}, action.payload, { id: incrementedId++ })];
	case TOGGLE_STATUS:
		return state.map(todo => {
			if (todo.id === action.payload) {
				return Object.assign({}, todo, { completed: !todo.completed });
			}
			return todo;
		});
	default:
		return state;
	}
};

export default todoReducer;
