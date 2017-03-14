import React from 'react';
import { render } from 'react-dom';

import styles from 'normalize.css';
import Root from './components/root';

styles.use();

render(
  <Root />,
  document.querySelector('#app'),
);
