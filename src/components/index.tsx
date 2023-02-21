import React from "react";
import { TextBox } from "./TextBox";
import { CardA } from "./WizardCards/CardA";
import { Dropdown } from "./Dropdown";

const components = {
  TextBox,
  CardA,
  Dropdown
}

type DynamicComponent = {
  type: keyof typeof components;
  path: string;
};

export const BuildComponent = ({ type, ...props }: DynamicComponent) => {
  
  if (!type) {
    console.error(`Error: No component type defined '${type}'.`);
    return null;
  }

  const Component = components[type];

  if (!Component) {
    console.error(`Warning: No Component found for type '${type}'.`);
    return null;
  }

  const componentProps = props as React.ComponentProps<typeof Component>;

  return <Component {...componentProps} path={componentProps.path}/>;
};