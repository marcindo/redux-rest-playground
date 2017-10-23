import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { normalize } from 'polished';
import { injectGlobal } from 'styled-components';

import Root from './components/root';

injectGlobal`${normalize()}`;

render(Root);

if (module.hot) {
  module.hot.accept('./components/root', () => {
    render(Root);
  });
}

function render(RootComponent) {
  ReactDOM.render(
    (
      <AppContainer>
        <RootComponent />
      </AppContainer>
    ),
    document.querySelector('#app'),
  );
}
