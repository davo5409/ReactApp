import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';




function NavBar() {


  return (
    
    

<>
        <Navbar bg="dark" data-bs-theme="dark">
        <img src="./empanadalogo.png" height="50px" width="50px" alt="Logo de marca de empanadas" ></img>   
        <Container>
        <Navbar.Brand href="home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="nosotros">Nosotros</Nav.Link>
          <Nav.Link href="contacto">Contacto</Nav.Link>
          </Nav>
          <Button href="carrito" className="boton" variant="info"> Carrito  </Button>{''}
          
          

      </Container>
    </Navbar>  

    <h2>Bienvenidos a las Empa</h2>
  </>
    
     
  );
}

export default NavBar;
