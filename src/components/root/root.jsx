import React, { Component } from 'react';

import PostsList from 'components/postsList';


export default class Root extends Component {
  foo() { // eslint-disable-line class-methods-use-this
    import(/* webpackChunkName: 'batman' */ 'foo')
      .then(foo => console.log(foo.default())); // eslint-disable-line no-console
  }

  render() {
    return (
      <PostsList />
    );
  }
}
