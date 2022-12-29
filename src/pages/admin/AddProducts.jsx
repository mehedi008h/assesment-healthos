import React from "react";
import { AdminNavbar, ProductForm, Sidebar } from "../../components";

const AddProducts = () => {
    return (
        <div className="bg-gray-50">
            <AdminNavbar />
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    {/* sidebar  */}
                    <Sidebar />
                </div>
                <div className="col-span-10 p-4">
                    <ProductForm />
                </div>
            </div>
        </div>
    );
};

export default AddProducts;
