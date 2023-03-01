import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addTicket } from "../../../redux/features/ticketSlice";
import Card from "../../../UI/Cards/card";
import Sidebar from "../../sidebar";
import { Title } from "../styles";
import { ITicketProps } from "../types";
import { Container, FormContainer, FormSelect } from "./styles";

const CreateTicket = () => {
  const dispatch = useDispatch();
  const [subject, setSubject] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    document.title = "Create Ticket";
  }, []);

  const onSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const data: ITicketProps = {
      priority: priority,
      description: description,
      subject: subject,
    };
    dispatch(addTicket(data));
    toast("Ticket added successfully!");
    setDescription('');
    setSubject('');
    setPriority('')
   
  };
  return (
    <>
      <Sidebar />
      <Container>
        <Title>Create Ticket</Title>
        <FormContainer>
          <Card
            width="500px"
            height="500px"
            children={
              <form onSubmit={onSubmit}>
                <div>
                  <p>Create Ticket</p>
                  <br />
                  <table>
                    <tr>
                      <td>Subject</td>
                      <td>
                        <input
                          type="text"
                          required
                          name="subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        />
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>Priority</td>
                      <td>
                        <FormSelect
                          onChange={(e) => setPriority(e.target.value)}
                          name="priority"
                          
                        >
                          <option value="" selected={priority===''}>--Select Priority--</option>
                          <option value="LOW"  selected={priority==='LOW'}>Low</option>
                          <option value="NORMAL"  selected={priority==='NORMAL'}>Medium</option>
                          <option value="HIGH"  selected={priority==='HIGH'}>High</option>
                        </FormSelect>
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td style={{ paddingLeft: "30px" }}>Description</td>
                      <td>
                        <textarea
                          required
                          rows={3}
                          value={description}
                          name="description"
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </td>
                    </tr>
                  </table>

                  <br />
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-success"
                  />
                </div>
              </form>
            }
          />
          <ToastContainer/>
        </FormContainer>
      </Container>
    </>
  );
};

export default CreateTicket;
