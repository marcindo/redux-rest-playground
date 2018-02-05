import React, { Component } from 'react';
import { getPosts } from 'helpers/api';

export default class PostsList extends Component {
  state = {
    posts: [],
  }
  async componentDidMount() {
    const posts = await getPosts();
    console.log(posts);
    this.setState({ posts });
  }

  render() {
    return (
      <ul>
        {this.state.posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    );
  }
}
