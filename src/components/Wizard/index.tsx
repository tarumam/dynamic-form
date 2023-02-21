import { RoundedButton } from "../Buttons/RoundedButton";
import { CardA } from "../WizardCards/CardA";
import { Container, StepsContainer, Step, StepsIndicatorContainer } from "./styles";
import { WizardType } from "./types";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { BuildComponent } from "..";
import { useState } from "react";

export const Wizard = ({ path, steps }: WizardType) => {
  if (!steps || steps.length === 0) {
    <div>No steps to show</div>
  };

  const { pathname } = useLocation();
  const routes = steps.map(step => step.route);
  const activeIndex = steps.findIndex(step => step.route === pathname) + 1;
  const initialState = steps.map(s => ({ "step": s.route, "value": '' }))
  const [stepsManager, setStepsManager] = useState(initialState);

  // TODO: simplify these following by using object keys {[step]: false}
  const getStateValue = (step: string) => stepsManager.find(f => f.step === step)?.value;

  const onChange = (value: any) => {
    const newState = stepsManager.map((obj) => {
      if (obj.step === pathname) {
        return { ...obj, value: value };
      } else {
        return obj;
      }
    });

    setStepsManager(newState)
  }

  return (
    <Container path={path}>
      <StepsContainer path='wizard.stepsContainer'>
        Step {activeIndex} of {steps.length}
        <StepsIndicatorContainer path="wizard.stepsContainer.stepsIndicatorContainer">
          {steps.map((slide, index) => slide.route &&
            <Link key={`${slide.route}_${index}`} to={slide.route}>
              <Step path='wizard.stepsContainer.step' isActive={routes.indexOf(pathname) >= routes.indexOf(slide.route)} isRequired={slide.isRequired} />
            </Link>)
          }
        </StepsIndicatorContainer>
      </StepsContainer>
      <Routes>
        {steps.map((slide, idx) => slide.route &&
          <Route
            key={`${slide.route}_${idx}`}
            path={slide.route}
            element={
              <CardA path='wizard.cardA'
                title={slide.title}
                subtitle={slide.subtitle}
                buttonPrev={slide.buttonPrev &&
                  <Link to={slide.buttonPrev.navigateTo ?? ''}>
                    <RoundedButton
                      path={slide.buttonPrev!.path}
                      label={slide.buttonPrev!.label}
                      isActive={true}
                      onClick={() => { }}
                    /></Link>}
                buttonNext={slide.buttonNext &&
                  <Link to={slide.buttonNext.navigateTo ?? ''}>
                    <RoundedButton path={slide.buttonNext.path}
                      label={slide.buttonNext!.label}
                      isActive={slide.isRequired ? !!getStateValue(slide.route) : true}
                      onClick={() => { }}
                    />
                  </Link>}
              >
                <BuildComponent onChange={onChange} type={slide.content.type} value={getStateValue(slide.route)} {...slide.content} />
              </CardA>}
          />)}
      </Routes>
    </Container>
  )
}

// TODO: Remove bad code on links (??)