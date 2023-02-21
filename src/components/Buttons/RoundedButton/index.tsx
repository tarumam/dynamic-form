import { Button } from './styles';
import { RoundedButtonType } from './types';

export const RoundedButton = ({ label, path, isActive, onClick }: RoundedButtonType) =>
  <Button label={'remove this'} path={path} disabled={!isActive} onClick={onClick}>{label}</Button>;
