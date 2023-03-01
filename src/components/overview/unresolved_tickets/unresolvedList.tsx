import React from "react";
import Card from "../../../UI/Cards";
import {
  Container,
  TableData,
  TableRow,
  TaskListCheck,
  TaskListHeaderTitle,
  TaskListHeaderView,
  TaskListText,
  UnResolvedTicketContainer,
} from "../tasks/styles";
import { UnResolvedDataList } from "./data";
import { TaskButton } from "./styles";
import { IUnresolvedTicketsProps } from "./types";
import { useNavigate } from "react-router-dom";
const UnResolvedList = () => {
  const navigate=useNavigate();
  const onClick=({type}:IUnresolvedTicketsProps)=>{
    if(type==='NEW'){
      navigate('/createticket')
    }
  }
  const UnSupportedTicket = () => {
    return (
      <Container>
        <UnResolvedTicketContainer>
          <TaskListHeaderTitle>Tasks</TaskListHeaderTitle>
          <TaskListHeaderView>View details</TaskListHeaderView>
        </UnResolvedTicketContainer>

        <table style={{ borderWidth: "1px",borderCollapse:"collapse" }}>
          <tbody>
            {UnResolvedDataList.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableData>
                    <div style={{display:'flex',width:'200px',marginLeft:'20px'}}>
                    <TaskListCheck/>
                    <TaskListText> &nbsp;{item.category}</TaskListText>

                    </div>
                  </TableData>
                  <TableData>
                    <TaskButton title={item.type} text="" onClick={()=>onClick(item)}>{item.type}</TaskButton>
                  </TableData>
                </TableRow>
              );
            })}
          </tbody>
        </table>
      </Container>
    );
  };
  return (
    <Container>
      <Card children={<UnSupportedTicket />} width="546px" height="350px" />
    </Container>
  );
};

export default UnResolvedList;
