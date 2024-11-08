import styled from "styled-components";

import { colors } from "../../styles";

type ErrorProps = {
  isError: boolean
}

export const Container = styled.div`
  height: 100vh;
  margin: 0;

  display: flex;
  justify-content: end;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background: linear-gradient(140deg, ${colors.greenDark} 10%, ${colors.green} 30%, ${colors.greenLight} 60%);
`

export const Aside = styled.aside`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20vh 10vh 20vh 10vh;

  h2 {
    color: ${colors.gray};
    font-size: 10vh;
  }
`

export const DivLogo = styled.div`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: start;

  img {
    height: 100%;
  }

  h1 {
    color: ${colors.gray};
    margin-left: 1.08%;
    font-size: 4.5vh;
  }
`

export const Main = styled.main<ErrorProps>`
  width: 30%;
  height: 100%;
  padding: ;
  padding: ${(props) => props.isError ? '8% 3vh 8% 3vh' : '20vh 3vh 30vh 3vh'};

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.isError ? 'center' : 'space-between'};

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  > h2 {
    color: ${colors.white};
    font-size: 3.75vh;
  }

  > p {
    color: ${colors.grayLight};
    font-size: 2.5vh;
    margin-top: ${(props) => props.isError ? '9%' : 'none'};
  }
`

export const Form = styled.form<ErrorProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin-top: ${(props) => props.isError ? '9%' : 'none'};
`

export const Input = styled.input<ErrorProps>`
  color: ${colors.white};
  width: 100%;
  padding: 3.2%;
  font-size: 2.1vh;

  outline: none;
  margin-bottom: 1.08%;
  border-radius: 0.7vh;
  border: ${(props) => props.isError ? '0.4vh solid rgb(255, 0, 0)' : 'none'};
  background: ${(props) => props.isError ? 'rgb(139, 0, 0)' : 'rgba(34, 48, 11, 1)'};

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`

export const Btn = styled.button<ErrorProps>`
color: ${colors.white};
width: 100%;
padding: 3.2%;
cursor: pointer;
font-size: 2.1vh;

border: none;
outline: none;
margin-top: ${(props) => props.isError ? '1.08%' : 'none'};
border-radius: 0.7vh;
background: ${colors.green};
`

export const Error = styled.div`
width: 100%;
font-size: 2.2vh;
margin-bottom: 1.08%;
color: rgb(139, 0, 0);
`
