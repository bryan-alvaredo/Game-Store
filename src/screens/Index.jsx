import Product from "../components/Product";
import games from "../data/games.json";
import Fade from "react-reveal/Fade";

const Index = () => (
    <section className="productList">
        <Fade bottom>
        {games.map((game, i) => (
            <Product key={i} {...game} />
        ))}
        </Fade>
    </section>
);
export default Index;