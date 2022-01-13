import { useState, React, createContext, useContext } from "react";

const CartContext = createContext([]);

export const UseCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [CartList, SetCartList] = useState([]);

  const AddItem = (item, contador) => {

    const index = CartList.findIndex((i) => i.item.id === item.id);

    if (index > -1) {

      const oldQy = CartList[index].contador;

      CartList.splice(index, 1);

      SetCartList([...CartList, { item, contador: contador + oldQy }]);

    } else {

      SetCartList([...CartList, { item, contador }]);
    }
  };



  const DelItem = (id) => {
    const items = CartList.filter((i) => i.item.id !== id);
    SetCartList(items);
  };


  const EmptyCart = () => {
    SetCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        CartList,
        AddItem,
        EmptyCart,
        DelItem,
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;