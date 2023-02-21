import ReactSelect, { Props as SelectProps } from 'react-select';
import styled from 'styled-components';
import { DropdownType, LabelInputType } from './types';

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelInput = styled.label<LabelInputType>`
 margin: ${props => props.theme[props.path]?.labelMargin};
 font-family: ${props => props.theme[props.path]?.labelFontFamily};
 font-size: ${props => props.theme[props.path]?.labelFontSize};
 font-size: ${props => props.theme[props.path]?.labelWeight};
 color: ${props => props.theme[props.path]?.labelcolor};
`

export const Select = styled(ReactSelect) <DropdownType & SelectProps>`

.react-select__control {
    background: ${props => props.theme[props.path]?.backgroundColor};
    border-radius: ${props => props.theme[props.path]?.borderRadius};
    padding: ${props => props.theme[props.path]?.padding};
    margin: ${props => props.theme[props.path]?.margin};
    border: ${props => props.theme[props.path]?.border};
    width: ${props => props.theme[props.path]?.width};
    font-size:${props => props.theme[props.path]?.fontSize};
    font-family:${props => props.theme[props.path]?.fontFamily};
    height:${props => props.theme[props.path]?.height};
  }

  .react-select__value-container {
    padding: 10px;
  }

  .react-select__menu {
    margin-top: ${props => props.theme[props.path]?.optionsMenuMarginTop};
    border-radius:${props => props.theme[props.path]?.optionsMenuborderRadius};
    font-size:${props => props.theme[props.path]?.fontSize};
    font-family:${props => props.theme[props.path]?.fontFamily};
  }

  .react-select__option {
    margin-top: ${props => props.theme[props.path]?.optionsMenuMarginTop};
    border-radius:${props => props.theme[props.path]?.optionsMenuborderRadius};
    font-size:${props => props.theme[props.path]?.fontSize};
    font-family:${props => props.theme[props.path]?.fontFamily};
  }
`;