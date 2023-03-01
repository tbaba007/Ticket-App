import React from "react";
import Card from "../../../UI/Cards/card";
import { taskListData } from "./data";
import {
  Container,
  TaskListCountText,
  TaskListText,
  UnResolvedTicketContainer,
  TaskListHeaderTitle,
  TaskListHeaderView,
  TableRow,
  TableData,
} from "./styles";

const TaskList = () => {
  const UnSupportedTicket = () => {
    return (
      <Container>
        <UnResolvedTicketContainer>
          <TaskListHeaderTitle>Unresolved tickets</TaskListHeaderTitle>
          <TaskListHeaderView>View details</TaskListHeaderView>
        </UnResolvedTicketContainer>

        <table style={{ borderWidth: "1px",borderCollapse:"collapse" }}>
          <tbody>
            {taskListData.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableData>
                    <TaskListText>{item.category}</TaskListText>
                  </TableData>
                  <TableData>
                    <TaskListCountText>{item.count}</TaskListCountText>
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

export default TaskList;
