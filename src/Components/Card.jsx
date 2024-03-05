import PropTypes from "prop-types";
import "../styles/Card.css"

const Cart = ({element, addToCart, addToWishlist, openProduct}) => {
    return (
        <div className="product-card">
            <img src={element.image} alt={element.title} className="product-img" onClick={() => openProduct(element)}/>
            <div className="product-content">
                <div className="product-card-top">
                    <div className="product-title">
                        <span className="typo-medium">{element.title}</span>
                    </div>
                    <div className="product-price">
                        <span className="typo-medium">
                            ${element.price}
                        </span>
                    </div>
                </div>
                <div className="button-group">
                    <button className="product-add btn" onClick={() => addToCart(element)}>
                        <span className="typo-medium">Add To Cart</span>
                    </button>
                    <button className="product-wishlist btn" onClick={() => addToWishlist(element)}>
                        <span className="typo-medium">Wishlist</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;

Cart.propTypes = {
    element : PropTypes.object,
    addToCart : PropTypes.func,
    addToWishlist : PropTypes.func,
    openProduct : PropTypes.func
};