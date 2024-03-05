import PropTypes from "prop-types"
import Nav from "../Nav";
import "../styles/Cart.css"
import { useEffect, useState } from "react";

const Cart = ({cart, removeFromCart, changeQuantityInCart, cartCount, wishlistCount}) => {

    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const cartValue = cart.reduce((accumulator, cartItem) => {return accumulator + (cartItem.price * cartItem.quantity)}, 0);
        const roundedCartTotal = cartValue.toFixed(2);
        setCartTotal(roundedCartTotal);

    }, [cart])

    return (
        <>
            <Nav cartCount={cartCount} wishlistCount={wishlistCount}/>
            <main className="cart">
                <div className="cart-container">
                    <div className="cart-heading">
                        <span className="typo-heading-1">Your Cart : </span>
                    </div>
                    <div className="cart-accordion">
                    {cart.map(cartItem => (
                        <div className="cart-accordion-item" key={cartItem.id}>
                            <img src={cartItem.imageURL} alt="" className="cart-item-image"/>
                            <div className="cart-item-info">
                                <span className="typo-medium">{cartItem.title}</span>
                                <div className="cart-item-quantity">
                                    <button onClick={() => changeQuantityInCart(cartItem.id, 1)} className="quantity-button">
                                        <span className="typo-heading-2">+</span>
                                    </button> 
                                    <span className="typo-heading-3">
                                        {cartItem.quantity}
                                    </span>
                                    <button onClick={() => changeQuantityInCart(cartItem.id, -1)} className="quantity-button">
                                        <span className="typo-heading-2">-</span>
                                    </button> 
                                </div>
                            </div> 
                            <button onClick={() => removeFromCart(cartItem)} className="remove-cart">
                                <span className="typo-medium">Remove</span>
                            </button>
                        </div>
                    ))}
                    </div>
                    <div className="cart-total">
                        <span className="typo-para-bold">Total : {cartTotal}</span>
                    </div>
                </div>
            </main>
        </>
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