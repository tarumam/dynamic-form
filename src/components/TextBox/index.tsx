import { ChangeEvent } from "react";
import { HintInput, TextInput, TextBoxContainer } from "./styles";
import { TextBoxProps } from "./types";
import { Label } from "../Label";

export const TextBox = ({ path, id, label, hint, value, onChange }: TextBoxProps) => {

  const handleTextBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(id, event.target.value);
  };

  return (
    <TextBoxContainer>
      {label && <Label path={path} htmlFor={id} text={label}/>}
      <TextInput
        path={path}
        id={id}
        type='text'
        onChange={handleTextBoxChange}
        value={value} />
      {hint && <HintInput path={path}>{hint}</HintInput>}
    </TextBoxContainer>
  )
}
