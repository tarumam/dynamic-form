import { BuildComponent } from "..";
import { cardIconType } from "../CardIcon/types";
import { CardIconListContainer } from "./styles";
import { CardIconListTypeParameters } from "./types";


export const CardIconList = ({ cardIcons }: CardIconListTypeParameters) => {
  return (
    <CardIconListContainer>
      {cardIcons?.items.map((ci: cardIconType, idx: number) => <BuildComponent {...ci} key={`${idx}_${ci.icon}`} type={cardIcons.type} path={cardIcons.path} />)}
    </CardIconListContainer>
  )
}