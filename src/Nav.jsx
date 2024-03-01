import { Link } from "react-router-dom";
import PropTypes from "prop-types"

import "./styles/Nav.css"

const Nav = ({cartCount, wishlistCount}) => {

    return (
        <nav>
            <div className="nav-brand">
                <Link className="nav-link" to={"/"}> 
                    <span className="typo-heading-1">
                        ShopIt
                    </span>
                </Link>
            </div>
            <div className="nav-right">
                <Link className="nav-link" to={"/products"}>
                    <span className="typo-medium">
                        Products
                    </span>
                </Link>
                <Link className="nav-link" to={"/cart"}>
                    <span className="typo-medium">
                        Cart ({cartCount})
                    </span>
                </Link>
                <Link className="nav-link" to={"/wishlist"}>
                    <span className="typo-medium">
                        Wishlist ({wishlistCount})
                    </span>
                </Link>
            </div>
        </nav>
    )
}

export default Nav;

Nav.propTypes = {
    cartCount : PropTypes.number,
    wishlistCount : PropTypes.number
}