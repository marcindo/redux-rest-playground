import PropTypes from 'prop-types';
import styled from 'styled-components';

import withRipple from 'components/ripple';

const colors = {
  tabSelected: '#407a72',
  tabRegular: '#919e9c',
  tabActive: '#30605a',
};

const Tab = styled.button.attrs({
  onClick: props => e => props.handleClick(e, props.id),
  title: props => props.title,
})`
  font-size: 2rem;
  margin: 8px;
  border: none;
  color: ${props => (props.selected ? colors.tabSelected : colors.tabRegular)};
  background: transparent;
  outline: none;
  border-bottom: ${props => (props.selected ? `2px solid ${colors.tabSelected}` : 'none')};

  &:hover {
    color: #407a72;
  }

  &:active {
    color: #30605a;
  }
`;

Tab.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withRipple(Tab);
