import { createStore } from 'redux';
import todoReducer from './todoReducer';

export default (store = createStore(todoReducer));
