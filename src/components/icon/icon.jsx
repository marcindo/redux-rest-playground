import React from 'react';
import PropTypes from 'prop-types';

import Icons from 'assets/icons.svg'; // Path to your icons.svg

const Icon = ({ name, size }) => (
  <svg width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 40,
};

export default Icon;
