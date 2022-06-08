import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import games from "../data/games.json";

const DetailsView = () => {
    
    const { tittle } = useParams();

    const [game, setGame] = useState();

    useEffect(() => {
        const gameToSet = games.find(
            (game) => game.tittle === tittle
        );

        setGame(gameToSet);
    }, [tittle]);

    return (
        <main>
            {!game ? (
                <strong>Cargando...</strong>
            ) : (
                <>
                    <img className="banner" src={game.banner} alt={game.tittle}/>
                    <h1>{game.tittle}</h1>
                    <section className="buyProduct">
                        <img src={game.cover} alt={game.tittle} />
                        <section className="addProduct">
                            <p><strong>${game.price}</strong></p>
                            <select className="countSelect" name="count" id="count">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <button className="addProductButton">AGREGAR <i className="fa-solid fa-cart-shopping"></i></button>
                        </section>
                    </section>
                    <section className="infoBox">
                        <section className="tittles">
                            <p><strong>Plataforma</strong></p>
                            <p><strong>Categoría</strong></p>
                            <p><strong>Formato</strong></p>
                        </section>
                        <section className="info">
                            <p>{game.platform}</p>
                            <p>{game.category}</p>
                            <p>{game.format}</p>
                        </section>
                    </section>
                    <p className="synopsis"><strong>Sinopsis</strong></p>
                    <p className="description">
                        {game.description}
                    </p>
                    <Link to="/" className="backButton"><i className="fa-solid fa-circle-arrow-left"></i> ATRÁS</Link>
                </>
            )}
        </main>
    );
};
export default DetailsView