import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Products = ({products}) => {
    const [currentProducts, setCurrentProducts] = useState([]);
    
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

    useEffect(() => {
        let filteredProducts = [...products]
        if(mensClothingFilter === true) {
            const mensClothingItems = filteredProducts.filter(element => element.category === "men's clothing");
            setCurrentProducts(prevElements => [...prevElements, ...mensClothingItems]);
        }
        if(womensClothingFilter === true) {
            const womensClothingItems = filteredProducts.filter(element => element.category === "women's clothing");
            setCurrentProducts(prevElements => [...prevElements, ...womensClothingItems]);
        }
        if(jewelleryFilter === true) {
            const jewelleryItems = filteredProducts.filter(element => element.category === "jewelery");
            setCurrentProducts(prevElements => [...prevElements, ...jewelleryItems]);
        }
        if(electronicsFilter === true) {
            const electronicsItems = filteredProducts.filter(element => element.category === "electronics");
            setCurrentProducts(prevElements => [...prevElements, ...electronicsItems]);
        }
        
        if(mensClothingFilter === false && womensClothingFilter === false && jewelleryFilter === false && electronicsFilter === false) {
            setCurrentProducts(prevElements => [...prevElements, ...products]);
        }

        return () => {
            setCurrentProducts([]);
        }
    }, [mensClothingFilter, womensClothingFilter, jewelleryFilter, electronicsFilter, products]);

    console.log(currentProducts);
    return (
        <div className="products">
            <button onClick={switchMensClothingFilter}>Add mens clothing filter</button>
            <button onClick={switchWomensClothingFitler}>Add womens clothing filter</button>
            <button onClick={switchJewelleryFilter}>Add jewellery filter</button>
            <button onClick={switchElectronicsFilter}>Add electronics filter</button>

            {currentProducts.map(element => (
                <div key={element.id}>
                    Name : {element.title}
                    Category : {element.category}
                </div>
            ))}
        </div>
    );
}

export default Products;

Products.propTypes = {
    products : PropTypes.array
};