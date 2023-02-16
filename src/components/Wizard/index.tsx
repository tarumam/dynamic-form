import { CardA } from "../WizardCards/CardA";
import { Container, StepsContainer, Step } from "./styles";

export const Wizard = () =>
(
  <Container>
    <StepsContainer>
      page x de y
      <Step />
    </StepsContainer>
    <>
      <CardA />
    </>
  </Container>
)