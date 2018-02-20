import { combineReducers } from 'redux';
import postsData from './postsData';
import postsStatus from './postsStatus';

export * from './postsData';
export * from './postsStatus';
export * from './selectors';

const posts = combineReducers({ data: postsData, status: postsStatus });
export default posts;
