
import { Container, Icon, Text } from "./styles";

type CardIconType = {
  icon: string,
  text: string,
}

export const CardIcon = ({ icon, text }: CardIconType) => {
  return (
    <Container>
      <Icon src={icon} alt='car' />
      <Text>{text}</Text>
    </Container>
  )
};