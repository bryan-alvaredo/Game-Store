import { useContext} from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Cart = () => {
    const {gameCart, setGameCart} = useContext(CartContext);
    let {total, setTotal} = useContext(CartContext);

    const deleteGame = (game) => {
        let newCart = gameCart.filter(comparator => comparator !== game);
        setGameCart([...newCart])
        setTotal(total = total-(game.buy * game.price))
    }

    return (
        <div className="shoppingList">
            {(gameCart[0] === undefined) ? (
                <>
                <h2 className="cartTitle">Carrito Vacío</h2>
                <Link to="/" className="backButton"><i className="fa-solid fa-circle-arrow-left"></i> ATRÁS</Link>
                </>
            ) : (
            <>
            <h2 className="cartTitle">Artículos en Carrito</h2>
            {gameCart.map((game) => (
                <Fade top>
                    <article game={game} className="mapProduct">
                        <img src={game.cover} alt={game.title} />
                        <article className="table">
                            <article className="info1">
                                <article>
                                    <p className="gameProdTitle">{game.title}</p>
                                    <p>{game.platform}</p>
                                    <p>Cantidad: {game.buy}</p>
                                </article>
                                <i className="fa-solid fa-trash-can" onClick={() => deleteGame((game))}></i>
                            </article>
                            <p className="purchaseBuy">${(game.price * game.buy)}</p>
                        </article>
                    </article>
                </Fade>
            ))}
            <section>
                <p className="totalPrice">Total: <span>${total}</span></p>
                <section>
                <Link to="/" className="backButtonLarge"><i className="fa-solid fa-circle-arrow-left"></i> Seguir Comprando</Link>
                <Link to="/paymentForm"><button className="buyButton">PAGAR</button></Link>
                </section>
            </section>
            </>
            )}
        </div>
    );
};

export default Cart;