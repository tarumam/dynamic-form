import styled, { css } from 'styled-components';
import { HintInputType, TextBoxInputType } from './types';

export const TextBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.input<TextBoxInputType>`
${(props) => css`
  ${props.theme[props.path]}
`}
`;

export const HintInput = styled.span<HintInputType>`
${(props) => css`
  ${props.theme[props.path]}
`}
`;