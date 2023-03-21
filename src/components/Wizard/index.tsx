import { CardA } from "./WizardCards/CardA";
import { Container, StepsContainer, Step, StepsIndicatorContainer } from "./styles";
import { WizardType } from "./types";
import { Routes, Route, Link, useLocation, Navigate, useNavigate } from "react-router-dom";
import { BuildComponent } from "..";
import { If } from "../If";
import { ButtonA } from "../Buttons/ButtonA";
import { useForm } from "react-hook-form";


export const Wizard = ({ path, steps }: WizardType) => {
  const { handleSubmit, register, control, trigger, formState, setValue } = useForm({
    mode: 'onBlur',
  });


  const navigate = useNavigate();

  const { pathname } = useLocation();
  const routes = steps.map(step => step.route);
  const activeIndex = steps.findIndex(step => step.route === pathname) + 1;

  const moveNext = (route: string): void => {
    navigate(route);
  }

  const moveBack = (route: string): void => {
    navigate(route);
  }

  const onSubmit = (data: any) => {
    console.log(data);
    debugger
  }

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
                  prevNavigateTo=""
                  nextNavigateTo=""
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
                <form name={`wizard_step${idx}`} onSubmit={handleSubmit(onSubmit)}>
                  <CardA path='wizard.cardA'
                    title={step.title}
                    subtitle={step.subtitle}
                    buttonPrev={step.buttonPrev &&
                      <ButtonA
                        id={`${step.buttonPrev.type}_${idx}`}
                        path={step.buttonPrev.path}
                        label={step.buttonPrev.label}
                        isActive={true}
                        onClick={() => moveBack(step.prevNavigateTo)}
                        type="button"
                      />}
                    buttonNext={step.buttonNext &&
                      <ButtonA
                        id={`${step.buttonNext.type}_${idx}`}
                        path={step.buttonNext.path}
                        label={step.buttonNext!.label}
                        isActive={true}
                        onClick={() => moveNext(step.nextNavigateTo)}
                        type={step.buttonNext.type}
                      />}
                  >
                    <BuildComponent
                      {...step.content}
                      path={step.content.path}
                      id={step.content.id}
                      type={step.content.type}
                      register={register}
                      trigger={trigger}
                      name={step.content.name}
                      control={control}
                      formState={formState}
                      setValue={setValue}
                    />
                  </CardA>
                </form>
              }
            />
          )}
          <Route path="*" element={<Navigate to={steps[0].route} />} />
        </Routes>
      </If>
      <If test={!steps || steps.length === 0}>
        <div>No steps were supplied</div>
      </If>
    </Container >
  )
}
