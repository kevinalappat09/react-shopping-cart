import Nav from "../Nav";

import PropTypes from "prop-types"

const Home = ({cartCount, wishlistCount}) => {

    return (
        <div className="home">
            <Nav cartCount={cartCount} wishlistCount={wishlistCount}/>
        </div>
    );
}

export default Home;

Home.propTypes = {
    cartCount : PropTypes.number,
    wishlistCount : PropTypes.number
}