import React from 'react'
import { UseCartContext } from './CartContext'
function CartItem({item, contador}) {
    const { DelItem } = UseCartContext();
    const { title, description, price, image, id} = item;

    return (
        <div>
            <h4>{title}</h4>
            <img style={{width:'60px', height:'60px'}} src={image}/>
            <h4>{contador}</h4>
            <button onClick={() =>DelItem(id) }> borrar</button>
        </div>
    )
}

export default CartItem
