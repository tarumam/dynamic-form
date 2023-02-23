import styled from 'styled-components';
import { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>`
padding: 12px 40px 9px 40px;

height: ${props => props.theme[props.path]?.height};
width: ${props => props.theme[props.path]?.width};
left: ${props => props.theme[props.path]?.left};
border-radius: ${props => props.theme[props.path]?.borderRadius};
background:${props => props.theme[props.path]?.background};
font-family: ${props => props.theme[props.path]?.fontFamily};
font-size:${props => props.theme[props.path]?.fontSize};
font-weight:${props => props.theme[props.path]?.fontWeight};
line-height: ${props => props.theme[props.path]?.lineHeight};
color: ${props => props.theme[props.path]?.color};
margin: ${props => props.theme[props.path]?.margin};
`