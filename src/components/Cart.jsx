import Swal from "sweetalert2";

const Cart = () => {
    console.log("click en el carrito")
    
    const alert = () => {
        Swal.fire({
            html: '<h1>ola perri</h1>'+
            '<p>en ke andamio?</p>'+
            '<p>aca la imagen</p>'+
            '<article>'+
                '<p>aca ba el precio</p>'+
                '<p>aca la cantidad</p>'+
            '</article>'
        })
    }

    return (
        <i className="fa-solid fa-cart-shopping" onClick={() => alert()}></i>
    );
};

export default Cart;