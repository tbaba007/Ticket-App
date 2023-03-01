import { Container } from "./styles";
import { ICard } from "./types";

const Card = ({ width, height,children }: ICard) => {
  return (
    <Container width={width} height={height}>
      {children}
    </Container>
  );
};

export default Card;
