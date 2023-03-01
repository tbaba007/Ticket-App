import styled from "styled-components";

export const Title = styled.div``;
export const TicketInput = styled.div.attrs({ type: "text" })``;
export const Container = styled.div`
  background-color: #dfe0eb;
  height: 100vh;
  overflow-y: scroll;
  padding-left: 280px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
`;

export const FormContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  margin-bottom: -50px;
  font-size: 24px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const FormSelect=styled.select`
  width: 250px;
`
