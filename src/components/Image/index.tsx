import { Img } from "./styles";
import { ImageProps } from "./types";

// This can be exported to a separated file to be used by another image components
import car from '../../assets/car.svg';
import graph from '../../assets/graph.svg';
import plug from '../../assets/plug.svg';

export const Image = ({ iconName, alt, path }: ImageProps) => 
{
  const getIcon = (iconName: string) => {
    const iconsMap: any = {
      "car": car,
      "graph": graph,
      "plug": plug,
    };

    return iconsMap[iconName];
  }

return <Img src={getIcon(iconName)} alt={alt} path={path} />
}