import { selectTodosData, selectTodosStatusLoading, selectTodosStatusError } from './';

export function selectTodos(state) {
  return selectTodosData(state.todos.data);
}

export function selectTodosLoading(state) {
  return selectTodosStatusLoading(state.todos.status);
}

export function selectTodosError(state) {
  return selectTodosStatusError(state.todos.status);
}
