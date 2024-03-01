import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav>
            <Link to={"/products"}>Products</Link>
            <Link to={"/cart"}>Cart</Link>
            <Link to={"/wishlist"}>Wishlist</Link>
        </nav>
    )
}

export default Nav;