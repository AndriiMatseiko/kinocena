import { useState, useEffect } from 'react'
import './App.css'
import { Navbar, Container, Badge, Row, Spinner, Col, Offcanvas, Form, Button } from 'react-bootstrap'
import Tables from './Tables'
import { daneKino, filmyHelios, filmyMultiKino, filmyCinemaCity } from './static'

const App = () => {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
  }, [isLoading])
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container fluid>
          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Tanie Kino</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Row xs={12}>
                <Col sm={12}>
                  <label for="filmDate">Film Date:</label> <input type="date" id="filmDate" name="filmDate" />
                </Col>
              </Row>
              <Row xs={12}>
                <Col sm={12}>
                  <Form.Select size="sm">
                    <option>Open this select City</option>
                    {daneKino.map(({ city }, index) => (
                      <option value={index + 1}>{city}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>

              <Row xs={12}>
                <Col sm={12} className="Button">
                  <Button variant="primary" disabled={isLoading} onClick={() => setLoading(!isLoading)}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand href="#">Tanie Kino</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
        </Container>
      </Navbar>
      {!isLoading ? (
        <>
          <h3>
            <Badge bg="secondary">Helios</Badge>
          </h3>
          <Tables filmy={filmyHelios} />
          <h3>
            <Badge bg="secondary">Multy Kino</Badge>
          </h3>
          <Tables filmy={filmyMultiKino} />
          <h3>
            <Badge bg="secondary">Cinema City</Badge>
          </h3>
          <Tables filmy={filmyCinemaCity} />
        </>
      ) : (
        <Spinner animation="border" variant="danger" />
      )}
    </div>
  )
}

export default App
