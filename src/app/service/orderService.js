import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderServices = createApi({
    reducerPath: "orders",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://healthos-server.onrender.com/api/v1/",
    }),
    tagTypes: ["orders"],
    endpoints: (builder) => ({
        allOrders: builder.query({
            query: () => ({
                url: `orders`,
                method: "GET",
            }),
            providesTags: ["orders"],
        }),
        singleOrder: builder.query({
            query: ({ id }) => ({
                url: `order/${id}`,
                method: "GET",
            }),
            providesTags: ["orders"],
        }),
    }),
});

export const { useAllOrdersQuery, useSingleOrderQuery } = orderServices;
export default orderServices;
