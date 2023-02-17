import styled from 'styled-components';

import { HeaderType } from './types';

export const Container = styled.header<HeaderType>`
  flex: 1;
  background: ${props => props.theme[props.path]?.backgroundColor};
  height: ${props => props.theme[props.path]?.height};
`;

