import { BaseComponentInterface } from "../../CommonTypes/baseComponentInterface";

export interface RoundedButtonType extends BaseComponentInterface {
  label: string,
  isActive: boolean;
  onClick: () => void;
}

export interface ButtonType extends BaseComponentInterface{
  label: string,
  navigateTo?: string,
}