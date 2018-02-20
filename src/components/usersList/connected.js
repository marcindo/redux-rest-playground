import { connect } from 'react-redux';
import { fetchUsers,
  selectUsers,
  selectUsersLoading,
  selectUsersError } from 'reducers/users';
import UsersList from './usersList';

const mapStateToProps = state => ({
  users: selectUsers(state),
  loading: selectUsersLoading(state),
  error: selectUsersError(state),
});

const mapDispatchToProps = dispatch => ({
  loadUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
