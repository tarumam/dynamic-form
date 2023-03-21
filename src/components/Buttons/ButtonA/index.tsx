import { Button } from './styles';
import { ButtonAProps } from './types';

export const ButtonA = ({id, label, path, isActive, type, onClick }: ButtonAProps) => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (type !== 'submit') {
      event.preventDefault();
      onClick();
    }
  };

  return <Button id={id} type={type ?? 'button'} onClick={handleClick} path={path} disabled={!isActive}>{label}</Button>
}
