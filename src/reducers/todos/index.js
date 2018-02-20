import { combineReducers } from 'redux';
import todosData from './todosData';
import todosStatus from './todosStatus';

export * from './todosData';
export * from './todosStatus';
export * from './selectors';

const todos = combineReducers({ data: todosData, status: todosStatus });
export default todos;
