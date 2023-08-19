import React from 'react';
import Item from './Item';

const ItemList = ({empanadas}) => {
    return (
        <div className='d-flex justify-content-between align-items-center flex-wrap'> 
        {empanadas.map((prod)=> <Item Key={prod.id} prod={prod}/>)}
         </div>
    )
}

export default ItemList;