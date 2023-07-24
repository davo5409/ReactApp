import { useEffect, useState } from 'react';
import './App.css';

const empanadasBase = [
    {id:1, producto: "jamonyqueso", precio: 200, stock:36},
    {id:2, producto: "carne", precio: 220, stock:48},
    {id:3, prodcuto: "humita", precio: 180, stock:24},
    {id:4, producto: "pollo", precio: 190, stock:24},
    {id:5, producto: "verdura", precio: 180, stock: 24},
    {id:6, producto: "roquefort", precio: 250, stock:36}

]

//MAP

console.log(empanadasBase.map(emp => emp.id));

console.log(empanadasBase.map(emp =>emp.stock).join('-'));



const task = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve (empanadasBase);
    }, 4000)
    
})




//PROMISE

function Empanadas() {
    const [empanadas, setEmpanadas]= useState([]);
      
    useEffect (() => {
      task.then(empanadasProm => setEmpanadas(empanadasProm));
    

    }, []);


    return(
        
       <div>

Cantidad de empanadas: {empanadas.length}

      </div>       
     
 );
} 
    
export default Empanadas






























