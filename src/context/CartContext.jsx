import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [gameCart, setGameCart] = useState([]);
    let [total, setTotal] = useState(0);
    const [form, setForm] = useState({});

    const data = {gameCart, setGameCart,
        total, setTotal, form, setForm};

    return (
        <CartContext.Provider value={data}>{children}</CartContext.Provider>
    )
}

export {CartProvider};
export default CartContext;