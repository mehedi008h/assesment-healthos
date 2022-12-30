import { configureStore } from "@reduxjs/toolkit";
import productServices from "./service/productServices";
import cartReducer from "./features/cartSlice";
import userServices from "./service/customerService";
import orderServices from "./service/orderService";

export const store = configureStore({
    reducer: {
        [productServices.reducerPath]: productServices.reducer,
        [userServices.reducerPath]: userServices.reducer,
        [orderServices.reducerPath]: orderServices.reducer,
        cart: cartReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            productServices.middleware,
            userServices.middleware,
            orderServices.middleware,
        ]),
});
