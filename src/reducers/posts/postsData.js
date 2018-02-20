import { getPosts } from 'helpers/api';

const initialState = [];


// actions
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

// action creators
export function getPostsStarted() {
  return { type: GET_POSTS_REQUEST };
}

export function getPostsSuccess(posts) {
  return { type: GET_POSTS_SUCCESS, results: posts };
}

export function getPostsError(error) {
  return { type: GET_POSTS_ERROR, error };
}

// action dispatcher thunk
export function fetchPosts() {
  return async (dispatch) => {
    dispatch(getPostsStarted());
    try {
      const posts = await getPosts();
      dispatch(getPostsSuccess(posts.body));
    } catch (error) {
      dispatch(getPostsError(error));
    }
  };
}

// selectors
export function selectPostsData(state) {
  return state;
}

// reducers
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_SUCCESS: {
      return action.results;
    }
    default: {
      return state;
    }
  }
}

