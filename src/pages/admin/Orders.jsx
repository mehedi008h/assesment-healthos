import React from "react";
import { AdminNavbar, Sidebar, Table } from "../../components";
import { orderHeads } from "../../data/data";

const Orders = () => {
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
                        <h1 className="text-2xl font-semibold">Order (20)</h1>
                    </div>
                    {/* orders  */}
                    <Table heads={orderHeads} />
                </div>
            </div>
        </div>
    );
};

export default Orders;
