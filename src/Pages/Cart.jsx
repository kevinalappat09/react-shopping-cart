import PropTypes from "prop-types"
import Nav from "../Nav";
import { useEffect, useState } from "react";

const Cart = ({cart, removeFromCart, changeQuantityInCart, cartCount, wishlistCount}) => {

    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const cartValue = cart.reduce((accumulator, cartItem) => {return accumulator + (cartItem.price * cartItem.quantity)}, 0);
        const roundedCartTotal = cartValue.toFixed(2);
        setCartTotal(roundedCartTotal);

    }, [cart])

    return (
        <div className="cart">
            <Nav cartCount={cartCount} wishlistCount={wishlistCount}/>
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
            <div>
                cart Total {cartTotal}
            </div>
        </div>
    );
}

export default Cart;

Cart.propTypes = {
    cart : PropTypes.array,
    removeFromCart : PropTypes.func,
    changeQuantityInCart : PropTypes.func,
    cartCount : PropTypes.number,
    wishlistCount : PropTypes.number
};