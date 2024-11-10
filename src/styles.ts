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
  douradoClaro: '#F9D423',
  tangerina: '#F97300',
  redPurpura: '#D61A3C',
  red: '#B21632',
  redDark: '#9F142C',
  transparentBackground: 'rgba(255, 255, 255, 0.1)',
  transparentGray: 'rgba(255, 255, 255, 0.5)',
  transparentBlack: 'rgba(0, 0, 0, 0.2)'
}

export const Container = styled.div`
  height: 100vh;
  margin: 0;

  display: flex;
  justify-content: end;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background: linear-gradient(140deg, ${colors.douradoClaro} 10%, ${colors.tangerina} 30%, ${colors.redPurpura} 60%);
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
    color: ${colors.white};
    font-size: 1.63vw;
  }

  > p {
    color: ${colors.grayLight};
    font-size: 1.09vw;
    margin: 10% 0;
  }
`

export const Form = styled.form<ErrorProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
  border: ${(props) => props.isError ? `0.2vw solid ${colors.redDark}` : 'none'};

  &::placeholder {
    color: ${colors.transparentGray};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${colors.red} inset !important;
    box-shadow: 0 0 0px 1000px ${colors.red} inset !important;
    -webkit-text-fill-color: ${colors.white} !important;
  }
`

export const BtnEnter = styled.button`
  color: ${colors.white};
  width: 100%;
  padding: 3.2%;
  cursor: pointer;
  font-size: 0.98vw;
  margin-top: 2vw;

  border: none;
  outline: none;
  margin-bottom: 1.08%;
  border-radius: 0.3vw;
  background: ${colors.redDark};
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
`

export const Error = styled.div<LoginProps>`
  width: 100%;
  font-size: 1vw;
  margin-bottom: 1.08%;
  color: ${(props) => props.isLogin ? `${colors.white}` : `${colors.redDark}`};

  display: ${ (props) => props.isLogin ? 'flex' : 'inline'};
  justify-content: ${(props) => props.isLogin ? 'center' : 'none'};
  margin-top: ${(props) => props.isLogin ? '2vw' : '0px'};
`
