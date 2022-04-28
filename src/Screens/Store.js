import React from "react";
import ProductList from "../Components/Products";
import DefaultWrapper from "../Wrappers/DefaultWrapper";

const Store = () => {
    return (
        <DefaultWrapper>
            <h1 className="text-nav" >Nuestros Productos</h1>
            <ProductList />
        </DefaultWrapper>
    );
}

export default Store;