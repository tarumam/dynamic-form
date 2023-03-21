import { Label } from "../Label";
import { DropdownContainer, Select } from "./styles";
import { DropdownComponentParams } from "./types";
import { Controller } from "react-hook-form";

export const Dropdown = ({ register, control, name, id, label, path, options, value, onChange }: DropdownComponentParams) => {

  const componentName = name ?? id;
  return (
    <Controller
      name={componentName}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <DropdownContainer>
          {label && <Label path={`${path}.label`} htmlFor={id} text={label} />}
          <Select
            {...field}
            id={id}
            path={path}
            options={options}
            classNamePrefix={'react-select'}
          />
        </DropdownContainer>
      )}
    />
  )
}