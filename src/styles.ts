import styled, { createGlobalStyle } from "styled-components";

type ErrorProps = {
  isError?: boolean
}

type LoginProps = {
  isLogin?: boolean
}

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
  lightGold: '#F9D423',
  darkGold: '#D4B01D',
  tangerina: '#F97300',
  redPurpura: '#D61A3C',
  red: '#B21632',
  darkRed: '#9F142C',
  transparentBackground: 'rgba(255, 255, 255, 0.1)',
  transparentGray: 'rgba(255, 255, 255, 0.5)',
  transparentBlack: 'rgba(0, 0, 0, 0.2)'
}

export const breakpoints = {
  tablet: '1024px',
  mobile: '412px'
}

export const Container = styled.div`
  height: 100vh;
  margin: 0;

  display: flex;
  justify-content: end;

  background-repeat: no-repeat;
  background-attachment: fixed;

  //background: linear-gradient(140deg, ${colors.lightGold} 10%, ${colors.tangerina} 30%, ${colors.redPurpura} 60%);

  // Talvez esse seja melhor:
  background: linear-gradient(140deg, ${colors.darkGold} 0%, ${colors.tangerina} 20%, ${colors.redPurpura} 60%);

  @media(max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Aside = styled.aside`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6vw 0 8vw 5vw;

  p {
    color: ${colors.white};
    font-size: 4.7vw;
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const DivLogo = styled.div`
  height: 1.7vw;
  display: flex;
  align-items: center;
  justify-content: start;

  img {
    height: 100%;
  }

  h1 {
    color: ${colors.white};
    margin-left: 1.08%;
    font-size: 1.7vw;
  }
`

export const Main = styled.main<ErrorProps>`
  width: 30%;
  height: 100%;
  padding: 10% 1.5vw 10% 1.5vw;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${colors.transparentBackground};
  box-shadow: 0px 4px 8px ${colors.transparentBlack};

  > h2 {
    font-size: 1.63vw;
    color: ${colors.white};
  }

  > p {
    margin: 10% 0;
    font-size: 1.09vw;
    color: ${colors.white};
  }

  @media(max-width: ${breakpoints.tablet}) {
    width: 90%;
    height: 90%;
    padding: 2%;

    > h2 {
      font-size: 200%;
    }

    > p {
      margin: 4% 0;
      font-size: 120%;
    }
  }

  @media(max-width: ${breakpoints.mobile}) {
    height: 60%;
    width: 80%;
    padding: 4%;

    > h2 {
      font-size: 200%;
      text-align: center;
    }

    > p {
      margin: 10% 0;
      font-size: 80%;
      text-align: center;
    }
  }
`

export const Form = styled.form<ErrorProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media(max-width: ${breakpoints.tablet}) {
    display: inline;
    padding-right: 10px;
    overflow-y: auto;
    scroll-behavior: smooth;

    /* Largura da barra de rolagem */
    &::-webkit-scrollbar {
      width: 3px;
    }

    /* Cor do controle da barra de rolagem */
    &::-webkit-scrollbar-thumb {
      background: ${colors.white};
      border-radius: 10px;
    }
  }

  @media(max-width: ${breakpoints.mobile}) {
    padding: 0;
  }
`

export const Input = styled.input<ErrorProps>`
  color: ${colors.white};
  width: 100%;
  padding: 3.2%;
  font-size: 0.98vw;

  outline: none;
  margin-bottom: 1.08%;
  border-radius: 0.3vw;
  background: ${colors.red};
  border: ${(props) => props.isError ? `0.2vw solid ${colors.darkRed}` : 'none'};

  &::placeholder {
    color: ${colors.transparentGray};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${colors.red} inset !important;
    box-shadow: 0 0 0px 1000px ${colors.red} inset !important;
    -webkit-text-fill-color: ${colors.white} !important;
  }

  @media(max-width: ${breakpoints.tablet}) {
    padding: 2.8%;
    font-size: 100%;
    margin-bottom: 0.5%;
    border-radius: 0.5vw;
  }

  @media(max-width: ${breakpoints.mobile}) {
    padding: 4%;
    font-size: 70%;
    margin-bottom: 1.08%;
    border-radius: 0.5vh;
  }
`

export const BtnEnter = styled.button`
  color: ${colors.white};
  width: 100%;
  padding: 3.2%;
  cursor: pointer;
  font-size: 0.98vw;
  margin-top: 2vw;
  margin-bottom: 1.08%;

  border: none;
  outline: none;
  border-radius: 0.3vw;
  background: ${colors.darkRed};

  @media(max-width: ${breakpoints.tablet}) {
    padding: 2.8%;
    font-size: 100%;
    border-radius: 0.5vw;
  }

  @media(max-width: ${breakpoints.mobile}) {
    padding: 4%;
    font-size: 80%;
    border-radius: 0.5vh;
  }
`

export const BtnCreate = styled.button`
color: ${colors.white};
  width: 100%;
  padding: 3.2%;
  cursor: pointer;
  font-size: 0.98vw;

  outline: none;
  border: none;
  border-radius: 0.3vw;
  background: transparent;
  border: solid 0.1vw ${colors.white};

  @media(max-width: ${breakpoints.tablet}) {
    padding: 2.8%;
    font-size: 100%;
    border-radius: 0.5vw;
  }

  @media(max-width: ${breakpoints.mobile}) {
    padding: 4%;
    font-size: 80%;
    border-radius: 0.5vh;
  }
`

export const Error = styled.div<LoginProps>`
  width: 100%;
  font-size: 1vw;
  margin-bottom: 1.08%;
  color: ${(props) => props.isLogin ? `${colors.white}` : `${colors.darkRed}`};

  display: ${ (props) => props.isLogin ? 'flex' : 'inline'};
  justify-content: ${(props) => props.isLogin ? 'center' : 'none'};
  margin-top: ${(props) => props.isLogin ? '2vw' : '0px'};

  @media(max-width: ${breakpoints.tablet}) {
    font-size: 100%;
  }

  @media(max-width: ${breakpoints.mobile}) {
    font-size: 80%;
  }
`
