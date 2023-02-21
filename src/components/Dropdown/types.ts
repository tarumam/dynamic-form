import { LabelHTMLAttributes } from "react";
import { BaseComponentInterface } from "../CommonTypes/baseComponentInterface";

export interface DropdownComponentParams extends BaseComponentInterface {
  id: string,
  label: string,
  path: string,
  options: Option[],
  value: string,
  onChange: (value: string) => void; 
}

export interface DropdownType extends BaseComponentInterface {
  
}

export interface LabelInputType extends BaseComponentInterface, LabelHTMLAttributes<HTMLLabelElement> {
}

export interface Option {
  label: string,
  value: string,
}