import styled from "styled-components";
import { LabelType } from "./types";

export const StyledLabel = styled.label<LabelType>`
 margin: ${props => props.theme[props.path]?.labelMargin};
 font-family: ${props => props.theme[props.path]?.labelFontFamily};
 font-size: ${props => props.theme[props.path]?.labelFontSize};
 font-weight: ${props => props.theme[props.path]?.labelWeight};
 color: ${props => props.theme[props.path]?.labelcolor};
 line-height: ${props => props.theme[props.path]?.labelLineHeight};
`