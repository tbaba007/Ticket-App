import Cards from "../../UI/Cards";
import Sidebar from "../sidebar/sidebar";
import {
  Container,
  TicketDetailsContainer,
  TicketDetailsImageContainer,
  TaskButton,
  Title,
  TableHeader,
  TaskOption,
} from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { getMessage } from "../../helper/Common";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ITicketProps } from "./types";

const TicketList = () => {
  const data = useSelector((state: RootState) => state.tickets);
  const Table = () => {
    return (
      <div>
        <p
          style={{
            textAlign: "start",
            marginLeft: "30px",
            marginBottom: "40px",
          }}
        >
          All Tickets
        </p>
        <table
          className="table"
          style={{ marginLeft: "-80px", width: "1190px" }}
        >
          <thead>
            <tr>
              <TableHeader />
              <TableHeader>Ticket details</TableHeader>
              <TableHeader>Customer name</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Priority</TableHeader>
            </tr>
          </thead>
          <tbody>
            {data.map((item: ITicketProps, index: number) => {
              return (
                <tr key={item.id}>
                  <td>
                    <TicketDetailsImageContainer />
                  </td>
                  <td>
                    <TicketDetailsContainer>
                      <h6>{item.subject}</h6>
                      <p>{item.lastUpdate}</p>
                    </TicketDetailsContainer>
                  </td>

                  <td>
                    <TicketDetailsContainer>
                      <h6>{getMessage("user")}</h6>
                      <p>on 24.05.2019</p>
                    </TicketDetailsContainer>
                  </td>
                  <td>
                    <TicketDetailsContainer>
                      <h6>{item.Date}</h6>
                      <p>on 24.05.2019</p>
                    </TicketDetailsContainer>
                  </td>
                  <td>
                    <TicketDetailsContainer>
                      <TaskButton title={item.priority} text="">
                        {item.priority}
                      </TaskButton>
                    </TicketDetailsContainer>
                  </td>
                  <td>
                    <TaskOption />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {data?.length === 0 && <p>No Tickets Found</p>}
      </div>
    );
  };

  return (
    <>
      <Sidebar name="Tickets" />
      <Container>
        <Title>Tickets</Title>
        <div style={{ marginTop: "100px" }}>
          <Cards width="1122px" height="942px" children={<Table />} />
        </div>
      </Container>
    </>
  );
};

export default TicketList;
