import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'components/card';

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class PostsList extends Component {
  static propTypes = {
    loadPosts: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }
  static defaultProps = {
    error: null,
  }

  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    const { posts, loading, error } = this.props;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
      <PostsContainer>
        {
          posts.map(post => (
            <Card
              key={post.id}
              title={post.title}
            >
              {post.body}
            </Card>))
        }
      </PostsContainer>
    );
  }
}

export default PostsList;
