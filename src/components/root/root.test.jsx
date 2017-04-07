import React from 'react';
import renderer from 'react-test-renderer';

import Root from '.';

it('Renders root', function () {
  const component = renderer.create(
    <Root />
  );

  expect(component).toMatchSnapshot();
});
