import styled from "styled-components";
import { ICard } from "./types";

export const Container = styled.div<ICard>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 8px;
  padding-top:12px ;
  border-width: 1px;
  border-color: grey;
  justify-content: center;
  text-align: center;
  align-self: center;
  background-color: #FFFFFF;
  :hover{
    border-color:#3751FF ;
    border-width: 1px;
  }
  
`;
