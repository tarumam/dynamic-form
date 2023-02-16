import { CardIcon } from "../../CardIcon";
import { ButtonsContainer, Container, SubTitleContainer, TitleContainer } from "./styles";
import carImg from '../../../assets/car.svg';
import graphImg from '../../../assets/graph.svg';
import plugImg from '../../../assets/plug.svg';
import { RoundedButton } from "../../Buttons/RoundedButton";
import { CardIconList } from "../../CardIconList";

type CardAType = {
  title: string,
  subtitle: string,
  children: any,
}

export const CardA = () =>
(
  <Container>
    <TitleContainer>Going electric starts with understanding your needs</TitleContainer>
    <SubTitleContainer>We need to understand your requirements so we can recommend the appropriate electric vehicle, charger and identify incentives.</SubTitleContainer>
    <CardIconList>
      <CardIcon icon={plugImg} text={'Tell us about your organization'} />
      <CardIcon icon={carImg} text={'Tell us about your vehicles'} />
      <CardIcon icon={graphImg} text={'See how much you can save'} />
    </CardIconList>
    <ButtonsContainer>
      <RoundedButton label='text' />
    </ButtonsContainer>
  </Container>
)

