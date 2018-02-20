import request from './fetchData';


const root = 'https://jsonplaceholder.typicode.com';

function get(url, query = {}) {
  return request(root + url, { type: 'get', query, json: true });
}

export function getPosts() {
  return get('/posts');
}


export function getUsers() {
  return get('/users');
}


export function getTodos() {
  return get('/todos');
}

