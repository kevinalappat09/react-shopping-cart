import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const Nav = ({cartCount, wishlistCount}) => {

    return (
        <nav>
            <Link to={"/products"}>Products </Link>
            <Link to={"/cart"}>Cart ({cartCount})</Link>
            <Link to={"/wishlist"}>Wishlist ({wishlistCount})</Link>
        </nav>
    )
}

export default Nav;

Nav.propTypes = {
    cartCount : PropTypes.number,
    wishlistCount : PropTypes.number
}