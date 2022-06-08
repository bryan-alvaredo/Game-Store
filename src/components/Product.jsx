import { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({cover, tittle, platform, category, format, description, price, id}) => {

    const [hovereado, setHovereado] = useState(false)
    const handleHovereado = () => setHovereado(!hovereado)

    let truncatedText = description
    if (description.length > 227) {
        truncatedText = description.slice(0, 227)
        truncatedText = truncatedText.concat("...")
    }

    return (
        <article className="productElement" id={id}>
            <img onClick={handleHovereado} className="flipIcon" src="./img/FlipGris.png" alt="show more icon" />
            <section className="coverAndTextForRotate">
                <article className="container">
                    <Link to={`/product/${tittle}`}>
                        <img className={`cover  ${hovereado && "hovereado"}`} src={cover} alt={tittle} />
                    </Link>
                    <section className={`cover  ${!hovereado && "hovereado"}`}>
                        <Link to={`/product/${tittle}`}>
                            <h2 className="gameTittle">{tittle}</h2>
                        </Link>
                        <section className="information">
                            <section className="informationTittle">
                                <p><strong>Plataforma:</strong></p>
                                <p><strong>Categoría:</strong></p>
                                <p><strong>Formato:</strong></p>
                            </section>
                            <section className="informationDetails">
                                <p>{platform}</p>
                                <p>{category}</p>
                                <p>{format}</p>
                            </section>
                        </section>
                        <p className="descriptionTittle"><strong>Descripción:</strong></p>
                        <p className="description">
                            {truncatedText}
                        </p>
                    </section>
                </article>
            </section>
            
            <section className="addCartSection">
                <section>
                    <p className="priceCard">${price}</p>
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
                </section>
                <button className="addButton">AGREGAR <i className="fa-solid fa-cart-shopping"></i></button>
            </section>
        </article>
    );
}
export default Product;