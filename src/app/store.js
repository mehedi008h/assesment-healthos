import { configureStore } from "@reduxjs/toolkit";
import productServices from "./service/productServices";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
    reducer: {
        [productServices.reducerPath]: productServices.reducer,
        cart: cartReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([productServices.middleware]),
});
