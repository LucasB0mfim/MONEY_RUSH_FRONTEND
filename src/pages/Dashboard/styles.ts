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
`

export const QuickAccess = styled.div`
  width: 100%;
  height: 30%;
  padding: 2%;

  display: flex;
  justify-content: space-between;

  border-radius: 1vw;
  background: #f9fbfa;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
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

export const Pay = styled.div`
  width: 100%;
  height: 40%;
  border-radius: 1vw;
  background: #f9fbfa;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
`

export const Bank = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 1vw;
  background: #f9fbfa;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
`

export const Expenses = styled.div`
  width: 55%;
  height: 95%;
  padding: 2%;

  border-radius: 1vw;

  background: #f9fbfa;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);

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
background: #c2c2c2;
`

export const Hello = styled.div`
  width: 15%;
  height: 100%;
  padding: 2%;

  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 1vw;

  background: #FFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);

  p {
    font-size: 2vw;
    font-weight: bold;
  }

  span {
    font-size: 1.3vw;
    font-weight: bold;
  }
`

export const Add = styled.div`
  width: 15%;
  height: 100%;
  padding: 2%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 1vw;

  background: #FFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);

  img {
    width: 40%;
    cursor: pointer;
  }

  p {
    font-weight: bold;
  }
`
