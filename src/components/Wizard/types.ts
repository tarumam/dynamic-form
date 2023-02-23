import { LinkButtonProps } from "../Buttons/LinkButton/types";
import { BaseComponentInterface } from "../CommonTypes/baseComponentInterface";

export interface WizardType extends BaseComponentInterface {
  steps: Array<StepType>
}

export interface WizardContainerType extends BaseComponentInterface {
}

export interface StepsContainerType extends BaseComponentInterface {
}

export interface StepsIndicatorContainerType extends BaseComponentInterface {

}

export interface StepType extends BaseComponentInterface {
  buttonNext?: LinkButtonProps,
  buttonPrev?: LinkButtonProps,
  content?: any,
  isActive?: boolean,
  isRequired: boolean,
  route: string,
  subtitle?: string,
  title?: string,
}

export interface WizardDataType {

}

