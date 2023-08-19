import {Button} from 'react-bootstrap';
import React, {useState} from 'react';

const ItemCount = ({stock, onAdd}) =>{
    const [contador, setContador] = useState(1);

    const incrementar = () =>{
        if(contador  < stock){
            setContador(contador + 1)
        }
    }
    const disminuir = () =>{
        if(contador > 0){
            setContador(contador -1)
        }
    }


    return(
        <div>

<>
<Button className='incrementar' variant='info' onClick={incrementar}>+</Button>{''}
<span>{contador}</span>
<Button className='disminuir' variant='info' onClick={disminuir}>-</Button>{''}
</>
<Button disabled={contador ===0} onClick={()=>onAdd(contador)}>Comprar</Button>
        </div>
    )

}
export default ItemCount;