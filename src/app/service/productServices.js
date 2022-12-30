import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productServices = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://healthos-server.onrender.com/api/v1/",
    }),
    tagTypes: ["products"],
    endpoints: (builder) => ({
        allProduct: builder.query({
            query: () => ({
                url: `products`,
                method: "GET",
            }),
            providesTags: ["products"],
        }),
        singleProduct: builder.query({
            query: ({ productId }) => ({
                url: `product/${productId}`,
                method: "GET",
            }),
            providesTags: ["products"],
        }),
    }),
});

export const { useAllProductQuery, useSingleProductQuery } = productServices;
export default productServices;
