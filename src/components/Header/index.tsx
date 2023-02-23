import { Container } from "./styles";
import { HeaderProps } from "./types";

export const Header = ({ path, text }: HeaderProps) => {
  return <Container path={path}>{text}</Container>
}
