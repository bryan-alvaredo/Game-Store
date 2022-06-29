import Product from "../components/Product";
import games from "../data/games.json";
import Fade from "react-reveal/Fade";

const Index = () => {

    return (
        <section className="productList">
            <Fade top>
                {games.map((game) => (
                    <Product key={game.id} game={game}></Product>
                ))}
            </Fade>
        </section>
    )
};
export default Index;