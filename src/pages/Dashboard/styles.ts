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
  height: 100%;

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
  height: 100%;
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

export const ContainerExpense = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 2%;

  top: 0;
  left: 0;

  backdrop-filter: brightness(10%);
`

export const AddExpense = styled.div`
  width: 40%;
  height: 100%;
  padding: 4%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.3vw;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: linear-gradient(140deg, ${colors.darkGold} 0%, ${colors.tangerina} 20%, ${colors.redPurpura} 60%);
`

export const DivExpense = styled.div`
  width: 100%;
  height: 100%;
  padding: 8%;

  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;

  background: ${colors.transparentBackground};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.20);


  > div {
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
