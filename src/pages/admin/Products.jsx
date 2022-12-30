import React from "react";
import { Link } from "react-router-dom";
import { useAllProductQuery } from "../../app/service/productServices";
import { AdminNavbar, Loading, ProductTable, Sidebar } from "../../components";
import { productHeads } from "../../data/data";

const Products = () => {
    // featch data using redux toolkit query
    const { data, isLoading } = useAllProductQuery();

    return (
        <div className="bg-gray-50">
            <AdminNavbar />
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    {/* sidebar  */}
                    <Sidebar />
                </div>
                <div className="col-span-10 p-4">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <>
                            <div className="flex justify-between items-center">
                                <h1 className="text-2xl font-semibold">
                                    Products ({data?.products?.length})
                                </h1>
                                <Link
                                    to={"/admin/product/new"}
                                    className="px-3 py-1 rounded-md font-semibold"
                                    style={{
                                        backgroundColor: "rgba(0, 128, 0, 0.2)",
                                        color: "green",
                                    }}
                                >
                                    Add Product
                                </Link>
                            </div>
                            {/* products  */}
                            <ProductTable
                                products={data?.products}
                                heads={productHeads}
                                link="product"
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
