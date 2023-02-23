import { StyledLabel } from "./styles";
import { LabelProps } from "./types";

export const Label = ({ id, path, text }: LabelProps) => <StyledLabel path={path} htmlFor={id}>{text}</StyledLabel>