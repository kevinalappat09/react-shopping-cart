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

    const [cart, setCart] = useState([]);

    const [wishlist, setWishlist] = useState([]);

    const changeQuantityInCart = (itemID, quantityChange) => {
        const getItemByID = cart.find(item => item.id === itemID);
        if(!getItemByID) {
            console.log("Item not found in cart");
            return;
        }
        if(getItemByID.quantity === 1 && quantityChange === -1) {
            removeFromCart(getItemByID);
            return;
        }
        const newItem = {
            "id" : getItemByID.id,
            "title" : getItemByID.title,
            "description" : getItemByID.description,
            "price" : getItemByID.price,
            "imageURL" : getItemByID.imageURL,
            "quantity" : getItemByID.quantity + quantityChange
        };
        const newCart = cart.filter(item => item.id !== itemID);
        newCart.push(newItem);
        
        setCart([...newCart]);
    }

    const addToCart = (item) => {
        const checkItem = cart.find(cartElement => cartElement.id === item.id);
        if(checkItem) {
            changeQuantityInCart(checkItem.id, 1);
        } else {
            const itemToAdd = {
                "id" : item.id,
                "title" : item.title,
                "description" : item.description,
                "price" : item.price,
                "imageURL" : item.image,
                "quantity" : 1
            };

            setCart(prevItems => [...prevItems, itemToAdd]);
        }
    }

    const removeFromCart = (item) => {
        const getRemoveElement = cart.find(element => element.id === item.id);
        if(getRemoveElement) {
            const newCart = cart.filter(element => element.id !== getRemoveElement.id);
            setCart([...newCart]);
        } else {
            console.log("Element does not exist in cart");
        }
    }

    const addToWishlist = (item) => {
        const checkItemExists = wishlist.find(wishlistELement => wishlistELement.id === item.id);
        if(checkItemExists) {
            // the item is already in wishlist.
            return;
        }
        const newWishlistItem = {
            "id" : item.id,
            "title" : item.title,
            "description" : item.description,
            "price" : item.price,
            "imageURL" : item.image
        }
        setWishlist(prevItems => [...prevItems, newWishlistItem]);
    }

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
            element : <Products products={products} addToCart={addToCart} addToWishlist={addToWishlist}/>
        },
        {
            path : "cart/",
            element : <Cart cart={cart} removeFromCart={removeFromCart} changeQuantityInCart={changeQuantityInCart}/>
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