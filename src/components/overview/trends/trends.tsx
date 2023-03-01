import Cards from "../../../UI/Cards";
import { TrendData } from "./data";
import {
  Container,
  ContainerTextHeader,
  ContainerTextBody,
  ContainerDivider,
  AppContainer,
} from "./styles";

import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Today", "Yesterday"],
  ["0", 1000, 400],
  ["1", 1170, 460],
  ["2", 660, 1120],
  ["3", 1030, 540],
  ["4", 1000, 400],
  ["5", 1170, 460],
  ["6", 660, 1120],
  ["7", 1030, 540],
  ["8", 1000, 400],
  ["9", 1170, 460],
  ["10", 660, 1120],
  ["11", 1030, 540],
  ["12", 1000, 400],
  ["13", 1170, 460],
  ["14", 660, 1120],
  ["15", 1030, 540],
  ["16", 1000, 400],
  ["17", 1170, 460],
  ["18", 660, 1120],
  ["19", 1030, 540],
];

export const options = {
  curveType: "function",
  legend: { position: "top" },
};

const Trends = () => {
  const Data = () => {
    return (
      <>
        <Chart
          chartType="LineChart"
          width="85%"
          height="400px"
          data={data}
          options={options}
        />
        <AppContainer>

          {TrendData.map((item, index) => {
            return (
              <Container>
                <ContainerTextHeader>{item.category}</ContainerTextHeader>
                <ContainerTextBody>{item.count}</ContainerTextBody>
                {index > -1 && index <4 && <ContainerDivider />}
              </Container>
            );
          })}
        </AppContainer>
      </>
    );
  };

  return <Cards width="1122px" height="546px" children={<Data />} />;
};

export default Trends;
