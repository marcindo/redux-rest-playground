
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Root from '.';

it('Renders root', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Root />);
  const component = renderer.getRenderOutput();

  expect(component).toMatchSnapshot();
});
