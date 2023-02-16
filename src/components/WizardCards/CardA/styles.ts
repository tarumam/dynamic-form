import styled from 'styled-components';

export const Container = styled.div`
  background: var(--cardBackgroundColor);
  min-height: 552px;
  margin: 81px 195px 181px;
  display:flex;
  flex-direction: column;
  justify-content:space-around;
`;

export const TitleContainer = styled.h1`
  font-family: Arial;
  font-size: 34px;
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: center;
  color: #404040;
`;

export const SubTitleContainer = styled.div`
  font-family: Arial;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #404040;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

