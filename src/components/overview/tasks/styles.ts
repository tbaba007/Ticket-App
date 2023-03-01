import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 270px;
`;

export const TaskListText = styled.div`
  color: #252733;
  text-align: left;
  margin-top: 40px;
  margin-left: 10px;
`;

export const TaskListCheck = styled.input.attrs({ type: "checkbox" })`
  border-color: #c5c7cd;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-top: 40px;
  vertical-align: middle;
  border: 1px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  :checked{
    background-color: #3751FF;
    background-image: url('/assets/images/check.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const TaskListCountText = styled.div`
  color: #9fa2b4;
  margin-left: 260px;
  margin-top: 40px;
  margin-right: 10px;
`;
export const UnResolvedTicketContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const TaskListHeaderTitle = styled.div`
  color: #252733;
  font-weight: 700;
  size: 19px;
`;

export const TaskListHeaderView = styled.a`
  color: #3751ff;
  font-weight: 600;
  size: 14px;
`;
export const TableRow = styled.tr`
  border-bottom: 1px solid #dfe0eb;
  padding-top: 10px;
  :last-child {
    border: 0;
  }
  :first-child{
     border-bottom: 1px solid #dfe0eb;
  }
`;
export const TableData = styled.td`
  margin-bottom: 10px !important;
`;

export const TaskSelector = styled.div`
  border-color: #c5c7cd;
`;
export const TaskCreate=styled.div`
color:#C5C7CD ;
font-weight: 600;
margin-top: 5px;
position: absolute;
font-size: 14px;
`