import PropTypes from "prop-types";
import Nav from "../Nav";

import "../styles/Wishlist.css"

const Wishlist = ({wishlist, removeFromWishlist, cartCount, wishlistCount}) => {
    return (
        <>
            <Nav cartCount={cartCount} wishlistCount={wishlistCount}/>
            <main className="wishlist">
                <div className="wishlist-container">
                    <div className="wishlist-heading">
                        <span className="typo-heading-2">
                            Wishlist : 
                        </span>
                    </div>
                    <div className="wishlist-accordion">
                        {
                            wishlist.map(element => (
                                <div className="wishlist-item" key={element.id}>
                                    <img src={element.imageURL} alt="" className="wishlist-img" />
                                    <div className="wishlist-item-info">
                                        <span className="typo-medium">{element.title}</span>

                                    </div> 
                                    <button onClick={() => removeFromWishlist(element.id)} className="remove-wish">
                                        <span className="typo-medium">Remove</span>
                                    </button>                               
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
        </>
    );
}

export default Wishlist;

Wishlist.propTypes = {
    wishlist : PropTypes.array,
    removeFromWishlist : PropTypes.func,
    cartCount : PropTypes.number,
    wishlistCount : PropTypes.number
}