import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
  max-width: calc(33.33% - 16px);
  flex-basis: 33.33%;
  flex: none;
  border: 1px solid #407a72;
  display: inline-block;
  margin: 8px;
`;
const Title = styled.h3`
  padding: 8px;
`;

const ChildDiv = styled.div`
  padding: 16px
`;

const propTypes = {
  title: PropTypes.node,
  children: PropTypes.node.isRequired,
};

function Card(props) {
  const { title, children } = props;
  return (
    <Root>
      <Title>{title}</Title>
      <ChildDiv>
        {children}
      </ChildDiv>
    </Root>
  );
}

Card.propTypes = propTypes;

Card.defaultProps = {
  title: null,
};

export default Card;
