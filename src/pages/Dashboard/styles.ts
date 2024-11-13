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
  }

  span {
    font-size: 1.9vw;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.6);
  }
`

export const Historical = styled.div`
  width: 15%;
  height: 100%;
  padding: 2%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;
  border-radius: 12px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);

  p {
    font-size: 1.3vw;
    color: #919191;
  }

  img {
    width: 45%;
  }

  &:hover {
    box-shadow:
      inset 2px 2px 4px rgba(0, 0, 0, 0.35),
      inset -2px -2px 4px rgba(255, 255, 255, 0.9);
  }
`

export const Limit = styled.div`
  width: 15%;
  height: 100%;
  padding: 2%;

  display: flex;
  text-align: start;
  flex-direction: column;
  justify-content: space-between;

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
    color: green;
  }
`

export const Pay = styled.div`
  width: 15%;
  height: 100%;
  padding: 2%;

  display: flex;
  text-align: start;
  flex-direction: column;
  justify-content: space-between;

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

  transition: all 1s ease;

  &:hover {
    transition: all 1s ease;
    background-image: linear-gradient(140deg, ${colors.darkGold} 0%, ${colors.tangerina} 20%, ${colors.redPurpura} 60%, ${colors.tangerina} 90%, ${colors.darkGold} 98%);
    background-position: 100% 100%;
  }
`

