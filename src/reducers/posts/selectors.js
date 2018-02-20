import { selectPostsData, selectPostsStatusLoading, selectPostsStatusError } from 'reducers/posts';

export function selectPosts(state) {
  return selectPostsData(state.posts.data);
}

export function selectPostsLoading(state) {
  return selectPostsStatusLoading(state.posts.status);
}

export function selectPostsError(state) {
  return selectPostsStatusError(state.posts.status);
}
