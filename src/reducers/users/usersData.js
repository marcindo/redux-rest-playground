import { getUsers } from 'helpers/api';

const initialState = [];


// actions
export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';

// action creators
export function getUsersStarted() {
  return { type: GET_USERS_REQUEST };
}

export function getUsersSuccess(users) {
  return { type: GET_USERS_SUCCESS, results: users };
}

export function getUsersError(error) {
  return { type: GET_USERS_ERROR, error };
}

// action dispatcher thunk
export function fetchUsers() {
  return async (dispatch) => {
    dispatch(getUsersStarted());
    try {
      const users = await getUsers();
      dispatch(getUsersSuccess(users.body));
    } catch (error) {
      dispatch(getUsersError(error));
    }
  };
}

// selectors
export function selectUsersData(state) {
  return state;
}

// reducers
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return action.results;
    }
    default: {
      return state;
    }
  }
}

