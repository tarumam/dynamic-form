import styled, { css } from 'styled-components';

import { HeaderType } from './types';

export const Container = styled.header<HeaderType>`
  flex: 1;
  ${(props) => css`
    ${props.theme[props.path]}
  `}
`;

