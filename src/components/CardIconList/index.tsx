import { CardIconListContainer } from "./styles";

type CardIconListType = {
  children: any;
}

export const CardIconList = ({ children }: CardIconListType) =>
(
  <CardIconListContainer>
    {children}
  </CardIconListContainer>
)