import React, { useEffect } from "react";
import Card from "../../UI/Cards";
import Sidebar from "../sidebar";
import { Title } from "../sidebar/styles";
import { Data } from "./data";
import {
  TopTile,
  TopCardContainer,
  Container,
  OverviewBottomContainer,
  OverviewTrendsContainer,
} from "./styles";
import TaskList from "./tasks/taskList";
import { ITaskProps } from "./tasks/types";
import Trends from "./trends";
import UnResolvedList from "./unresolved_tickets/unresolvedList";

const Overview = () => {
  useEffect(() => {
    document.title = "Overview";
  }, []);
  const Children = ({ category, count, id }: ITaskProps) => {
    return (
      <TopTile>
        {category}
        <p>{count}</p>
      </TopTile>
    );
  };

  const TopCard = () => {
    return (
      <TopCardContainer>
        {Data.map((item) => {
          return (
            <Card
              key={item.id}
              height="134px"
              width="258px"
              children={
                <Children
                  category={item.category}
                  count={item.count}
                  id={item.id}
                />
              }
            />
          );
        })}
        ;
      </TopCardContainer>
    );
  };

  return (
    <>
      <Sidebar name="Overview"   />
      <Container>
        <Title>Overview</Title>
        <TopCard />
        <OverviewTrendsContainer>
          <Trends />
        </OverviewTrendsContainer>
        <OverviewBottomContainer>
          <TaskList />
          <UnResolvedList />
        </OverviewBottomContainer>
      </Container>
    </>
  );
};

export default Overview;
