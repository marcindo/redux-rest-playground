
import React from 'react';
import renderer from 'react-test-renderer';
import Root from '.';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));


it('Renders root', () => {
  const component = renderer.create(<Root />);

  expect(component).toMatchSnapshot();
});
