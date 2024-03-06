import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";

import { useEffect, useState } from "react";

const Router = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const [wishlist, setWishlist] = useState([]);
    const [wishlistCount, setWishlistCount] = useState(0);

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
            setCartCount(prevCartCount => prevCartCount+1);
            setCart(prevItems => [...prevItems, itemToAdd]);
        }
    }

    const removeFromCart = (item) => {
        const getRemoveElement = cart.find(element => element.id === item.id);
        if(getRemoveElement) {
            const newCart = cart.filter(element => element.id !== getRemoveElement.id);
            setCartCount(prevCartCount => prevCartCount-1);
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
        setWishlistCount(prevWishlistCount => prevWishlistCount + 1);
        setWishlist(prevItems => [...prevItems, newWishlistItem]);
    }

    const removeFromWishlist = (itemID) => {
        const checkItemExists = wishlist.find(wishlistELement => wishlistELement.id === itemID);
        if(checkItemExists) {
            const newWishlist = wishlist.filter(element => element.id !== checkItemExists.id);
            setWishlistCount(prevWishlistCount => prevWishlistCount - 1);
            setWishlist([...newWishlist]);
        } else {
            console.log("Element is not there in the wishlist");
        }
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

    // const router = createBrowserRouter([
    //     {
    //         path : "/",
    //         element : <Home cartCount={cartCount} wishlistCount={wishlistCount}/>,
    //         errorElement : <ErrorElement cartCount={cartCount} wishlistCount={wishlistCount}/>
    //     },
    //     {
    //         path : "products/",
    //         element : <Products products={products} addToCart={addToCart} addToWishlist={addToWishlist} cartCount={cartCount} wishlistCount={wishlistCount}/>
    //     },
    //     {
    //         path : "cart/",
    //         element : <Cart cart={cart} removeFromCart={removeFromCart} changeQuantityInCart={changeQuantityInCart} cartCount={cartCount} wishlistCount={wishlistCount}/>
    //     },
    //     {
    //         path : "wishlist/",
    //         element : <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} cartCount={cartCount} wishlistCount={wishlistCount}/>
    //     },
    // ]);

    return (
        <HashRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={<Home cartCount={cartCount} wishlistCount={wishlistCount}/>}
                />
                <Route 
                    path="/products/" 
                    element={<Products products={products} addToCart={addToCart} addToWishlist={addToWishlist} cartCount={cartCount} wishlistCount={wishlistCount}/>} 
                />
                <Route 
                    path="/cart/" 
                    element={<Cart cart={cart} removeFromCart={removeFromCart} changeQuantityInCart={changeQuantityInCart} cartCount={cartCount} wishlistCount={wishlistCount}/>} 
                />
                <Route 
                    path="/wishlist/" 
                    element={<Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} cartCount={cartCount} wishlistCount={wishlistCount}/>} 
                />
            </Routes>
        </HashRouter>
    )
}

export default Router;