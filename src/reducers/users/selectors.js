import { selectUsersData, selectUsersStatusLoading, selectUsersStatusError } from './';

export function selectUsers(state) {
  return selectUsersData(state.users.data);
}

export function selectUsersLoading(state) {
  return selectUsersStatusLoading(state.users.status);
}

export function selectUsersError(state) {
  return selectUsersStatusError(state.users.status);
}

