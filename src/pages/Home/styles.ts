import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  height: 100vh;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background: linear-gradient(140deg, ${colors.douradoClaro} 10%, ${colors.tangerina} 30%, ${colors.redPurpura} 60%);

  h1 {
    color: ${colors.white};
  }
`

export const Btn = styled.button`
height: 40px;
width: 100px;

border: none;
cursor: pointer;
margin-top: 5%;
border-radius: 2vw;
background: ${colors.tangerina};
box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);

  a {
    color: ${colors.white};
    text-decoration: none;
  }
`
