import React, {useState, createContext} from "react";
import items from "../Assets/products";

const ProductContext = createContext();

export const ProductContextProvider = (props) => {
    
    const [products, setProducts] = useState(items);

    const {children} = props;
    
    return(
        <ProductContext.Provider
            value={{
                products,
                setProducts
            }}
        >

            {children}
        </ProductContext.Provider>
    )
} 

export default ProductContext;