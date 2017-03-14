import React, { PureComponent } from 'react';

import Btn from './btn';

export default class Root extends PureComponent {
  foo() { // eslint-disable-line class-methods-use-this
    const { map, ...rest } = window;

    console.log(Reflect.ownKeys(rest)); // eslint-disable-line no-console
  }

  render() {
    return (
      <Btn onClick={() => this.foo()}>Hello!</Btn>
    );
  }
}
