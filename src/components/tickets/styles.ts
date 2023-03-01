import styled from "styled-components";
import { IButtonProps } from "../overview/unresolved_tickets/types";

export const Container = styled.div`
  background-color: #dfe0eb;
  height: 100vh;
  overflow-y: scroll;
  padding-left: 280px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
`;

export const Title = styled.div`
  margin-top: 10px;
  width: 100%;
  margin-bottom: -50px;
  font-size: 24px;
  display: flex;
`;

export const TicketDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  h6 {
    font-size: 14px;
    font-weight: 600;
    color: #252733;
  }
  p {
    color: #c5c7cd;
    font-weight: 400;
  }
`;

export const TicketDetailsImageContainer = styled.div`
  background-image: url("/assets/images/user.svg");
  width: 44px;
  height: 44px;
  background-repeat: no-repeat;
  border-radius: 55%;
  margin-left: 93px;
  position: relative;
`;

export const TaskButton = styled.button<IButtonProps>`
  background-color: ${(props) => props.title === "HIGH" && "#F12B2C"};
  background-color: ${(props) => props.title === "LOW" && "#FEC400"};
  background-color: ${(props) => props.title === "NORMAL" && "#29CC97"};
  border-radius: 8px;
  color: #fff;
  border: none;
  height: 24px;
  margin-right: 10px;
  cursor: pointer;
`;

export const TableHeader = styled.th`
  color: #9fa2b4;
  font-weight: 700;
`;

export const TaskOption = styled.div`
  background-image: url("/assets/images/options.svg");
  background-repeat: no-repeat;
  height: 16px;
  width: 4px;
  cursor: pointer;
`;
