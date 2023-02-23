import { LabelHTMLAttributes } from "react";
import { BaseComponentInterface } from "../CommonTypes/baseComponentInterface";

export interface DropdownComponentParams extends BaseComponentInterface {
  id: string,
  label: string,
  path: string,
  options: Option[],
  value: string,
  onChange: (id: string, value: string) => void;
}

export interface DropdownType extends BaseComponentInterface {

}

export interface Option {
  label: string,
  value: string,
}