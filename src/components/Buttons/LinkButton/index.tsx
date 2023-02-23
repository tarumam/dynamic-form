import { Link } from 'react-router-dom';
import { Button } from './styles';
import { LinkButtonProps } from './types';

export const LinkButton = ({ label, path, isActive, navigateTo }: LinkButtonProps) =>
  <Link to={navigateTo}>
    <Button path={path} disabled={!isActive}>{label}</Button>
  </Link>
