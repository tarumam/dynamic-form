import styled, { css } from 'styled-components';
import { cardIconContainerType } from './types';

export const Container = styled.div<cardIconContainerType>`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 15px;
  ${(props) => css`
    ${props.theme[props.path]}
  `}
`;
