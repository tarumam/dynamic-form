import { ChangeEvent, useState } from "react";
import { HintInput, LabelInput, TextInput, TextBoxContainer } from "./styles";
import { TextBoxComponent } from "./types";

export const TextBox = ({ path, id, label, hint, value, onChange }: TextBoxComponent) => {

  const [textBoxValue, setTextBoxValue] = useState(value);

  const handleTextBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTextBoxValue(value);
    onChange && onChange(value);
  };

  return (
    <TextBoxContainer>
      <LabelInput path={path} htmlFor={id}>{label}</LabelInput>
      <TextInput path={path} id={id} type='text' onChange={handleTextBoxChange} value={textBoxValue} />
      <HintInput path={path}>{hint}</HintInput>
    </TextBoxContainer>
  )
}
