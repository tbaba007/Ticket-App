import styled from "styled-components";
import { IButtonProps } from "./types";

export const TaskButton = styled.button<IButtonProps>`
  background-color:${props=>props.title==='URGENT' && '#fec400'} ;
  background-color:${props=>props.title==='NEW' && '#29CC97'} ;
  background-color:${props=>props.title==='DEFAULT' && '#F0F1F7'} ;
  border-radius: 8px;
  color: #fff;
  border: none;
  height: 24px;
  margin-left: 230px;
  margin-top: 40px;
  margin-right: 10px;
`;

