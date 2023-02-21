import React from "react";
import { TextBox } from "./TextBox";
import { CardA } from "./WizardCards/CardA";
import { Dropdown } from "./Dropdown";
import { CardIconList } from "./CardIconList";
import { CardIcon } from "./CardIcon";

const components = {
  TextBox,
  CardA,
  Dropdown,
  CardIconList,
  CardIcon,
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

  //TODO: Inform Id as parameter
  return <Component id={`${componentProps.path}_${type}`} {...componentProps} path={componentProps.path} />;
};