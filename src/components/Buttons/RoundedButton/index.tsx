import { Button } from './styles';
import { RoundedButtonType } from './types';

export const RoundedButton = ({ label, path }: RoundedButtonType) =>
  <Button label={'remove this'} path={path}>{label}</Button>;
