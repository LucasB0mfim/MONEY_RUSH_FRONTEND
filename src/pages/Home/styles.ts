import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BtnLogout = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #e74c3c;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`;
