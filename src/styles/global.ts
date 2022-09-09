import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme['white']};
    color: ${(props) => props.theme['gray-headline']};
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }
`