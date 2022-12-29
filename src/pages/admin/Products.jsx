import React from "react";
import { Link } from "react-router-dom";
import { AdminNavbar, Sidebar, Table } from "../../components";
import { productHeads } from "../../data/data";

const Products = () => {
    return (
        <div className="bg-gray-50">
            <AdminNavbar />
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    {/* sidebar  */}
                    <Sidebar />
                </div>
                <div className="col-span-10 p-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold">
                            Products (20)
                        </h1>
                        <Link
                            to={"/admin/products/new"}
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
                    <Table heads={productHeads} />
                </div>
            </div>
        </div>
    );
};

export default Products;
