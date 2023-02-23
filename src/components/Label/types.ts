import { LabelHTMLAttributes } from "react";
import { BaseComponentInterface } from "../CommonTypes/baseComponentInterface";

export interface LabelProps extends BaseComponentInterface, LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

export interface LabelType extends BaseComponentInterface {

}