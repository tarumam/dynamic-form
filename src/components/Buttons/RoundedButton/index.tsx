import { Button } from './styles';

type RoundedButtonType = {
  label: string,
}

export const RoundedButton = ({ label }: RoundedButtonType) => {
  return <Button>{label}</Button>;
}