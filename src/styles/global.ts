import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #F5F5F5;
  --red: #E52E4D;
  --blue: #5429CC;
  --white: #FFFFFF;
  --gray: #B9BCC0;
  --wizardInactiveStep: #595959;
  --wizarActiveStep: #0072CE;
  --cardBackgroundColor: #FFFFFF;
}

*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

html{
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media (max-width: 720px){
    font-size: 87.5%;
  }
}

body{
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

`