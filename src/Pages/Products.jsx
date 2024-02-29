import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Products = ({products}) => {
    const [currentProducts, setCurrentProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);
    const [maxProducts, setMaxProducts] = useState();

    
    const [mensClothingFilter, setMensClothingFilter] = useState(false);
    const [womensClothingFilter, setWomensClothingFilter] = useState(false);
    const [ jewelleryFilter, setJewelleryFilter] = useState(false);
    const [electronicsFilter, setElectronicsFilter] = useState(false);

    const [sort, setSort] = useState(0);

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
                return unsortedElements
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
        <div className="products">
            <button onClick={switchMensClothingFilter}>Add mens clothing filter</button>
            <button onClick={switchWomensClothingFitler}>Add womens clothing filter</button>
            <button onClick={switchJewelleryFilter}>Add jewellery filter</button>
            <button onClick={switchElectronicsFilter}>Add electronics filter</button>
            <button onClick={switchSortHighToLow}>Add sort high to low</button>
            <button onClick={switchSortLowToHigh}>Add sort low to high</button>

            {currentProducts.map(element => (
                <div key={element.id}> 
                    Name : {element.title} ||
                    Category : {element.category} ||
                    Price : {element.price}
                </div>
            ))}

            <button onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
            <button onClick={nextPage} disabled={currentPage * productsPerPage > maxProducts-1}>Next Page</button>
        </div>
    );
}

export default Products;

Products.propTypes = {
    products : PropTypes.array
};