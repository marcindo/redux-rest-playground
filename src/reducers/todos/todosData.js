import { getTodos } from 'helpers/api';

const initialState = [];


// actions
export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR';

// action creators
export function getTodosStarted() {
  return { type: GET_TODOS_REQUEST };
}

export function getTodosSuccess(todos) {
  return { type: GET_TODOS_SUCCESS, results: todos };
}

export function getTodosError(error) {
  return { type: GET_TODOS_ERROR, error };
}

// action dispatcher thunk
export function fetchTodos() {
  return async (dispatch) => {
    dispatch(getTodosStarted());
    try {
      const todos = await getTodos();
      dispatch(getTodosSuccess(todos.body));
    } catch (error) {
      dispatch(getTodosError(error));
    }
  };
}

// selectors
export function selectTodosData(state) {
  return state;
}

// reducers
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS_SUCCESS: {
      return action.results;
    }
    default: {
      return state;
    }
  }
}

