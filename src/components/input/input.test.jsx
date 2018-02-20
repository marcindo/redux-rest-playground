import React from 'react';
import renderer from 'react-test-renderer';

import Input from '.';

it('Renders btn', () => {
  ['Lorem', 'Ipsum'].forEach((text) => {
    const component = renderer.create(<Input>{text}</Input>);

    expect(component).toMatchSnapshot();
  });
});
