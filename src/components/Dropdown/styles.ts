import ReactSelect, { Props as SelectProps } from 'react-select';
import styled, { css } from 'styled-components';
import { DropdownType } from './types';

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Select = styled(ReactSelect) <DropdownType & SelectProps>`

.react-select__control {
  ${(props) => css`
    ${props.theme[props.path]}
  `}
  }

  .react-select__value-container {
    padding: 10px;
  }

  .react-select__menu {
    ${(props) => css`
      ${props.theme[`${props.path}.menu`]}
    `}
  }

  .react-select__option {
    ${(props) => css`
      ${props.theme[`${props.path}.options`]}
    `}
  }
`;