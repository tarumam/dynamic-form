import { BaseComponentInterface } from "../../CommonTypes/baseComponentInterface";

export interface ButtonAProps extends BaseComponentInterface {
  id: string;
  label: string;
  isActive: boolean;
  onClick: any;
  type: "button" | "submit" | "reset" | undefined;
}

export interface ButtonProps extends BaseComponentInterface {
}