import request from './fetchData';


const root = 'https://jsonplaceholder.typicode.com';

async function get(url, query = {}) {
  try {
    const response = await request(root + url, { type: 'got', query, json: true });
    return response.body;
  } catch (error) {
    return error;
  }
}

export function getPosts() {
  return get('/posts');
}

