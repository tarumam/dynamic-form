import { BaseComponentInterface } from "../../CommonTypes/baseComponentInterface";

export interface LinkButtonProps extends BaseComponentInterface {
  label: string;
  isActive: boolean;
  navigateTo: string;
}

export interface ButtonProps extends BaseComponentInterface {
}