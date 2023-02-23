import { BaseComponentInterface } from "../CommonTypes/baseComponentInterface";

export interface TextBoxProps extends BaseComponentInterface {
  id: string;
  label: string;
  hint: string;
  value: string;
  onChange(id:string, text: string): void;
}

export interface TextBoxInputType extends BaseComponentInterface {
  id: string,
  type: string,
}

export interface HintInputType extends BaseComponentInterface {
}

