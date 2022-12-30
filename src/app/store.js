import { configureStore } from "@reduxjs/toolkit";
import productServices from "./service/productServices";

export const store = configureStore({
    reducer: {
        [productServices.reducerPath]: productServices.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([productServices.middleware]),
});
