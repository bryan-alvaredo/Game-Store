/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
    return (
        <nav>
            <input type="checkbox" id="toggler" />
            <label for="toggler"><i className="fa-solid fa-bars"></i><i class="fa-solid fa-xmark"></i></label>
            <input type="text" name="search" id="search" placeholder="¿Qué estás buscando?..."/>
            <i className="fa-solid fa-cart-shopping"></i>
            <section className="menu">
                <article className="profile">
                    <p>Juan Lopez</p>
                    <img src="./img/imgProfile.png" alt="foto de perfil" />
                </article>
                <hr />
                <ul className="menuList">
                    <li><a href="#">Inicio</a></li>
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