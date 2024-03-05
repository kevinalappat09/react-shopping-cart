import PropTypes from "prop-types";
import "../styles/Checkbox.css"

const Checkbox = ({labelText, changeToRun, name}) => {
    return (
    <label htmlFor={name} className="accent-check-label">
        <input type="checkbox" name={name} onChange={changeToRun}/>
        <span className="typo-para-light">{labelText}</span>
    </label>
    );
}

export default Checkbox;

Checkbox.propTypes = {
    changeToRun : PropTypes.func,
    labelText : PropTypes.string
}