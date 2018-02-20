import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from './postsData';

const initialState = {
  loading: false,
  error: null,
};

// actions
export const GET_POSTS_CLEAR_ERROR = 'GET_POSTS_CLEAR_ERROR';

// action creators
export function getPostsClearError() {
  return { type: GET_POSTS_CLEAR_ERROR };
}

// selectors
export function selectPostsStatusLoading(state) {
  return state.loading;
}

export function selectPostsStatusError(state) {
  return state.error;
}


// reducers
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_REQUEST: {
      return { loading: true, error: null };
    }
    case GET_POSTS_SUCCESS: {
      return { loading: false, error: null };
    }
    case GET_POSTS_ERROR: {
      return { loading: false, error: action.error };
    }
    case GET_POSTS_CLEAR_ERROR: {
      return { ...state, error: null };
    }
    default: {
      return state;
    }
  }
}

