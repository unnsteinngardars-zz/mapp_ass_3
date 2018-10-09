import {
	DELETE_TODO, CREATE_TODO, TOGGLE_STATUS, CLEAR_LIST,
} from './constants';


const initialState = { todos: [] };

const todoReducer = (state = initialState, action) => {
	let todos = [];
	switch (action.type) {
	case CREATE_TODO:
		todos = [...state.todos, action.payload];
		return Object.assign({}, state, { todos });
	case TOGGLE_STATUS:
		todos = state.todos.map(todo => {
			if (todo.title === action.payload.title && todo.date === action.payload.date) {
				return Object.assign({}, todo, { completed: !todo.completed });
			}
			return todo;
		});
		return Object.assign({}, state, { todos });
	case DELETE_TODO:
		return { ...state, todos: state.todos.filter(item => action.payload !== item) };
	case CLEAR_LIST:
		return Object.assign({}, state, { todos });
	default:
		return state;
	}
};

export default todoReducer;
