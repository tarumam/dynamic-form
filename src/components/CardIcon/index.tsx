
import { Container, Icon, Text } from "./styles";
import { cardIconType } from "./types";

// TODO: map the available assets in a different file
import car from '../../assets/car.svg';
import graph from '../../assets/graph.svg';
import plug from '../../assets/plug.svg';

export const CardIcon = ({ icon, text, alt, path }: cardIconType) => {

  const getIcon = (iconName: string) => {
    const iconsMap: any = {
      "car": car,
      "graph": graph,
      "plug": plug,
    };

    return iconsMap[iconName];
  }


  return (
    <Container path={path}>
      <Icon src={getIcon(icon)} alt={alt} path={`${icon}.text`} />
      <Text path={`${path}.text`}>{text}</Text>
    </Container>
  )
};