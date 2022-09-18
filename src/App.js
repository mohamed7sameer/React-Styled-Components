
// import './App.css';
import Alink from "./StyledComponents/Alink";
import Button from "./StyledComponents/Button";
import Container from "./StyledComponents/Container";
import Flex from "./StyledComponents/Flex";



function App() {
  return (
    <div>
      <Container as="section">
        <h1>hello</h1>
        <Flex>
          <Button>Click Me</Button>
          {/* <Button className='sm error'>Click Me</Button>
          <Button className='lg secondary'>Click Me</Button> */}
          <Button dataSize="sm" dataType="error" >Click Me</Button>
          <Button dataSize="lg" dataType="secondary" >Click Me</Button>
          <Alink href="http://google.com">Google</Alink>
        </Flex>
      </Container>
    </div>
  );
}

export default App;
