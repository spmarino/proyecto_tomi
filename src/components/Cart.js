import React from 'react'
import { UseCartContext } from './CartContext'
import CartItem from './CartItem'

function Cart() {
    const {CartList, EmptyCart} = UseCartContext();
    
    if(CartList.length < 1){ 
        return(<h2>No tienes productos agregados</h2>)
}else{ 
    return(
        <>  {CartList.map((item) => (
            <CartItem
              key={item.item.id}
              item={item.item}
              contador={item.contador}
            />))}

<button onClick={EmptyCart}> Vaciar carrito</button>
            </>
    )
}
}

export default Cart
