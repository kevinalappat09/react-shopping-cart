import Modal from "react-modal";
import PropTypes from "prop-types"

const ProductSpecification = ({product, modalOpen, setModalClose}) => {
    return (
        <Modal isOpen={modalOpen} onRequestClose={setModalClose} ariaHideApp={false}> 
            {product.title} ||
            {product.description} ||
            {product.price} ||
            {product.image}

            <button onClick={setModalClose}>Close</button>
        </Modal>
    )
}


ProductSpecification.propTypes = {
    product : PropTypes.object,
    modalOpen : PropTypes.bool,
    setModalClose : PropTypes.func
}

export default ProductSpecification;