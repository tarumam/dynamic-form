import { useState } from "react";
import { DropdownContainer, LabelInput, Select } from "./styles";
import { DropdownComponentParams, Option } from "./types";

export const Dropdown = ({ id, label, path, options, value, onChange }: DropdownComponentParams) => {

  const option: Option = options?.find(o => o.value === value) || { label: '', value: '' };
  const [dropDownValue, setDropdownValue] = useState<Option>(option);

  // TODO: Fix this any hack

  const handleDropdownChange = (value: Option | any) => {
    setDropdownValue(value);
    onChange && onChange(value?.value);
  };

  return (
    <DropdownContainer>
      <LabelInput path={path} htmlFor={id}>{label}</LabelInput>
      <Select path={path} value={dropDownValue} options={options} classNamePrefix={'react-select'} onChange={handleDropdownChange} />
    </DropdownContainer>
  );
}