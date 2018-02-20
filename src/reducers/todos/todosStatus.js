import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from './todosData';

const initialState = {
  loading: false,
  error: null,
};

// actionsŚ
export const GET_TODOS_CLEAR_ERROR = 'GET_TODOS_CLEAR_ERROR';

// action creators
export function getTodosClearError() {
  return { type: GET_TODOS_CLEAR_ERROR };
}

// selectors
export function selectTodosStatusLoading(state) {
  return state.loading;
}

export function selectTodosStatusError(state) {
  return state.error;
}


// reducers
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS_REQUEST: {
      return { loading: true, error: null };
    }
    case GET_TODOS_SUCCESS: {
      return { loading: false, error: null };
    }
    case GET_TODOS_ERROR: {
      return { loading: false, error: action.error };
    }
    case GET_TODOS_CLEAR_ERROR: {
      return { ...state, error: null };
    }
    default: {
      return state;
    }
  }
}

