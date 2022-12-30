import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userServices = createApi({
    reducerPath: "customers",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://healthos-server.onrender.com/api/v1/",
    }),
    tagTypes: ["customers"],
    endpoints: (builder) => ({
        allCustomer: builder.query({
            query: () => ({
                url: `users`,
                method: "GET",
            }),
            providesTags: ["customers"],
        }),
        singleCustomer: builder.query({
            query: ({ id }) => ({
                url: `user/${id}`,
                method: "GET",
            }),
            providesTags: ["customers"],
        }),
    }),
});

export const { useAllCustomerQuery, useSingleCustomerQuery } = userServices;
export default userServices;
