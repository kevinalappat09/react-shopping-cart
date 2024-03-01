import PropTypes from "prop-types";
import Nav from "../Nav";

const Wishlist = ({wishlist, removeFromWishlist}) => {
    return (
        <div className="wishlist">
            <Nav />
            {wishlist.map(element => (
                <div className="" key={element.id}>
                    {element.title}
                    <button onClick={() => removeFromWishlist(element.id)}>Remove from wishlist</button>
                </div>
            ))}
        </div>
    );
}

export default Wishlist;

Wishlist.propTypes = {
    wishlist : PropTypes.array,
    removeFromWishlist : PropTypes.func
}