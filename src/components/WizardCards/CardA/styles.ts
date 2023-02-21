import styled, { css } from 'styled-components';
import { CardAButtonsContainerType, CardAContainerType, CardASubTitleContainerType, CardATileContainerType } from './types';

export const Container = styled.div<CardAContainerType>`
  display:flex;
  flex-direction: column;
  align-items: ${props => props.theme[props.path]?.alignItems};
  background: ${props => props.theme[props.path]?.backgroundColor};
  min-height: ${props => props.theme[props.path]?.minHeight};
  margin: ${props => props.theme[props.path]?.marginTopRightBottomLeft};
  justify-content:${props => props.theme[props.path]?.justifyContent};
`;

export const TitleContainer = styled.h1<CardATileContainerType>`
  letter-spacing: 0em;
  font-family: ${props => props.theme[props.path]?.fontFamily};
  font-size: ${props => props.theme[props.path]?.fontSize};
  font-weight: ${props => props.theme[props.path]?.fontWeight};
  line-height: ${props => props.theme[props.path]?.lineHeight};
  text-align: ${props => props.theme[props.path]?.textAlign};
  color: ${props => props.theme[props.path]?.color};
  max-width: ${props => props.theme[props.path]?.maxWidth};
`;

export const SubTitleContainer = styled.p<CardASubTitleContainerType>`
  text-align: center;
  font-family: ${props => props.theme[props.path]?.fontFamily};
  font-size: ${props => props.theme[props.path]?.fontSize};
  font-weight: ${props => props.theme[props.path]?.fontWeight};
  line-height: ${props => props.theme[props.path]?.lineHeight};
  text-align: ${props => props.theme[props.path]?.textAlign};
  color: ${props => props.theme[props.path]?.color};
  max-width: ${props => props.theme[props.path]?.maxWidth};
`;

export const ButtonsContainer = styled.div<CardAButtonsContainerType>`
  display: flex;
  width: ${props => props.theme[props.path]?.width};
  
  // Used this because &:only-child didn't work
  ${props => props.oneButton && css`
    justify-content: ${props.theme[props.path]?.justifyContentWhenOneChild};
  `}
  
  // Used this because  &:not(:only-child) didn't work
  ${props => !props.oneButton && css`
    justify-content: ${props.theme[props.path]?.justifyContent};
  `}
`;

