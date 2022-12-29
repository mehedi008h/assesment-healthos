import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { HiArrowSmDown } from "react-icons/hi";
import { MdUpdate } from "react-icons/md";

import {
    AdminNavbar,
    CartCard,
    OrderInfoCard,
    OrderStatus,
    Sidebar,
} from "../../components";
import { paymentInfo, shippingInfo } from "../../data/data";

const OrderView = () => {
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
                        <div className="flex justify-between items-center p-2 bg-gray-100 rounded-t-md">
                            <h1 className="text-2xl font-semibold">
                                Order Id : #12323
                            </h1>
                            <div className="flex flex-row gap-2">
                                <button className="flex items-center gap-2 px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all">
                                    <MdUpdate size={20} /> Update
                                </button>
                                <button className="flex items-center gap-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all">
                                    <AiOutlineDelete size={20} /> Delete
                                </button>
                                <button className="flex items-center gap-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all">
                                    <HiArrowSmDown size={20} /> Invoice
                                </button>
                            </div>
                        </div>

                        {/* order status  */}
                        <OrderStatus orderStatus="Processing" />
                        <hr className="mt-8 mb-4" />
                        {/* shipping info & payment info  */}
                        <div className="grid grid-cols-12 gap-3 p-4">
                            <div className="col-span-6">
                                <OrderInfoCard
                                    title="Shipping Info"
                                    orderInfo={shippingInfo}
                                />
                            </div>
                            <div className="col-span-6">
                                <OrderInfoCard
                                    title="Payment Info"
                                    orderInfo={paymentInfo}
                                />
                            </div>
                        </div>
                        {/* order items  */}
                        <div className="px-4 py-2">
                            <h1 className="text-xl font-semibold">
                                Order Items
                            </h1>
                            <div className="my-4">
                                <CartCard order={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderView;
