import { useNavigate } from "react-router-dom";
import { Menu } from "./menu";
import {
  Container,
  MenuItem,
  MenuHeader,
  MenuHeaderText,
  MenuHeaderContainer
} from "./styles";
import { IMenu } from "./types";

const Sidebar = ({name}:IMenu) => {
  const navigate=useNavigate();
  
  const MenuClick = (data: IMenu) => {
    if(data.path){
      navigate(`${data.path}`);
      return;
    }
    
  };
  return (
    <>
      <Container>
       
        <MenuHeaderContainer>
          <MenuHeader></MenuHeader>
          <MenuHeaderText>Danny Dribble</MenuHeaderText>
        </MenuHeaderContainer>

        {Menu.map((item) => {
          return (
            <MenuItem
              key={item.id}
              isActive={item.name === name}
              onClick={() => MenuClick(item)}
            >
              <img src={item.icon} alt={item.name} />
              <div>{item.name}</div>
            </MenuItem>
          );
        })}
      </Container>
    </>
  );
};

export default Sidebar;
