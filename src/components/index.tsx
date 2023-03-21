import React from "react";
import { TextBox } from "./TextBox";
import { CardA } from "./Wizard/WizardCards/CardA";
import { Dropdown } from "./Dropdown";
import { CardIcon } from "./CardIcon";
import { CardIconList } from "./CardIconList";

const components: Record<string, React.ComponentType<any>> = {
  TextBox,
  CardA,
  Dropdown,
  CardIcon,
  CardIconList,
}

type DynamicComponent = {
  id: string,
  type: string;
  path: string;
};

export const BuildComponent = ({ id, type, path, ...props }: DynamicComponent): JSX.Element | null => {

  if (!id) {
    console.warn(`Warning: No Id defined '${type} - ${path}'.`);
  }

  if (!type) {
    console.error(`Error: No component type defined '${type}'.`);
    return null;
  }

  if (!components.hasOwnProperty(type)) {
    console.error(`Warning: No Component found for type '${type}'.`);
    return null;
  }

  const Component = components[type];

  if (!Component) {
    console.error(`Warning: No Component found for type '${type}'.`);
    return null;
  }

  const componentProps = props as React.ComponentProps<typeof Component>;

  return <Component  {...componentProps} path={path} id={id} />;
};
