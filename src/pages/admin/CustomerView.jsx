import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdUpdate } from "react-icons/md";
import { AdminNavbar, CustomerCard, Sidebar, Table } from "../../components";
import { userTransationHeads } from "../../data/data";

const CustomerView = () => {
    return (
        <div className="bg-gray-50">
            <AdminNavbar />
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    {/* sidebar  */}
                    <Sidebar />
                </div>
                <div className="col-span-10 p-4">
                    <div className="bg-white w-11/12 mx-auto rounded shadow">
                        {/* header  */}
                        <div className="flex justify-between items-center p-2 bg-gray-100 rounded-t-md">
                            <h1 className="text-2xl font-semibold">
                                Customer Id : #12323
                            </h1>
                            <div className="flex flex-row gap-2">
                                <button className="flex items-center gap-2 px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all">
                                    <MdUpdate size={20} /> Update
                                </button>
                                <button className="flex items-center gap-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all">
                                    <AiOutlineDelete size={20} /> Delete
                                </button>
                            </div>
                        </div>

                        {/* info  */}
                        <CustomerCard />

                        {/* transation list  */}
                        <div className="p-4 mt-5">
                            <h1 className="text-xl font-semibold">
                                All Transation
                            </h1>
                            <Table heads={userTransationHeads} link="order" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerView;
