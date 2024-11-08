import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  height: 100vh;
  margin: 0;

  display: flex;
  justify-content: end;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background: linear-gradient(140deg, ${colors.greenDark} 10%, ${colors.green} 30%, ${colors.greenLight} 60%);
`

export const Main = styled.main`
  width: 30%;
  height: 100%;
  padding: 20vh 3vh 30vh 3vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  > h2 {
    color: ${colors.white};
    font-size: 3.75vh;
  }

  > p {
    color: ${colors.grayLight};
    font-size: 2.5vh;
  }
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

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Input = styled.input`
  color: ${colors.white};
  width: 100%;
  padding: 3.2%;
  font-size: 2.1vh;

  border: none;
  outline: none;
  margin-bottom: 1.08%;
  border-radius: 0.7vh;
  background: ${colors.greenDark};

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`

export const BtnEnter = styled.button`
  color: ${colors.white};
  width: 100%;
  padding: 3.2%;
  cursor: pointer;
  font-size: 2.1vh;

  border: none;
  outline: none;
  margin-bottom: 1.08%;
  border-radius: 0.7vh;
  background: ${colors.green};
`

export const BtnCreate = styled.button`
color: ${colors.white};
  width: 100%;
  padding: 3.2%;
  cursor: pointer;
  font-size: 2.1vh;

  outline: none;
  border: none;
  border-radius: 0.7vh;
  background: transparent;
  border: solid 0.3vh ${colors.gray};
`
