import Nav from "../Nav";
import Footer from "../Footer";
import "../styles/Home.css"
import { Link } from "react-router-dom";

import PropTypes from "prop-types"

const Home = ({
    cartCount, 
    wishlistCount
}) => {

    return (
        <div className="home">
            <Nav cartCount={cartCount} wishlistCount={wishlistCount}/>
            <main className="home-content">
                <Link to={"/products"} className="home-product-link">
                    <div className="home-product home-product-image" id="product-1">
                        <div className="home-product-heading">
                            <span className="typo-heading-1">
                                Latest Mens Clothing
                            </span>
                        </div>
                        <div className="home-product-desc">
                            <span className="typo-medium">
                                Step up your style game with our curated collection of premium mens clothing - where quality meets comfort and sophistication
                            </span>
                        </div>
                    </div>
                </Link>
                
                <Link to={"/products"} className="home-product-link">
                    <div className="home-product home-product-image" id="product-2">
                        <div className="home-product-heading">
                            <span className="typo-heading-1">
                                Latest Womens Clothing
                            </span>
                        </div>
                        <div className="home-product-desc">
                            <span className="typo-medium">
                            Discover elegance redefined with our exquisite range of womens fashion - where every outfit tells a story of grace and empowerment.
                            </span>
                        </div>
                    </div>
                </Link>

                <Link to={"/products"} className="home-product-link">
                    <div className="home-product home-product-image" id="product-3">
                        <div className="home-product-heading">
                            <span className="typo-heading-1">
                                Latest Electronics
                            </span>
                        </div>
                        <div className="home-product-desc">
                            <span className="typo-medium">
                            Stay ahead of the curve with cutting-edge electronics that redefine innovation and elevate your tech experience to new heights
                            </span>
                        </div>
                    </div>
                </Link>

                <Link to={"/products"} className="home-product-link">
                    <div className="home-product home-product-image" id="product-4">
                        <div className="home-product-heading">
                            <span className="typo-heading-1">
                                Handcrafted Jewellery
                            </span>
                        </div>
                        <div className="home-product-desc">
                            <span className="typo-medium">
                            Indulge in timeless elegance with our captivating selection of jewelry, crafted to adorn every moment with sparkle and sophistication
                            </span>
                        </div>
                    </div>
                </Link>
            </main>
            <Footer />
        </div>
    );
}

export default Home;

Home.propTypes = {
    cartCount : PropTypes.number,
    wishlistCount : PropTypes.number
}