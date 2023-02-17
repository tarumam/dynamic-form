import styled from 'styled-components';
import { cardIconContainerType, cardIconIconType, cardIconTextType } from './types';

export const Container = styled.div<cardIconContainerType>`
  display:flex;
  flex:1;
  flex-direction:column;
  justify-content:  ${props => props.theme[props.path]?.justifyContent};
  align-items:  ${props => props.theme[props.path]?.alignItems};
  width:  ${props => props.theme[props.path]?.maxWidth};
  margin:15px;
`;

export const Icon = styled.img<cardIconIconType>`
  width:  ${props => props.theme[props.path]?.width};
`
//TODO: Extract this to a text component
export const Text = styled.p<cardIconTextType>`
  letter-spacing: 0em;
  font-family:  ${props => props.theme[props.path]?.fontFamily};
  font-size:  ${props => props.theme[props.path]?.fontSize};
  font-weight:  ${props => props.theme[props.path]?.fontWeight};
  line-height:  ${props => props.theme[props.path]?.lineHeight};
`