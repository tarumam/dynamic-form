import { Label } from "../Label";
import { DropdownContainer, Select } from "./styles";
import { DropdownComponentParams, Option } from "./types";

export const Dropdown = ({ id, label, path, options, value, onChange }: DropdownComponentParams) => {

  const selectedOption: Option = options?.find(o => o.value === value) || { label: '', value: '' };

  const handleDropdownChange = (value: Option | any) => {
    onChange && onChange(id, value?.value);
  };

  return (
    <DropdownContainer>
      {label && <Label path={`${path}.label`} htmlFor={id} text={label} />}
      <Select
        id={id}
        path={path}
        value={selectedOption}
        options={options}
        classNamePrefix={'react-select'}
        onChange={handleDropdownChange} />
    </DropdownContainer>
  );
}