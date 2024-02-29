import { useEffect, useState } from "react";

const Products = (products) => {
    const [currentProducts, setCurrentProducts] = useState([]);
    
    const [mensClothingFilter, setMensClothingFilter] = useState(0);
    const [womensClothingFilter, setWomensClothingFilter] = useState(0);
    const [ jewelleryFilter, setJewelleryFilter] = useState(0);
    const [electronicsFilter, setElectronicsFilter] = useState(0);

    const [sort, setSort] = useState(0);

    const addMensClothingFilter = () => {
        setFilters(currentState => [...currentState, "mens"]);
    }

    useEffect(() => {
        // set the current products based on the mens clothing, womens clothing and other filters and sorts.
    })

    console.log(products);
    return (
        <div className="products">
            <button onClick={addMensClothingFilter}>Add mens clothing filter</button>
            <button>Add womens clothing filter</button>
            <button>Add jewellery filter</button>
            <button>Add electronics filter</button>
        </div>
    );
}

export default Products;