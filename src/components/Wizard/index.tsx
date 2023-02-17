import { RoundedButton } from "../Buttons/RoundedButton";
import { CardA } from "../WizardCards/CardA";
import { Container, StepsContainer, Step, StepsIndicatorContainer } from "./styles";
import { WizardType } from "./types";
import { Routes, Route, Link, useLocation, } from "react-router-dom";

export const Wizard = ({ path, steps }: WizardType) => {

  if (!steps || steps.length === 0) {
    <div>No steps to show</div>
  };

  const { pathname } = useLocation();
  const routes = steps.map(step => step.route);
  const activeIndex = steps.findIndex(step => step.route === pathname) + 1;

  return (
    <Container path={path}>
      <StepsContainer path='wizard.stepsContainer'>
        Step {activeIndex} of {steps.length}
        <StepsIndicatorContainer path="wizard.stepsContainer.stepsIndicatorContainer">
          {steps.map((slide, index) => slide.route &&
            <Link key={`${slide.route}_${index}`} to={slide.route}>
              <Step path='wizard.stepsContainer.step' isActive={routes.indexOf(pathname) >= routes.indexOf(slide.route)} />
            </Link>)
          }
        </StepsIndicatorContainer>
      </StepsContainer>
      <Routes>
        {steps.map((slide) => slide.route &&
          <Route
            path={slide.route}
            element={
              <CardA path='wizard.cardA'
                title={slide.title}
                subtitle={slide.subtitle}

                buttonPrev={slide.buttonPrev && <Link to={slide.buttonPrev.navigateTo ?? ''}><RoundedButton path={slide.buttonPrev!.path} label={slide.buttonPrev!.label} /></Link>}
                buttonNext={slide.buttonNext && <Link to={slide.buttonNext.navigateTo ?? ''}><RoundedButton path={slide.buttonNext!.path} label={slide.buttonNext!.label} /></Link>}
              />}
          />)}
      </Routes>
    </Container>
  )
}

// TODO: Remove gambiarra line31 e 32