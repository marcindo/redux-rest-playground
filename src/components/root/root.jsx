import React, { Component } from 'react';

import Btn from 'components/btn';

export default class Root extends Component {
  foo() { // eslint-disable-line class-methods-use-this
    import(/* webpackChunkName: 'batman' */ 'foo')
        .then(foo => console.log(foo.default())); // eslint-disable-line no-console
  }

  render() {
    return (
      <Btn onClick={() => this.foo()}>Hello!</Btn>
    );
  }
}
