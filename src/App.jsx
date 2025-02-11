import styled from "styled-components";
import drawerFront from "./assets/drawer_front.svg";
import drawerContainer from "./assets/drawer_container.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DrawerImage = styled.img`
  display: flex;
  justify-content: center;
  width: 95vw; 
  height: auto;
  z-index: -100;
`;
const ContainerImage = styled.img`
  display: flex;
  justify-content: center;
  width: 90vw; 
  height: auto;
  z-index: -100;
`;

const App = () => {
  return (
    <>
    <Container>
      <ContainerImage src={drawerContainer} alt="Container of file drawer" />
      <DrawerImage src={drawerFront} alt="Front of file drawer" />
    </Container>
    </>
  );
};

export default App;
