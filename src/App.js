import { useState, useEffect } from 'react'
import './App.css'
import { Navbar, Container, Badge, Row, Spinner, Col, Offcanvas, Form, Button } from 'react-bootstrap'
import Tables from './Tables'
import SimpleMap from "./Map";

import { daneKino, filmyHelios, filmyMultiKino, filmyCinemaCity } from './static'

const App = () => {
  const [isLoading, setLoading] = useState(false)
  const [miasto, setMiasto] = useState(0)

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
                  <time datetime="2022-01-22 09:00">Dziś: 22 stycznia 2022</time>
                </Col>
              </Row>
              <Row xs={12}>
                <Col sm={12}>
                  <label for="filmDate">Na kiedy sprawdzamy ? </label> <input type="date" id="filmDate" name="filmDate" />
                </Col>
              </Row>
              
              <Row xs={12}>
                <Col sm={12}>
                  <label for="City">A możliwe jeszcze podamy miasto ? </label>
                  <Form.Select size="sm" onChange={({target}) =>setMiasto(target.value -1)}>
                    <option>Miasto</option>
                    {daneKino.map(({ city}, index) => (
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
        <div className='block'>
          <h1>
          <Badge bg="secondary">Spójrz i wież bilet do Kina</Badge>
          <i class="bi bi-geo-alt-fill"></i>
          </h1>
          <h3>
            <Badge bg="secondary">Helios</Badge>
          </h3>
          
 
          <Row xs={12}>
                <Col sm={6}>
                <Tables filmy={filmyHelios} kinoteater='helios' />
                </Col>
                <Col sm={6}>
                <SimpleMap location={daneKino[miasto]} />
                </Col>
              </Row>
          
         
          <h3>
            <Badge bg="secondary">MultiKino</Badge>
          </h3>
          
          <Row xs={12}>
                <Col sm={6}>
                <Tables filmy={filmyMultiKino}  kinoteater='multikino' />
                </Col>
                <Col sm={6}>
                <SimpleMap  location={daneKino[miasto]}/>
                </Col>
              </Row>
          
          
          <h3>
            <Badge bg="secondary">Cinema City</Badge>
          </h3>
          <Row xs={12}>
                <Col sm={6}>
                <Tables filmy={filmyCinemaCity}  kinoteater='cinemacity' />
                </Col>
                <Col sm={6}>
                <SimpleMap  location={daneKino[miasto]} />
                </Col>
              </Row>
         
          
        </div>
      ) : (
        <Spinner animation="border" variant="danger" />
      )}
      
       
    </div>

    
  )
}

export default App
