import styled from "styled-components";

export const Container = styled.div`
  background-color: #dfe0eb;
  height: 100vh;
  overflow-y: scroll;
  padding-left: 280px;
`;

export const TopCardContainer = styled.div`
  display: flex;
  padding-top: 80px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TopTile = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: #252733;
    font-weight: 700;
    font-size: 40px;
  }
`;

export const OverviewBottomContainer=styled.div`
display: flex;
flex-direction: row;
padding-top: 30px;
padding-right: 35px;
justify-content: space-between;

`
export const OverviewTrendsContainer=styled.div`
margin-top: 40px;
display: flex;
justify-content:space-between;
`