export interface BaseComponentInterface {
  props?: any;
  path: string;
}

export interface ValidationConfig {
  validateOn: string;
  fieldValidations: Validations;
  dataValidations: DataValidationParams;
}

export interface Validations {
  pattern: ValidationsParams; //Going to be converted to a RegExp 
  required: ValidationsParams;
  maxLength: ValidationsParams;
  minLength: ValidationsParams;
}

export interface ValidationsParams {
  value: any,
  message: string,
}

export interface DataValidationParams {
  validData: string[],
  message: string,
}