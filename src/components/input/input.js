import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text',
  size: props => (props.small ? 3 : 8),
})`
  border-radius: 3px;
  border: none;
  border-bottom: 1px solid black;
  padding: ${props => props.padding}px
`;

export default Input;
