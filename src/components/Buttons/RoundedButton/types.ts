import { BaseComponentInterface } from "../../CommonTypes/baseComponentInterface";

export interface RoundedButtonType extends BaseComponentInterface {
  label: string,
}

export interface ButtonType extends BaseComponentInterface{
  label: string,
  navigateTo?: string,
}