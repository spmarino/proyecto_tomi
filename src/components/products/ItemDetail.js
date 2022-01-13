import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { UseCartContext } from '../CartContext'

const ItemDetail = ({item}) => {
    const {title, description, price, image} = item;

    
    // INTEGRAR ESTOS VALORES AL PRODUCTO QUE SE CREE EN LA BASE DE DATOS PARA TRAERLOS COMO PROPS.
    const initial = 1;
    const stock = 18;
    const finalPrice = price ;
    
    // Estados
   // const [cant, setCant] = useState(initial)

  // const traerCant = (num) => {
    //    setCant(num)
    //}

  //  const addToCart = () => {
      //  console.log(`has guardado ${cant} '${title}' en el carrito`)
   // }


   const { AddItem } = UseCartContext();

   const OnAdd = (contador) => {

    AddItem(item, contador);

   };

    return (
        <div className="vistaProd">
            <h2>{title} </h2><span>Stock: {stock}</span>
            <img src={image} alt="foto Del Producto detalles"/>
            <ItemCount initial={initial} stock={stock} OnAdd={OnAdd}/>
            <p>${finalPrice}</p>
            <p>Sobre este Producto : <br/>{description}</p>

            
        </div>
    );

}

export default ItemDetail;