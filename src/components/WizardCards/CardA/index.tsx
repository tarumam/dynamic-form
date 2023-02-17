import { CardIcon } from "../../CardIcon";
import { ButtonsContainer, Container, SubTitleContainer, TitleContainer } from "./styles";
import carImg from '../../../assets/car.svg';
import graphImg from '../../../assets/graph.svg';
import plugImg from '../../../assets/plug.svg';
import { RoundedButton } from "../../Buttons/RoundedButton";
import { CardIconList } from "../../CardIconList";

export const CardA = ({ path, title, subTitle, buttonPrev, buttonNext }: any) =>
(
  <Container path={path}>
    <TitleContainer path="wizard.cardA.titleContainer">{title}</TitleContainer>
    <SubTitleContainer path="wizard.cardA.subTitleContainer">{subTitle}</SubTitleContainer>
    <CardIconList>
      <CardIcon icon={plugImg} text={'Tell us about your organization'} path="wizard.cardA.cardIconsContainer" />
      <CardIcon icon={carImg} text={'Tell us about your vehicles'} path="wizard.cardA.cardIconsContainer" />
      <CardIcon icon={graphImg} text={'See how much you can save'} path="wizard.cardA.cardIconsContainer" />
    </CardIconList>
    {(buttonPrev || buttonNext) &&
      <ButtonsContainer path="wizard.cardA.buttonsContainer">
        {buttonPrev}
        {buttonNext}
      </ButtonsContainer>
    }
  </Container>
)

