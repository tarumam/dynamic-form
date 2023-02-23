import { CardA } from "../WizardCards/CardA";
import { Container, StepsContainer, Step, StepsIndicatorContainer } from "./styles";
import { WizardType } from "./types";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { BuildComponent } from "..";
import { useCallback, useState } from "react";
import { If } from "../If";
import { LinkButton } from "../Buttons/LinkButton";


const initialState = (steps: WizardType['steps']) => {
  return steps.reduce<{ [id: string]: string }>((acc, step) => {
    if (step.content.id) {
      return {
        ...acc,
        [step.content.id]: ''
      };
    }
    return acc;
  }, {});
};

export const Wizard = ({ path, steps }: WizardType) => {
  const [stepsManager, setStepsManager] = useState(initialState(steps));

  const { pathname } = useLocation();
  const routes = steps.map(step => step.route);
  const activeIndex = steps.findIndex(step => step.route === pathname) + 1;

  const getStateValue = useCallback((id: string) => {
    const result = stepsManager[id];
    return result;
  }, [stepsManager]);

  const onChange = useCallback((key: string, value: any) => {
    const newStepsManager = { ...stepsManager };
    newStepsManager[key] = value;
    setStepsManager(newStepsManager);
  }, [stepsManager]);

  return (
    <Container path={path}>
      <If test={steps?.length > 0}>
        <StepsContainer path='wizard.stepsContainer'>
          Step {activeIndex} of {steps.length}
          <StepsIndicatorContainer path="wizard.stepsContainer.stepsIndicatorContainer">
            {steps.map((step, index) => step.route &&
              <Link key={`${step.route}_${index}`} to={step.route}>
                <Step
                  path='wizard.stepsContainer.step'
                  isActive={routes.indexOf(pathname) >= routes.indexOf(step.route)}
                  isRequired={step.isRequired}
                  route={step.route}
                />
              </Link>)
            }
          </StepsIndicatorContainer>
        </StepsContainer>
        <Routes>
          {steps.map((step, idx) => step.route &&
            <Route
              key={`${step.route}_${idx}`}
              path={step.route}
              element={
                <CardA path='wizard.cardA'
                  title={step.title}
                  subtitle={step.subtitle}
                  buttonPrev={step.buttonPrev &&
                    <LinkButton
                      navigateTo={step.buttonPrev.navigateTo}
                      path={step.buttonPrev.path}
                      label={step.buttonPrev.label}
                      isActive={true}
                    />}
                  buttonNext={step.buttonNext &&
                    <LinkButton
                      navigateTo={step.buttonNext.navigateTo}
                      path={step.buttonNext.path}
                      label={step.buttonNext!.label}
                      isActive={step.isRequired ? !!getStateValue(step.content.id) : true}
                    />}
                >
                  <BuildComponent
                    {...step.content}
                    path={step.content.path}
                    id={step.content.id}
                    type={step.content.type}
                    onChange={onChange}
                    value={getStateValue(step.content.id)} />
                </CardA>}
            />)}
          <Route path="*" element={<Navigate to={steps[0].route} />} />
        </Routes>
      </If>
      <If test={!steps || steps.length === 0}>
        <div>No steps were supplied</div>
      </If>
    </Container >
  )
}
