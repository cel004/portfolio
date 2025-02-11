import styled from "styled-components";
import drawerFront from "./assets/drawer_front.svg";

const StyledImage = styled.img`
  width: 95vw; 
  height: auto;
  margin-top: 30rem;
`;

const App = () => {
  return (
    <>
      <StyledImage src={drawerFront} alt="Front of file drawer" />
    </>
  );
};

export default App;
