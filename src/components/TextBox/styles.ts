import styled from 'styled-components';
import { HintInputType, TextBoxInputType } from './types';

export const TextBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.input<TextBoxInputType>`
  border-radius: ${props => props.theme[props.path]?.borderRadius};
  padding: ${props => props.theme[props.path]?.padding};
  margin: ${props => props.theme[props.path]?.margin};
  border: ${props => props.theme[props.path]?.border};
  height: ${props => props.theme[props.path]?.height};
  width: ${props => props.theme[props.path]?.width};
  font-size: ${props => props.theme[props.path]?.fontSize};
`

export const HintInput = styled.span<HintInputType>`
 margin: ${props => props.theme[props.path]?.hintMargin};
 font-family: ${props => props.theme[props.path]?.hintFontFamily};
 font-size: ${props => props.theme[props.path]?.hintFontSize};
 font-size: ${props => props.theme[props.path]?.hintWeight};
 color: ${props => props.theme[props.path]?.hintColor};
`