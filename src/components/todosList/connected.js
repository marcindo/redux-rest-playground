import { connect } from 'react-redux';
import { fetchTodos,
  selectTodos,
  selectTodosLoading,
  selectTodosError } from 'reducers/todos';
import TodosList from './todosList';

const mapStateToProps = state => ({
  todos: selectTodos(state),
  loading: selectTodosLoading(state),
  error: selectTodosError(state),
});

const mapDispatchToProps = dispatch => ({
  loadTodos: () => dispatch(fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
