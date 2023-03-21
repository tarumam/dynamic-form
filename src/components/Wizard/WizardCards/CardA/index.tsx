
import { ButtonsContainer, Container, SubTitleContainer, TitleContainer } from "./styles";


export const CardA = ({ path, title, subtitle, buttonPrev, buttonNext, children }: any) => {
  
  //TODO: Check it. Used like this because :one-child selectior haven't work
  const hasOneButton = (buttonPrev && !buttonNext) || (buttonNext && !buttonPrev);

  return (
    <Container path={path}>
      <TitleContainer path="wizard.cardA.titleContainer">{title}</TitleContainer>
      <SubTitleContainer path="wizard.cardA.subTitleContainer">{subtitle}</SubTitleContainer>
      {children}
      {(buttonPrev || buttonNext) &&
        <ButtonsContainer path="wizard.cardA.buttonsContainer" oneButton={hasOneButton}>
          {buttonPrev}
          {buttonNext}
        </ButtonsContainer>
      }
    </Container>
  )
}