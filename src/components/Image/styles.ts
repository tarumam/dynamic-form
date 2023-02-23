import styled from "styled-components";
import { ImageType } from "./types";

export const Img = styled.img<ImageType>`
  width:  ${props => props.theme[props.path]?.width};
`