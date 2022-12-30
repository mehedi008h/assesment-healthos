import React, { Fragment } from "react";
import { useAllOrdersQuery } from "../../app/service/orderService";
import { AdminNavbar, Loading, OrderTable, Sidebar } from "../../components";

const Orders = () => {
    // featch data using redux toolkit query
    const { data, isLoading } = useAllOrdersQuery();
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
                                    Order ({data?.orders?.length})
                                </h1>
                            </div>
                            {/* orders  */}
                            <OrderTable orders={data?.orders} />
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Orders;
