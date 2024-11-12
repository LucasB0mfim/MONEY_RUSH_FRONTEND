import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Container = styled.div`
  height: 100vh;
  margin: 0;

  display: flex;
  justify-content: end;

  @media(max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 2%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: #f9fbfa;
`

export const QuickAccess = styled.div`
  width: 100%;
  height: 30%;
  padding: 2%;

  display: flex;
  justify-content: space-between;

  border-radius: 1vw;
  background: #FFF;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.20);
`

export const DivBar = styled.div`
  width: 100%;
  height: 65%;

  display: flex;
  justify-content: space-between;

  border-radius: 1vw;
`

export const MoreInfo = styled.div`
  width: 42%;
  height: 95%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 1vw;
`

export const Bank = styled.div`
  width: 100%;
  height: 46%;
  border-radius: 1vw;
  background: #FFF;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.20);
`

export const Expenses = styled.div`
  width: 55%;
  height: 95%;
  padding: 2%;

  border-radius: 1vw;

  background: #FFF;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.20);

  display: flex;
  justify-content: center;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    li {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`

export const Data = styled.div`
  width: 100%;
  height: 100%;

  padding: 2%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Span = styled.span``

export const Row = styled.span`
width: 100%;
height: 1px;
background: #e2e2e2;
`

export const Hello = styled.div`
  width: 15%;
  height: 100%;
  padding: 2%;

  display: flex;
  text-align: start;
  flex-direction: column;
  justify-content: center;

  border-radius: 1vw;

  background: #FFF;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);

  p {
    font-size: 1.3vw;
    color: #919191;
    margin-bottom: 2%;
  }

  span {
    font-size: 1.9vw;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.6);
  }
`

export const TEST = styled.button`
  width: 15%;
  height: 100%;
  padding: 2%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;

  border: none;
  border-radius: 1vw;

  background: #FFF;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);

  img {
    width: 40%;
    cursor: pointer;
  }

  p {
    font-weight: bold;
  }
`

export const Pay = styled.div`
  width: 15%;
  height: 100%;
  padding: 2%;

  display: flex;
  text-align: start;
  flex-direction: column;
  justify-content: center;

  border-radius: 1vw;

  background: #FFF;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);

  p {
    font-size: 1.3vw;
    color: #919191;
    margin-bottom: 2%;
  }

  span {
    font-size: 1.7vw;
    font-weight: bold;
    color: ${colors.redPurpura}
  }
`

export const Add = styled.button`
  width: 15%;
  height: 100%;
  padding: 2%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border: none;
  border-radius: 1vw;

  background-image: linear-gradient(140deg, ${colors.darkGold} 0%, ${colors.tangerina} 20%, ${colors.redPurpura} 45%);
  background-size: 200% 200%;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);

  img {
    width: 40%;
  }

  transition: background-position 0.5s ease;

  &:hover {
    transition: background-position 0.5s ease;
    background-image: linear-gradient(140deg, ${colors.darkGold} 0%, ${colors.tangerina} 20%, ${colors.redPurpura} 60%);
    background-position: 100% 100%;
  }
`

export const AddExpense = styled.div`
  position: absolute;
  width: 96%;
  height: 90%;
  padding: 2%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: 1vw;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background: linear-gradient(140deg, ${colors.darkGold} 0%, ${colors.tangerina} 20%, ${colors.redPurpura} 60%);

  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.20);

  h1 {
    font-size: 200%;
    color: ${colors.white};
  }
`

export const DivExpense = styled.div`
  width: 100%;
  height: 8%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ExitButton = styled.button`
  width: 5%;
  height: 100%;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 1vw;
  background: ${colors.transparentBlack};

  img {
    width: 40%;
  }
`

export const Form = styled.form`
  width: 60%;
  height: 80%;

  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
`

export const Input = styled.input`
  color: ${colors.white};
  width: 100%;
  padding: 3%;
  font-size: 0.98vw;

  outline: none;
  margin-bottom: 1.08%;
  border-radius: 1vw;
  background: ${colors.transparentBlack};
  border: none;

  &::placeholder {
    color: ${colors.white};
  }
`

export const BtnEnter = styled.button`
  color: ${colors.white};
  width: 100%;
  padding: 3.2%;
  cursor: pointer;
  font-size: 90%;
  font-weight: bold;
  margin-top: 2vw;

  border: none;
  border-radius: 1vw;
  background: ${colors.transparentBlack};
`
