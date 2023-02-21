import { LabelHTMLAttributes } from 'react';
import { BaseComponentInterface } from "../CommonTypes/baseComponentInterface";

export interface TextBoxComponent extends BaseComponentInterface {
  id: string;
  label: string;
  hint: string;
  value: string;
  onChange(text: string): void;
}

export interface LabelInputType extends BaseComponentInterface, LabelHTMLAttributes<HTMLLabelElement> {
}

export interface TextBoxInputType extends BaseComponentInterface {
  id: string,
  type: string,
}

export interface HintInputType extends BaseComponentInterface {
}

