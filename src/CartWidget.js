import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import './index.css';


function CartWidget() {

  const [contador, setContador] = useState(0);

  const handleIncrementar = () =>{
setContador(contador + 1);
  }
  const handleDisminuir =  () =>{
setContador(contador - 1);      

  }
  
  return (
    <div className='carrito'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./imagenes/jyq.jpg" />
      <Card.Body>
        <Card.Title> Jamón y Queso</Card.Title>
        <Button className="incrementar" variant="info" onClick={handleIncrementar}>+</Button>{''}
<Button className="disminuir" variant="info" onClick={handleDisminuir}>-</Button>{''}             
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./imagenes/carne.jpg" />
  <Card.Body>
    <Card.Title> Carne</Card.Title>
    <Button className="incrementar" variant="info" onClick={handleIncrementar}>+</Button>{''}
<Button className="disminuir" variant="info" onClick={handleDisminuir}>-</Button>{''}       
  </Card.Body>
</Card>    

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./imagenes/pollo.jpg" />
  <Card.Body>
    <Card.Title> Pollo</Card.Title>
    <Button className="incrementar" variant="info" onClick={handleIncrementar}>+</Button>{''}
<Button className="disminuir" variant="info" onClick={handleDisminuir}>-</Button>{''}   
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./imagenes/humita.jpg" />
  <Card.Body>
    <Card.Title>Humita</Card.Title>
  
    <Button className="incrementar" variant="info" onClick={handleIncrementar}>+</Button>{''}
<Button className="disminuir" variant="info" onClick={handleDisminuir}>-</Button>{''}  
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./imagenes/verdura.jpg" />
  <Card.Body>
    <Card.Title>Verdura</Card.Title>

    <Button className="incrementar" variant="info" onClick={handleIncrementar}>+</Button>{''}
<Button className="disminuir" variant="info" onClick={handleDisminuir}>-</Button>{''}
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./imagenes/roquefort.jpg" />
  <Card.Body>
    <Card.Title>Roquefort</Card.Title>
    
    <Button className="incrementar" variant="info" onClick={handleIncrementar}>+</Button>{''}
 <Button className="disminuir" variant="info" onClick={handleDisminuir}>-</Button>{''}

  </Card.Body>



</Card>

  
<Button href="carrito" className="botonCart" variant="info"> Ir al pedido {contador} </Button>{''}

    </div>


  );
}

export default CartWidget;



























