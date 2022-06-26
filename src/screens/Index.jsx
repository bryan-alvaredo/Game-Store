import Product from "../components/Product";
import games from "../data/games.json";
import Fade from "react-reveal/Fade";
import { CartProvider } from "../context/CartContext";

const Index = () => {

    console.log(gameCart)

    return (
        <section className="productList">
            <CartProvider>
                <Fade top>
                    {games.map((game) => (
                        <Product key={game.id} game={game}></Product>
                    ))}
                </Fade>
            </CartProvider>
        </section>
    )
};
export default Index;