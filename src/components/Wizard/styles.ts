import styled, { css } from 'styled-components';
import { StepsContainerType, StepsIndicatorContainerType, StepType, WizardContainerType } from './types';

export const Container = styled.div<WizardContainerType>`
  display:flex;
  flex-direction: column;
  ${(props) => css`
    ${props.theme[props.path]}
  `};
`;

export const StepsContainer = styled.div<StepsContainerType>`
  display: flex;
  flex: 1;
  flex-direction: column;
  ${(props) => css`
    ${props.theme[props.path]}
  `};
`;


export const StepsIndicatorContainer = styled.div<StepsIndicatorContainerType>`
  display: flex;
  flex: 1;
  flex-direction: row;
  ${(props) => css`
    ${props.theme[props.path]}
  `};
`;

export const Step = styled.div<StepType>`
  padding: 0;
  width: 80px;
  height: 4px;
  background: ${props => props.isActive ? props.theme[props.path]?.activeStepColor : props.theme[props.path]?.inactiveStepColor};
  ${(props) => css`
    ${props.theme[props.path]}
  `};
`;
