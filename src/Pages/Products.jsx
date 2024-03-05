import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductSpecification from "./ProductSpecification";

import Checkbox from "../Components/Checkbox";

import Nav from "../Nav";

import "../styles/Products.css"
import Cart from "../Components/Card";

const Products = ({products, addToCart, addToWishlist, cartCount, wishlistCount}) => {
    const [currentProducts, setCurrentProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);
    const [maxProducts, setMaxProducts] = useState();

    
    const [mensClothingFilter, setMensClothingFilter] = useState(false);
    const [womensClothingFilter, setWomensClothingFilter] = useState(false);
    const [ jewelleryFilter, setJewelleryFilter] = useState(false);
    const [electronicsFilter, setElectronicsFilter] = useState(false);

    const [sort, setSort] = useState(0);

    const [productSpecificationModalOpen, setProductSpecificationModalOpen] = useState(false);
    const [productToSpecify, setProductToSpecify] = useState({});

    const switchMensClothingFilter = () => {
        setMensClothingFilter(!mensClothingFilter);
    }

    const switchWomensClothingFitler = () => {
        setWomensClothingFilter(!womensClothingFilter);
    }

    const switchJewelleryFilter = () => {
        setJewelleryFilter(!jewelleryFilter);
    }

    const switchElectronicsFilter = () => {
        setElectronicsFilter(!electronicsFilter);
    }

    const switchSortHighToLow = () => {
        if(sort === 1) {
            setSort(0);
        } else {
            setSort(1);
        }
    }

    const switchSortLowToHigh = () => {
        if(sort === -1) {
            setSort(0);
        } else {
            setSort(-1);
        }
    }

    const prevPage = () => {
        setCurrentPage(currentPage => currentPage-1);
    }

    const nextPage = () => {
        setCurrentPage(currentPage => currentPage+1);
    }

    // opens the product specification modal with the required product
    const openProduct = (product) => {
        setProductToSpecify(product);
        setProductSpecificationModalOpen(true);
    }

    const closeProduct = () => {
        setProductSpecificationModalOpen(false);
    }

    useEffect(() => {

        const sortElements = (unsortedElements) => {
            if(sort === 1) {
                const unsortedProducts = unsortedElements;
                const sortedProducts = unsortedProducts.sort((a, b) => b.price - a.price);
                return sortedProducts;
            } 
            if(sort === -1) {
                const unsortedProducts = unsortedElements;
                const sortedProducts = unsortedProducts.sort((a, b) => a.price - b.price);
                return sortedProducts;
            } else {
                return unsortedElements;
            }
        }

        const applyPagination = (data) => {
            const indexOflLastProduct = currentPage * productsPerPage;
            const indexOfFirstProduct = indexOflLastProduct - productsPerPage;
            return data.slice(indexOfFirstProduct, indexOflLastProduct);
        };

        let updatedProducts = [];

        if(mensClothingFilter === true) {
            updatedProducts = [...updatedProducts, ...(products.filter(element => element.category === "men's clothing"))];
            
        }
        if(womensClothingFilter === true) {
            updatedProducts = [...updatedProducts, ...(products.filter(element => element.category === "women's clothing"))] ;
        }
        if(jewelleryFilter === true) {
            updatedProducts = [...updatedProducts, ...(products.filter(element => element.category === "jewelery"))];
        }
        if(electronicsFilter === true) {
            updatedProducts = [...updatedProducts, ...(products.filter(element => element.category === "electronics"))];
        }
        
        if(mensClothingFilter === false && womensClothingFilter === false && jewelleryFilter === false && electronicsFilter === false) {
            const sortedElements = sortElements(products);
            setMaxProducts(products.length);
            const paginatedData = applyPagination(sortedElements);
            setCurrentProducts(prevElements => [...prevElements, ...paginatedData]);
        } else {
            const sortedElements = sortElements(updatedProducts);
            setMaxProducts(updatedProducts.length);
            const paginatedData = applyPagination(sortedElements);
            setCurrentProducts(prevElements => [...prevElements, ...paginatedData]);
        }

        
        return () => {
            setCurrentProducts([]);
        }
    }, [mensClothingFilter, womensClothingFilter, jewelleryFilter, electronicsFilter, sort, products, currentPage, productsPerPage]);

    return (
        <>
            <Nav cartCount={cartCount} wishlistCount={wishlistCount}/>  
            <main className="products">
                <div className="sidebar">
                    <div className="tag-filter-container">
                        <h1 className="typo-heading-3">Filters</h1>
                        <div className="tag-filter">
                            <Checkbox changeToRun={switchMensClothingFilter} labelText={"Men's Clothing"} name={"mens-filter-check"} />
                            <Checkbox changeToRun={switchWomensClothingFitler} labelText={"Women's Clothing"} name={"womens-filter-check"} />
                            <Checkbox changeToRun={switchJewelleryFilter} labelText={"Jewellery"} name={"jewellery-filter-check"} />
                            <Checkbox changeToRun={switchElectronicsFilter} labelText={"Electronics"} name={"electronics-filter-check"} />
                        </div>
                    </div>
                    <div className="sort-container">
                        <h1 className="typo-heading-3">Sort</h1>
                        <div className="sort">
                            <p className="typo-para-regular sort-selector" onClick={switchSortHighToLow}>Sort Price High To Low</p>
                            <p className="typo-para-regular sort-selector" onClick={switchSortLowToHigh}>Sort Price Low To High</p>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="top-filter-tray">
                        <div className="tag-filter-container">
                            <div className="top-tag-filter">
                                <Checkbox changeToRun={switchMensClothingFilter} labelText={"Men's Clothing"} name={"mens-filter-check"} />
                                <Checkbox changeToRun={switchWomensClothingFitler} labelText={"Women's Clothing"} name={"womens-filter-check"} />
                                <Checkbox changeToRun={switchJewelleryFilter} labelText={"Jewellery"} name={"jewellery-filter-check"} />
                                <Checkbox changeToRun={switchElectronicsFilter} labelText={"Electronics"} name={"electronics-filter-check"} />
                            </div>
                        </div>
                        <div className="sort-container">
                            <div className="top-sort">
                                <p className="typo-para-regular sort-selector" onClick={switchSortHighToLow}>Sort Price High To Low</p>
                                <p className="typo-para-regular sort-selector" onClick={switchSortLowToHigh}>Sort Price Low To High</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-display-container">
                        <ProductSpecification product={productToSpecify} modalOpen={productSpecificationModalOpen} setModalClose={closeProduct} addToCart={addToCart}/> 
                        <div className="products-paginated">
                            {currentProducts.map(element => (
                                <Cart 
                                    element={element} 
                                    key={element.id} 
                                    addToCart={addToCart} 
                                    addToWishlist={addToWishlist}
                                    openProduct={openProduct}
                                />
                            ))}
                        </div>
                        <div className="pagination-container">
                            {currentPage === 1 ? 
                                <button onClick={prevPage} className="pagination-btn disappear">
                                    <span className="typo-medium">{currentPage - 1}</span>
                                </button>
                                :
                                <button onClick={prevPage} className="pagination-btn"><span className="typo-medium">{currentPage - 1}</span></button>
                            }
                            <span className="typo-para-bold">
                                {currentPage}
                            </span>
                            {currentPage * productsPerPage > maxProducts-1 ?
                                <button onClick={nextPage} className="pagination-btn disappear">
                                    <span className="typo-medium">{currentPage+1}</span>
                                </button>
                                :
                                <button onClick={nextPage} className="pagination-btn">
                                    <span className="typo-medium">{currentPage+1}</span>
                                </button>
                            }
                        </div>
                    </div>
                </div>
                
            </main>
        </>
    );
}

export default Products;

Products.propTypes = {
    products : PropTypes.array,
    addToCart : PropTypes.func,
    addToWishlist : PropTypes.func,
    cartCount : PropTypes.number,
    wishlistCount : PropTypes.number
};