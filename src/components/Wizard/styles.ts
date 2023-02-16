import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background: var(--background);
`;

export const StepsContainer = styled.div`
  background: var(--gray);
  height: 86px;
  padding: 20px;
  gap:30px;
  flex: 1;
  flex-direction: row;
`;

export const Step = styled.div`
  padding: 0;
  width: 80px;
  height: 4px;
  background: var(--wizardInactiveStep);
`;