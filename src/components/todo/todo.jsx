import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Checkbox from 'components/checkbox';

const Root = styled.div`
  flex: none;
  border: 1px solid #407a72;
  display: flex;
  margin: 8px;
  background: #407a72;
  align-content: center;
  border-radius: 20px;
`;
const Title = styled.div`
  color: white;
  padding: 8px;
`;

const CheckboxCircle = styled.div`
  background: white;
  fill: #407a72;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;


const propTypes = {
  title: PropTypes.node,
  completed: PropTypes.bool,
  id: PropTypes.number.isRequired,
};

function Todo(props) {
  const { title, completed, id } = props;
  return (
    <Root>
      <Title>{title}</Title>
      <CheckboxCircle>
        <Checkbox id={id} completed={completed} />
      </CheckboxCircle>
    </Root>
  );
}

Todo.propTypes = propTypes;

Todo.defaultProps = {
  title: null,
  completed: false,
};

export default Todo;
