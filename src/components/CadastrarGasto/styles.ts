import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  padding: 2%;

  top: 0;
  left: 0;

  backdrop-filter: brightness(20%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: linear-gradient(140deg, ${colors.darkGold} 0%, ${colors.tangerina} 20%, ${colors.redPurpura} 60%);
`

export const DivBar = styled.div`
  width: 40%;
  height: 100%;
  padding: 4%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Div = styled.div`
  width: 100%;
  height: 100%;
  padding: 8%;

  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;

  background: ${colors.transparentBackground};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.20);
`

export const TopDiv = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  align-items: start;
  justify-content: space-between;

  h2 {
    color: ${colors.white};
  }

  img {
    width: 100%;
  }
`

export const ExitButton = styled.button`
  width: 2vw;
  height: 4vh;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  border: none;
  background: transparent;
`

export const Form = styled.form`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Select = styled.select`
  width: 100%;
  padding: 3%;
  margin-bottom: 1.08%;
  color: ${colors.white};

  outline: none;
  border: none;
  border-radius: 0.3vw;
  background: ${colors.transparentBlack};
`

export const option = styled.option`
  color: #535353;

  font-weight: bold;

  background: ${colors.white};

  border-radius: 0.3vw;
`

export const Input = styled.input`
  width: 100%;
  padding: 3%;
  margin-bottom: 1.08%;
  color: ${colors.white};

  outline: none;
  border: none;
  border-radius: 0.3vw;
  background: ${colors.transparentBlack};

  &::placeholder {
    color: ${colors.transparentGray};
  }
`

export const Btn = styled.button`
  width: 100%;
  padding: 3%;
  font-size: 0.98vw;
  color: ${colors.white};

  cursor: pointer;

  outline: none;
  border: none;
  border-radius: 0.3vw;
  background: ${colors.red};
`

export const Error = styled.div`
  width: 100%;
  font-size: 1vw;
  margin-bottom: 1.08%;
  color: ${colors.white};
`
