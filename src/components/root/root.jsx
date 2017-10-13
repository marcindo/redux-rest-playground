import React, { Component } from 'react';

import Btn from 'components/btn';

const PrettyBtn = Btn.extend`
  margin: 10px;
  box-shadow: 0 0 0 10px orange;
`;

export default class Root extends Component {
  foo() { // eslint-disable-line class-methods-use-this
    import(/* webpackChunkName: 'batman' */ 'foo')
      .then(foo => console.log(foo.default())); // eslint-disable-line no-console
  }

  render() {
    return (
      <PrettyBtn onClick={() => this.foo()}>Hello!</PrettyBtn>
    );
  }
}
