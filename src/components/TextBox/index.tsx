import { HintInput, TextInput, TextBoxContainer } from "./styles";
import { TextBoxProps } from "./types";
import { Label } from "../Label";
import { FieldError } from "react-hook-form";

interface CustomFieldError extends FieldError {
  message: string;
}

export const TextBox = ({ register, trigger, setValue, formState, path, id, label, hint, value, validationConfig }: TextBoxProps) => {
  const { fieldValidations, validateOn, dataValidations } = validationConfig;
  const event = validateOn as keyof HTMLElementEventMap;

  const { errors } = formState;

  const handleValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(id, event.target.value);
    trigger(id);
  }

  const isValidData = (value: string): string | undefined => {
    if (dataValidations.validData?.length > 0 && !dataValidations.validData.includes(value)) {
      return dataValidations.message;
    };
  }

  return (
    <TextBoxContainer>
      {label && <Label path={`${path}.label`} htmlFor={id} text={label} />}
      <TextInput
        {...register(id,
          {
            ...fieldValidations,
            pattern: fieldValidations.pattern ? { value: new RegExp(fieldValidations.pattern.value), message: fieldValidations.pattern.message } : undefined,
            validate: isValidData,
          })
        }
        path={path}
        id={id}
        name={id}
        type='text'
        defaultValue={value}
        {...(event && { [event]: handleValidation })}
      />
      {errors[id] && <Label path={`${path}.validation`} text={(errors[id] as CustomFieldError)?.message} />}
      {hint && <HintInput path={`${path}.hint`}>{hint}</HintInput>}
    </TextBoxContainer>
  )
}