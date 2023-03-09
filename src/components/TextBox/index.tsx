import { HintInput, TextInput, TextBoxContainer } from "./styles";
import { TextBoxProps } from "./types";
import { Label } from "../Label";
import { useForm, FieldError } from "react-hook-form";

interface CustomFieldError extends FieldError {
  message: string;
}

export const TextBox = ({ path, id, label, hint, value, validationConfig }: TextBoxProps) => {
  const { fieldValidations, validateOn, dataValidations } = validationConfig;
  const event = validateOn as keyof HTMLElementEventMap;
  const { register, formState: { errors }, setValue, trigger } = useForm({
    mode: 'onBlur',
  });

  const handleValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(id, event.target.value);
    trigger(id);
  }

  const isValidData: any = (value: string) => {
    if (dataValidations.validData?.length > 0 && !dataValidations.validData.includes(value)) {
      return dataValidations.message;
    };
  }

  return (
    <TextBoxContainer>
      {label && <Label path={path} htmlFor={id} text={label} />}
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
      {hint && <HintInput path={path}>{hint}</HintInput>}
      {errors[id] && <p role="alert">{(errors[id] as CustomFieldError)?.message}</p>}
    </TextBoxContainer>
  )
}

// TODO: Put some styling on errors