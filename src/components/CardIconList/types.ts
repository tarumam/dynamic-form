import { cardIconProps } from "../CardIcon/types";
import { BaseComponentInterface } from "../CommonTypes/baseComponentInterface";

export interface CardIconListProps extends BaseComponentInterface  {
  cardIcons: CardIconsType;
}

export interface CardIconsType extends BaseComponentInterface {
  items: Array<cardIconProps>;
  type: string;
}