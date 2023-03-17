import styled, { css } from "styled-components";
import { ImageType } from "./types";

export const Img = styled.img<ImageType>`
  ${(props) => css`
      ${props.theme[props.path]}
  `}
`