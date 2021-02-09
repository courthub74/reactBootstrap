import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Row>

            <Col md>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Example@email.com"></Form.Control>
                <Form.Text className="text-muted" style={{ fontSize: 15}}>
                  We'll never share your email address, trust us!
                </Form.Text>
              </Form.Group>
            </Col>

            <Col md>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"></Form.Control>
            </Form.Group>
            </Col>
          </Row>
          <Button variant="secondary">Login</Button>

        </Form>

        <br></br>
        <Card className="mb-3" style={{ color: 'black' }}>
          <Card.Img src="https://picsum.photos/1033/200"/>
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>
              This is an example of react bootstrap cards
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        <br></br>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test 2</Breadcrumb.Item>
          <Breadcrumb.Item>Test 3</Breadcrumb.Item>
        </Breadcrumb> 
        
        <Alert variant="secondary">This is a Button</Alert>
        <Button>Test Button</Button>
        </Container>   
      </header>
    </div>
  );
}

export default App;
