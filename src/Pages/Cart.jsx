import PropTypes from "prop-types"
import Nav from "../Nav";

const Cart = ({cart}) => {

    console.log(cart);
    return (
        <div className="cart">
            <Nav />
            {cart.map(cartItem => (
                <div className="" key={cartItem.id}>
                    {cartItem.title}
                </div>
            ))}
        </div>
    );
}

export default Cart;

Cart.propTypes = {
    cart : PropTypes.array
};