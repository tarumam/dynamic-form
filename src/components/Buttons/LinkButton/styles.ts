import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>`
padding: 12px 40px 9px 40px;

${(props) => css`
    ${props.theme[props.path]}
  `};
`