import styled, { css } from 'styled-components';
import { CardAButtonsContainerType, CardAContainerType, CardASubTitleContainerType, CardATileContainerType } from './types';

export const Container = styled.div<CardAContainerType>`
  display:flex;
  flex-direction: column;
  ${(props) => css`
    ${props.theme[props.path]}
  `};
`;

export const TitleContainer = styled.h1<CardATileContainerType>`
  letter-spacing: 0em;
  ${(props) => css`
    ${props.theme[props.path]}
  `};
`;

export const SubTitleContainer = styled.p<CardASubTitleContainerType>`
  text-align: center;
  ${(props) => css`
    ${props.theme[props.path]}
  `};
`;

export const ButtonsContainer = styled.div<CardAButtonsContainerType>`
  display: flex;
  
  // Used this because &:only-child didn't work
  ${props => props.oneButton && css`
    justify-content: ${props.theme[props.path]?.justifyContentWhenOneChild};
  `}
  
  // Used this because  &:not(:only-child) didn't work
  ${props => !props.oneButton && css`
    justify-content: ${props.theme[props.path]?.justifyContent};
  `}

  ${(props) => css`
    ${props.theme[props.path]}
  `};
`;

