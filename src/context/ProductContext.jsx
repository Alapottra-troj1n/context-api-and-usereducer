import React, { createContext, useEffect } from 'react';

import { useReducer } from 'react';
import { useContext } from 'react';
import { actionTypes } from "../state/productState/actionTypes.js";
import { productReducer, initialState } from '../state/productState/productReducer'

const PRODUCT_CONTEXT = createContext();

const ProductContext = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState)
    console.log(state);
    useEffect(() => {

        const fetchProducts = async () => {
            try {
                dispatch({ type: actionTypes.FETCHING_START })
                const res = await fetch('/products.json');
                const products = await res.json();
                dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: products })
            } catch (error) {
                dispatch({ type: actionTypes.FETCHING_ERROR })
            }

        }
        fetchProducts();
    }, [])

    const value = {
        state,
        dispatch
    };

    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>

    );

};

export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
}

export default ProductContext;