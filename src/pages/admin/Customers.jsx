import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useAllCustomerQuery } from "../../app/service/customerService";
import { AdminNavbar, CustomerTable, Loading, Sidebar } from "../../components";

const Customers = () => {
    // featch data using redux toolkit query
    const { data, isLoading } = useAllCustomerQuery();

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
                        <Fragment>
                            <div className="flex justify-between items-center">
                                <h1 className="text-2xl font-semibold">
                                    Customer ({data?.user?.length})
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
                            <CustomerTable customers={data?.user} />
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Customers;
