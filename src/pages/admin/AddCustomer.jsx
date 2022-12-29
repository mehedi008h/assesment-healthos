import React from "react";
import { AdminNavbar, Sidebar } from "../../components";

const AddCustomer = () => {
    return (
        <div className="bg-gray-50">
            <AdminNavbar />
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    {/* sidebar  */}
                    <Sidebar />
                </div>
                <div className="col-span-10 p-4"></div>
            </div>
        </div>
    );
};

export default AddCustomer;
