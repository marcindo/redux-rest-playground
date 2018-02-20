import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_ERROR } from './usersData';

const initialState = {
  loading: false,
  error: null,
};

// actionsŚ
export const GET_USERS_CLEAR_ERROR = 'GET_USERS_CLEAR_ERROR';

// action creators
export function getusersClearError() {
  return { type: GET_USERS_CLEAR_ERROR };
}

// selectors
export function selectUsersStatusLoading(state) {
  return state.loading;
}

export function selectUsersStatusError(state) {
  return state.error;
}


// reducers
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUEST: {
      return { loading: true, error: null };
    }
    case GET_USERS_SUCCESS: {
      return { loading: false, error: null };
    }
    case GET_USERS_ERROR: {
      return { loading: false, error: action.error };
    }
    case GET_USERS_CLEAR_ERROR: {
      return { ...state, error: null };
    }
    default: {
      return state;
    }
  }
}

