import styled from 'styled-components';

// https://styled-components.com/docs/basics#passed-props
export const TextField = styled.input`
  color: ${(props) => props.inputColor || 'orange'};
`;
