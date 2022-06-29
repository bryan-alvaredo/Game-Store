import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";


const PaymentForm = () => {
    const {gameCart, total, form, setForm} = useContext(CartContext);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const min = 1;
    const max = 1000;
    let [order, setOrder] = useState(0);

    const [isEnabled, setIsEnabled] = useState(false);
    const handleModal = () => setIsEnabled(!isEnabled);

    const handleSubmit = e => {
        e.preventDefault();
        setOrder(Math.floor((Math.random() * (max - min + 1)) + min));
    }

    return (
        <section className="paymentForm">
            <h2>Área de Pago</h2>
            <section className="purchaseInformation">
                <p className="purchasedCheck">Controle su compra</p>
                <section className="paymentList">
                    {gameCart.map((game) => (
                        <article game={game} className="purchasedProduct">
                            <p className="titlePurchase">{game.title}</p>
                            <article>
                                <p>Cant.:{game.buy}</p>
                                <p>Subtotal: ${game.price * game.buy}</p>
                            </article>
                        </article>
                    ))}
                </section>
                <p className="totalPurchase">Total: <span>${total}</span></p>
            </section>
            <h2>Formulario Comprador</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">Nombre: </label>
                <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} />
                <label htmlFor="lastName">Apellido: </label>
                <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} />
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
                <label htmlFor="email">Teléfono: </label>
                <input type="text" id="phone" name="phone" value={form.phone} onChange={handleChange} />
                <input type="submit" value="CONFIRMAR COMPRA" className="buttonSubmit" onClick={handleModal}/>
            </form>
            <Link to="/" className="exitButton"><i className="fa-solid fa-circle-arrow-left"></i> Salir</Link>
            <Fade>
            <section className={`modal  ${isEnabled && "isEnabled"}`}>
                <Fade top>
                <section className="modalContainer">
                    <i className="fa-solid fa-circle-xmark" onClick={handleModal}></i>
                    <h2>Orden de compra Nº {order}</h2>
                    <section className="purchasedList">
                        <p className="clientInformationTitle">Cliente:</p>
                        <section className="client">
                            <article className="clientTitles">
                                <p>Nombre</p>
                                <p>Apellido</p>
                                <p>Email</p>
                                <p>Teléfono</p>
                            </article>
                            <article className="clientInformation">
                                <p>{form.firstName}</p>
                                <p>{form.lastName}</p>
                                <p>{form.email}</p>
                                <p>{form.phone}</p>
                            </article>
                        </section>
                        <article className="orderTitles">
                            <p>Artículo</p>
                            <p>Precio</p>
                        </article>
                        <section className="productDetailsList">
                        {gameCart.map((game) => (
                            <article game={game} className="productDetails">
                                <p className="productName">{game.title}</p>
                                <article>
                                    <p>Cant.:{game.buy}</p>
                                    <p>Subtotal: ${game.price * game.buy}</p>
                                </article>
                            </article>
                        ))}
                        </section>
                        <p className="orderTotal">Total: <span>${total}</span></p>
                    </section>
                    <p className="bye">¡Gracias por su compra!</p>
                </section>
                </Fade>
            </section>
            </Fade>
        </section>
    )
}

export default PaymentForm;