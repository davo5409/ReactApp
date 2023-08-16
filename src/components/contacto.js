import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Contacto (){
    return (
        <div>

<img className="imagen" src="./empanadalogo.png" alt="logo de la marca de empanadas"></img>
    <Form className='form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingrese su email</Form.Label>
        <Form.Control type="email" placeholder=" Email" />
        <Form.Text className="text-muted">
          No compartiremos esta información con nadie.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Teléfono de contacto</Form.Label>
        <Form.Control type="number" placeholder="Teléfono" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Salir" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>

      
        </div>
               
    );
}

export default Contacto;