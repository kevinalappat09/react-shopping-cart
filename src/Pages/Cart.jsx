import PropTypes from "prop-types"
import Nav from "../Nav";

const Cart = ({cart, removeFromCart, changeQuantityInCart}) => {

    console.log(cart);
    return (
        <div className="cart">
            <Nav />
            {cart.map(cartItem => (
                <div className="" key={cartItem.id}>
                    {cartItem.title} || 
                    <button onClick={() => changeQuantityInCart(cartItem.id, 1)}>+</button> 
                    {cartItem.quantity} 
                    <button onClick={() => changeQuantityInCart(cartItem.id, -1)}>-</button> 
                    || 
                    <button onClick={() => removeFromCart(cartItem)}>Remove From Cart</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;

Cart.propTypes = {
    cart : PropTypes.array,
    removeFromCart : PropTypes.func,
    changeQuantityInCart : PropTypes.func
};