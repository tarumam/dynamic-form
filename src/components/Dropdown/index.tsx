import { CustomFieldError } from "../CommonTypes/baseComponentInterface";
import { Label } from "../Label";
import { HintInput } from "../TextBox/styles";
import { DropdownContainer, Select } from "./styles";
import { DropdownComponentParams } from "./types";
import { Controller } from "react-hook-form";

export const Dropdown = ({ control, trigger, formState, setValue, name, id, label, path, options, hint, validationConfig }: DropdownComponentParams) => {
  const { fieldValidations, validateOn, dataValidations } = validationConfig;
  const event = validateOn as keyof HTMLElementEventMap;
  const { errors } = formState;

  const handleValidation = (value: any) => {
    setValue(id, value);
    trigger(id);
  }

  const componentName = name ?? id;
  return (
    <Controller
      name={componentName}
      control={control}
      rules={fieldValidations}
      render={({ field }) => (
        <DropdownContainer>
          {label && <Label path={`${path}.label`} htmlFor={id} text={label} />}
          <Select
            {...field}
            id={id}
            path={path}
            options={options}
            classNamePrefix={'react-select'}
            isClearable
            {...(event && { [event]: handleValidation })}
          />
          {errors[id] && <Label path={`${path}.validation`} text={(errors[id] as CustomFieldError)?.message} />}
          {hint && <HintInput path={`${path}.hint`}>{hint}</HintInput>}
        </DropdownContainer>
      )}
    />
  )
}