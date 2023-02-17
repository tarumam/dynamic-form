import styled from 'styled-components';
import { StepsContainerType, StepsIndicatorContainerType, StepType, WizardContainerType } from './types';

export const Container = styled.div<WizardContainerType>`
  flex: 1;
  background: ${props => props.theme[props.path]?.backgroundColor};
  `;

export const StepsContainer = styled.div<StepsContainerType>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: ${props => props.theme[props.path]?.alignItems};
  background: ${props => props.theme[props.path]?.backgroundColor};
  height: ${props => props.theme[props.path]?.height};
  padding: ${props => props.theme[props.path]?.padding};
  font-family: ${props => props.theme[props.path]?.fontFamily};
  font-size: ${props => props.theme[props.path]?.fontSize};
  //TODO: font color
`;


export const StepsIndicatorContainer = styled.div<StepsIndicatorContainerType>`
  display: flex;
  flex: 1;
  flex-direction: row;
  background: ${props => props.theme[props.path]?.backgroundColor};
  height: ${props => props.theme[props.path]?.height};
  padding: ${props => props.theme[props.path]?.padding};
  gap:${props => props.theme[props.path]?.gap};
  font-family: ${props => props.theme[props.path]?.fontFamily};
  font-size: ${props => props.theme[props.path]?.fontSize};
  //TODO: font color
`;

export const Step = styled.div<StepType>`
  padding: 0;
  width: 80px;
  height: 4px;
  background: ${props => props.isActive ? props.theme[props.path]?.activeStepColor : props.theme[props.path]?.inactiveStepColor};
`;
