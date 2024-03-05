import Modal from "react-modal";
import PropTypes from "prop-types"

import "../styles/ProductSpecification.css"

const ProductSpecification = ({product, modalOpen, setModalClose, addToCart}) => {
    return (
        <Modal className="product-modal" overlayClassName="product-modal-overlay" isOpen={modalOpen} onRequestClose={setModalClose} ariaHideApp={false}> 
            <div className="modal-content">
                <img src={product.image} alt={product.title} className="product-modal-image"/>
                <div className="right-content">
                    <div className="product-modal-info">
                        <div className="product-modal-main">
                            <div className="product-modal-title">
                                <span className="typo-heading-2">
                                    {product.title}
                                </span>
                            </div>
                            <div className="product-modal-price">
                                <span className="typo-heading-3">
                                ${product.price}
                                </span>
                            </div>
                        </div>
                        
                        <div className="product-modal-desc">
                            <span className="typo-para-light">
                                {product.description}
                            </span>
                        </div>
                    </div>
                    <div className="button-group">
                        <button onClick={() => addToCart(product)}>Add To Cart</button>
                        <button onClick={setModalClose}>Close</button>
                    </div>
                </div>
            </div>
            
        </Modal>
    )
}


ProductSpecification.propTypes = {
    product : PropTypes.object,
    modalOpen : PropTypes.bool,
    setModalClose : PropTypes.func,
    addToCart : PropTypes.func
}

export default ProductSpecification;