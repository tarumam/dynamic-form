import { LabelHTMLAttributes } from "react";
import { BaseComponentInterface } from "../CommonTypes/baseComponentInterface";

export interface DropdownComponentParams extends BaseComponentInterface {
  register: any,
  id: string,
  label: string,
  path: string,
  options: Option[],
  value: string,
  name: string,
  control: any,
  onChange: (id: string, value: string) => void;
}

export interface DropdownType extends BaseComponentInterface {

}

export interface Option {
  label: string,
  value: string,
}