import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from 'components/icon';


const CheckboxBase = styled.input.attrs({
  type: 'checkbox',
  id: props => props.id,
  checked: props => props.checked,

})`
  appearance: none;
`;

const CheckboxLabel = styled.label.attrs({
  htmlFor: props => props.inputId,
})`
    font-size: 14px;
    top: 0px;
    left: 3px;
`;


const propTypes = {
  completed: PropTypes.bool,
  id: PropTypes.number.isRequired,
};

function Checkbox(props) {
  const { completed, id } = props;
  const idString = `checkbox-${id}`;
  return (
    <React.Fragment>
      <CheckboxBase id={idString} checked={completed} />
      <CheckboxLabel inputId={idString}>{ completed ? <Icon name="checkmark" /> : null }</CheckboxLabel>
    </React.Fragment>
  );
}

Checkbox.propTypes = propTypes;

Checkbox.defaultProps = {
  completed: false,
};

export default Checkbox;
