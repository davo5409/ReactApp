




import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
//import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home() {

  const showToastMessage1 = () => {
    setContador(contador - 1); 
    setPrecio(precio -1);     
    
    toast.error('Quitaste este producto !', {
        position: toast.POSITION.TOP_RIGHT
    });
};

  const showToastMessage = () => {
    setContador(contador + 1); 
    setPrecio(precio +1);     

    toast.success('Has agregado este producto con éxito!', {
        position: toast.POSITION.TOP_RIGHT
        
    });
 };
    const finalPedido = () => {
    
      toast.success('Continuá con el pago de tu pedido. Muchas gracias!', {
          position: toast.POSITION.TOP_RIGHT
          
      });
 
 
    }
  const [contador, setContador] = useState(0);
  const [precio, setPrecio] = useState(0);
 
  
  return (

    <>
 <img className="imagen" src="./empanadalogo.png" alt="logo de la marca de empanadas"></img> 
        <div className='carrito'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./imagenes/jyq.jpg" />
      <Card.Body>
        <Card.Title> Jamón y Queso</Card.Title>
        <Button className="incrementar" variant="info" onClick={ showToastMessage}>+</Button>{''}<ToastContainer />
<Button className="disminuir" variant="info" onClick={showToastMessage1}>-</Button>{''}             
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./imagenes/carne.jpg" />
  <Card.Body>
    <Card.Title> Carne</Card.Title>
        <Button className="incrementar" variant="info" onClick={ showToastMessage}>+</Button>{''}<ToastContainer />
    
<Button className="disminuir" variant="info" onClick={showToastMessage1}>-</Button>{''}       
  </Card.Body>
</Card>    

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./imagenes/pollo.jpg" />
  <Card.Body>
    <Card.Title> Pollo</Card.Title>
        <Button className="incrementar" variant="info" onClick={ showToastMessage}>+</Button>{''}<ToastContainer />
    
<Button className="disminuir" variant="info" onClick={showToastMessage1}>-</Button>{''}   
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./imagenes/humita.jpg" />
  <Card.Body>
    <Card.Title>Humita</Card.Title>
  
        <Button className="incrementar" variant="info" onClick={ showToastMessage}>+</Button>{''}<ToastContainer />
    
<Button className="disminuir" variant="info" onClick={showToastMessage1}>-</Button>{''}  
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./imagenes/verdura.jpg" />
  <Card.Body>
    <Card.Title>Verdura</Card.Title>

<Button className="incrementar" variant="info" onClick={ showToastMessage}>+</Button>{''}<ToastContainer />
    
<Button className="disminuir" variant="info" onClick={showToastMessage1}>-</Button>{''}
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./imagenes/roquefort.jpg" />
  <Card.Body>
    <Card.Title>Roquefort</Card.Title>
    
        <Button className="incrementar" variant="info" onClick={ showToastMessage}>+</Button>{''}<ToastContainer />
 <Button className="disminuir" variant="info" onClick={showToastMessage1}>-</Button>{''}

  </Card.Body>



</Card>


    </div>

    <div className='botonCart'>

    <Button className='bCart' href="cart" variant="info" onClick={finalPedido}> Ir al pedido :  {contador} </Button>{''}<ToastContainer />

    <Button className='bCart' href="bInicio" variant="info"> Volver al inicio </Button>{''}

    </div>

    </>

   
 
  );
}
  
export default Home;



























