import React from "react";
import { Link } from "react-router-dom";
import { AdminNavbar, Sidebar, Table } from "../../components";
import { customerHeads } from "../../data/data";

const Customers = () => {
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
                            Customer (20)
                        </h1>
                        <Link
                            to={"/admin/customer/new"}
                            className="px-3 py-1 rounded-md font-semibold"
                            style={{
                                backgroundColor: "rgba(0, 128, 0, 0.2)",
                                color: "green",
                            }}
                        >
                            Add Customer
                        </Link>
                    </div>
                    {/* customers  */}
                    <Table heads={customerHeads} link="customer" />
                </div>
            </div>
        </div>
    );
};

export default Customers;
