import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';




function ColorSchemesExample() {
    const [contador, setContador] = useState(0);

    const handleIncrementar = () =>{
setContador(contador + 1);
    }
    const handleDisminuir =  () =>{
setContador(contador - 1);      

    }


  return (
    
    <div>

<>
        <Navbar bg="dark" data-bs-theme="dark">
        <img src="./empanadalogo.png" height="50px" width="50px" alt="Logo de marca de empanadas" ></img>   
        <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href='#nosotros'>Nosotros</Nav.Link>
          <Nav.Link href="#empanadas">Empanadas</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <Button className="boton" variant="info"> Carrito {contador} </Button>{''}
          <Button className="incrementar" variant="info" onClick={handleIncrementar}>+</Button>{''}
          <Button className="disminuir" variant="info" onClick={handleDisminuir}>-</Button>{''}

      </Container>
    </Navbar>  

    <h2>Bienvenidos a las Empa</h2>
  </>
    </div>
     
  );
}

export default ColorSchemesExample;
