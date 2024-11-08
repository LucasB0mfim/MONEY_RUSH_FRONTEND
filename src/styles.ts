import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", serif;
  }
`

export const colors = {
  white: '#fff',
  gray: '#c2c2c2',
  grayLight: '#dddddd',
  green: 'rgba(52, 77, 14, 1)',
  greenLight: 'rgba(118, 153, 61, 1)',
  greenDark: 'rgba(34, 48, 11, 1)'
}
