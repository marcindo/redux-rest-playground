import { combineReducers } from 'redux';
import usersData from './usersData';
import usersStatus from './usersStatus';

export * from './usersData';
export * from './usersStatus';
export * from './selectors';

const users = combineReducers({ data: usersData, status: usersStatus });
export default users;
