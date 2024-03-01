import Nav from "../Nav";
import PropTypes from "prop-types"

const ErrorElement = ({cartCount, wishlistCount}) => {
    return (
        <div className="error">
            <Nav cartCount={cartCount} wishlistCount={wishlistCount}/>

            Error go back
        </div>
    );
}

export default ErrorElement;

ErrorElement.propTypes = {
    cartCount : PropTypes.number,
    wishlistCount : PropTypes.number
}