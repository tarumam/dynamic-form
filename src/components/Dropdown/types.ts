import { BaseComponentInterface, ValidationConfig } from "../CommonTypes/baseComponentInterface";

export interface DropdownComponentParams extends BaseComponentInterface {
  id: string,
  label: string,
  path: string,
  options: Option[],
  name: string,
  control: any,
  trigger: any,
  validationConfig: ValidationConfig,
  formState: any,
  hint: string,
  setValue: any,
}

export interface DropdownType extends BaseComponentInterface {

}

export interface Option {
  label: string,
  value: string,
}