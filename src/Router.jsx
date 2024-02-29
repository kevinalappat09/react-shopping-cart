import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import ErrorElement from "./Pages/ErrorElement";

import { useEffect, useState } from "react";

const Router = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            const url = `https://fakestoreapi.com/products`;
            try {
                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error("Network response error");
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch(err) {
                console.log(err);
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    const router = createBrowserRouter([
        {
            path : "/",
            element : <Home />,
            errorElement : <ErrorElement />
        },
        {
            path : "products/",
            element : <Products products={products}/>
        },
        {
            path : "cart/",
            element : <Cart />
        },
        {
            path : "wishlist/",
            element : <Wishlist />
        }
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router;