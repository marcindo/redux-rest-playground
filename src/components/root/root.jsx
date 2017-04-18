import React, { PureComponent } from 'react';

import Btn from 'components/btn';

export default class Root extends PureComponent {
  foo() { // eslint-disable-line class-methods-use-this
    import('foo.js')
        .then(foo => console.log(foo.default())); // eslint-disable-line no-console
  }

  render() {
    return (
      <Btn onClick={() => this.foo()}>Hello!</Btn>
    );
  }
}
