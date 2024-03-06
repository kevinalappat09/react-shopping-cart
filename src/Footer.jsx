import { Link } from "react-router-dom"
import "./styles/Footer.css"

const Footer = () => {
    return (
        <footer className="foot">
            <div className="left">
                <span className="typo-heading-2">
                    Project made by Kevin Alappat.
                </span>
                <span className="typo-heading-2">
                    Github : https://github.com/kevinalappat09
                </span>
            </div>
            <div className="right">
                <div className="link-group">
                    <Link className="footer-link nav-link" to={"/"}>
                        <span className="typo-medium">
                            Home
                        </span>
                    </Link>
                    <Link className="footer-link nav-link" to={"/products"}>
                        <span className="typo-medium">
                            Products
                        </span>
                    </Link>
                    <Link className="footer-link nav-link" to={"/cart"}>
                        <span className="typo-medium">
                            Cart
                        </span>
                    </Link>
                    <Link className="footer-link nav-link" to={"/wishlist"}>
                        <span className="typo-medium">
                            Wishlist
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;