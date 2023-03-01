import styled from "styled-components";
import { IMenu } from "./types";

export const Container = styled.div`
  width: 255px;
  height: 100vh;

  position: absolute;
  background-color: #363740;
`;

export const MenuItem = styled.div<IMenu>`
  display: flex;
  margin-left: 40px;
  gap: 20px;
  cursor: pointer;
  img {
    width: 11px;
    height: 16px;
    margin-top: 40px;
  }
  div {
    color: ${(props) => (props.isActive ? "#DDE2FF" : "#A4A6B3")};
    cursor: pointer;
    margin-top: 37px;
  }
`;
export const MenuHeader = styled.div`
  background-image: url("/assets/images/logo.svg");
  width: 53px;
  height: 52px;
  background-repeat: no-repeat;
  margin-top: 30px;
  margin-left: 25px;
`;

export const MenuHeaderText = styled.div`
  color: #a4a6b3;
  margin-top: 50px;
`;

export const MenuHeaderContainer = styled.div`
  display: flex;
  gap: 5px;
`;
export const Title=styled.div` 
  margin-top: 10px;
  margin-bottom: -50px;
  font-size: 24px;
`