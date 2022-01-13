// CONTADOR DE PRODUCTOS
import { useState } from "react";

const ItemCount = ({ stock , initial ,OnAdd}) => {
    
    const [contador, setContador] = useState(initial);

    const aumentarCant = () =>{
        if (contador < stock) setContador(contador + initial);
            console.log("Has Aumentado la cantidad");
    }

    const disminuirCant = () =>{
        if (contador > initial) setContador(contador - initial);
            console.log("Has Disminuido la cantidad");
    }

    const AddtoCart = () => {
        OnAdd(contador);
       
      };
    

    return(
        <div className="contador">
            <p>Cantidad: {contador}</p>

            <button onClick={aumentarCant}>Mas</button>
            <button onClick={disminuirCant}>Menos</button>
            <button onClick={AddtoCart}>Agregar al Carrito</button>
        </div>
    );
}


export default ItemCount;