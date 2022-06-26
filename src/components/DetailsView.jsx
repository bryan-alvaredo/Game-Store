import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import games from "../data/games.json";
import Fade from "react-reveal/Fade";

const DetailsView = ({key, game, gameCart, setGameCart}) => {
    
    const { tittle } = useParams();

    const [gameArt, setGameArt] = useState();

    useEffect(() => {
        const gameArtToSet = games.find(
            (gameArt) => gameArt.tittle === tittle
        );

        setGameArt(gameArtToSet);
    }, [tittle]);

    let [count, setCount] = useState(1)

    const addToCart = (gameArt) => {
        setGameCart([...gameCart,gameArt])
    }

    return (
        <main>
            {!gameArt ? (
                <strong>Cargando...</strong>
            ) : (
                <>
                    <Fade top cascade>
                    <img className="banner" src={gameArt.banner} alt={gameArt.tittle}/>
                    <h1>{gameArt.tittle}</h1>
                    <section className="buyProduct">
                        <img src={gameArt.cover} alt={gameArt.tittle} />
                        <section className="addProduct">
                            <p><strong>${gameArt.price}</strong></p>
                            <article className="countSelect">
                                <button className="countButton" onClick={() => ((count > 1) ? setCount(count - 1) : setCount(count=1))}>-</button>
                                <p>{count}</p>
                                <button className="countButton" onClick={() => setCount(count + 1)}>+</button>
                            </article>
                            <button className="addProductButton" onClick={() => addToCart({...gameArt, compra:count})}>AGREGAR <i className="fa-solid fa-cart-shopping"></i></button>
                        </section>
                    </section>
                    <section className="infoBox">
                        <section className="tittles">
                            <p><strong>Plataforma</strong></p>
                            <p><strong>Categoría</strong></p>
                            <p><strong>Formato</strong></p>
                        </section>
                        <section className="info">
                            <p>{gameArt.platform}</p>
                            <p>{gameArt.category}</p>
                            <p>{gameArt.format}</p>
                        </section>
                    </section>
                    <p className="synopsis"><strong>Sinopsis</strong></p>
                    <p className="description">
                        {gameArt.description}
                    </p>
                    </Fade>
                    <Link to="/" className="backButton"><i className="fa-solid fa-circle-arrow-left"></i> ATRÁS</Link>
                </>
            )}
        </main>
    );
};
export default DetailsView