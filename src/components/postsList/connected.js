import { connect } from 'react-redux';
import { fetchPosts,
  selectPosts,
  selectPostsLoading,
  selectPostsError } from 'reducers/posts';
import PostsList from './postList';

const mapStateToProps = state => ({
  posts: selectPosts(state),
  loading: selectPostsLoading(state),
  error: selectPostsError(state),
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
