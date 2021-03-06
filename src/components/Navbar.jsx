/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <img className="imgProfileDesktop" src="./img/imgProfile.png" alt="foto de perfil" />
            <input type="checkbox" id="toggler" />
            <label htmlFor="toggler"><i className="fa-solid fa-bars"></i><i className="fa-solid fa-xmark"></i></label>
            <input type="text" name="search" id="search" placeholder="¿Qué estás buscando?..."/>
            <Link to={`/cart`}><i className="fa-solid fa-cart-shopping"></i></Link>
            <section className="menu">
                <article className="profile">
                    <p>Juan Lopez</p>
                    <img src="./img/imgProfile.png" alt="foto de perfil" />
                </article>
                <hr />
                <ul className="menuList">
                    <li><Link to={`/*`}>Inicio</Link></li>
                    <li><a href="#">Ofertas</a></li>
                    <li>
                        <details>
                            <summary>Categoría</summary>
                            <ul className="subMenu">
                                <li>Aventura</li>
                                <li>Lucha</li>
                                <li>Deportes</li>
                                <li>Carreras</li>
                                <li>Terror</li>
                                <li>Supervivencia</li>
                                <li>Shooter</li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Plataforma</summary>
                            <ul className="subMenu">
                                <li>PlayStation 1</li>
                                <li>PlayStation 2</li>
                                <li>PlayStation Portátil</li>
                                <li>PlayStation 3</li>
                                <li>PlayStation Vita</li>
                                <li>PlayStation 4</li>
                                <li>PlayStation 5</li>
                                <li>Xbox</li>
                                <li>Xbox 360</li>
                                <li>Xbox One</li>
                                <li>Xbox Series X</li>
                                <li>Xbox Series S</li>
                                <li>Nintendo 64</li>
                                <li>Nintendo Wii</li>
                                <li>Nintendo Wii U</li>
                                <li>Nintendo Switch</li>
                                <li>PC</li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Ordenar</summary>
                            <ul className="subMenu">
                                <li>A-Z</li>
                                <li>Z-A</li>
                                <li>Menor Precio</li>
                                <li>Mayor Precio</li>
                                <li>Más reciente</li>
                                <li>Más antiguo</li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </section>
        </nav>
    );
};
export default Navbar;