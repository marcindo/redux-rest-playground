import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { normalize } from 'polished';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';

import Root from 'components/root';
import store from './store';

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
        <Provider store={store}>
          <RootComponent />
        </Provider>
      </AppContainer>
    ),
    document.querySelector('#app'),
  );
}
