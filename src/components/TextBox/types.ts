import { BaseComponentInterface, ValidationConfig } from "../CommonTypes/baseComponentInterface";

export interface TextBoxProps extends BaseComponentInterface {
  id: string;
  label: string;
  hint: string;
  value: string;
  validationConfig: ValidationConfig;
  register: any;
  trigger: any;
  setValue: any;
  formState: any;
}

export interface TextBoxInputType extends BaseComponentInterface {
  id: string,
  type: string,
}

export interface HintInputType extends BaseComponentInterface {
}

