import { ButtonType } from "../Buttons/RoundedButton/types";
import { cardIconType } from "../CardIcon/types";
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
  // cardIcons?: cardIconType[],
}

export interface WizardDataType {

}

