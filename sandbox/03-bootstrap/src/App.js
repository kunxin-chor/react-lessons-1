import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
   <Container>
        <h1>Hello world!</h1>
        <Row>
          <Col md={4}>Left</Col>
          <Col>Right</Col>
        </Row>
   </Container>
  );
}

export default App;
