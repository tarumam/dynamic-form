
import { Container, Icon, Text } from "./styles";
import { cardIconType } from "./types";

export const CardIcon = ({ icon, text, path }: cardIconType) => {
  return (
    <Container path={path}>
      <Icon src={icon} alt='car' path='wizard.cardA.cardIconsContainer.icon' />
      <Text path='wizard.cardA.cardIconsContainer.text'>{text}</Text>
    </Container>
  )
};