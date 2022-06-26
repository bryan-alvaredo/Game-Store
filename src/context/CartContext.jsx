import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [gameCart, setGameCart] = useState([]);

    const data = {gameCart, setGameCart};

    return (
        <CartContext.Provider value={data}>{children}</CartContext.Provider>
    )
}

export {CartProvider};
export default CartContext;