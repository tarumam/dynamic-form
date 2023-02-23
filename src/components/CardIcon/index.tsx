
import { Container } from "./styles";
import { cardIconProps } from "./types";
import { Image } from "../Image";
import { Label } from "../Label";

export const CardIcon = ({ icon, text, alt, path }: cardIconProps) => {
  return (
    <Container path={path}>
      <Image iconName={icon} alt={alt} path={`${icon}.text`} />
      <Label path={`${path}.text`} text={text} />
    </Container>
  )
};