import { BuildComponent } from "..";
import { cardIconProps } from "../CardIcon/types";
import { CardIconListContainer } from "./styles";
import { CardIconListProps } from "./types";


export const CardIconList = ({ cardIcons }: CardIconListProps) => {
  return (
    <CardIconListContainer>
      {cardIcons?.items.map(
        (ci: cardIconProps, idx: number) =>
          <BuildComponent {...ci}
            key={`${idx}_${ci.icon}`}
            id={`${idx}_${ci.icon}`}          
            type={cardIcons.type}
            path={cardIcons.path} />)}
    </CardIconListContainer>
  )
}