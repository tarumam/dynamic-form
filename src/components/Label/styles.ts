import styled, { css } from "styled-components";
import { LabelType } from "./types";

export const StyledLabel = styled.label<LabelType>`
  ${(props) => css`
    ${props.theme[props.path]}
  `}
`;
