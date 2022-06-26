import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Product = ({key, game}) => {

    const {gameCart, setGameCart} = useContext();

    const [hovereado, setHovereado] = useState(false)
    const handleHovereado = () => setHovereado(!hovereado)

    let [count, setCount] = useState(1)

    let truncatedText = game.description
    if (game.description.length > 227) {
        truncatedText = game.description.slice(0, 227)
        truncatedText = truncatedText.concat("...")
    }

    const addToCart = (game) => {
        setGameCart([...gameCart,game])
    }

    return (
        <article className="productElement" id={key}>
            <img onClick={handleHovereado} className="flipIcon" src="./img/FlipGris.png" alt="show more icon" />
            <section className="coverAndTextForRotate">
                <article className="container">
                    <Link to={`/product/${game.tittle}`}>
                        <img className={`cover  ${hovereado && "hovereado"}`} src={game.cover} alt={game.tittle} />
                    </Link>
                    <section className={`cover  ${!hovereado && "hovereado"}`}>
                        <Link to={`/product/${game.tittle}`}>
                            <h2 className="gameTittle">{game.tittle}</h2>
                        </Link>
                        <section className="information">
                            <section className="informationTittle">
                                <p><strong>Plataforma:</strong></p>
                                <p><strong>Categoría:</strong></p>
                                <p><strong>Formato:</strong></p>
                            </section>
                            <section className="informationDetails">
                                <p>{game.platform}</p>
                                <p>{game.category}</p>
                                <p>{game.format}</p>
                            </section>
                        </section>
                        <p className="descriptionTittle"><strong>Sinopsis:</strong></p>
                        <p className="description">
                            {truncatedText}
                        </p>
                    </section>
                </article>
            </section>
            
            <section className="addCartSection">
                <section>
                    <p className="priceCard">${game.price}</p>
                    <article className="countSelect">
                        <button className="countButton" onClick={() => ((count > 1) ? setCount(count - 1) : setCount(count=1))}>-</button>
                        <p>{count}</p>
                        <button className="countButton" onClick={() => setCount(count + 1)}>+</button>
                    </article>
                </section>
                <button onClick={() => addToCart({...game, compra:count})} className="addButton">AGREGAR <i className="fa-solid fa-cart-shopping"></i></button>
            </section>
        </article>
    );
}
export default Product;