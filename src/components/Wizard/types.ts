import { ButtonType } from "../Buttons/RoundedButton/types";
import { BaseComponentInterface } from "../CommonTypes/baseComponentInterface";

export interface WizardType extends BaseComponentInterface {
  steps: Array<StepType>
}

export interface WizardContainerType extends BaseComponentInterface {
}


export interface StepsContainerType extends BaseComponentInterface {
}

export interface StepsIndicatorContainerType extends BaseComponentInterface{

}

export interface StepType extends BaseComponentInterface {
  title?: string,
  subtitle?: string,
  buttonNext?: ButtonType,
  buttonPrev?: ButtonType,
  route?: string,
  isActive?: boolean,
  content?: any,
  isRequired: boolean,
}

export interface WizardDataType {

}

