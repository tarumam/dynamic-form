import styled from 'styled-components';
import { cardIconContainerType } from './types';

export const Container = styled.div<cardIconContainerType>`
  display:flex;
  flex:1;
  flex-direction:column;
  justify-content:  ${props => props.theme[props.path]?.justifyContent};
  align-items:  ${props => props.theme[props.path]?.alignItems};
  width:  ${props => props.theme[props.path]?.maxWidth};
  margin:15px;
`;
