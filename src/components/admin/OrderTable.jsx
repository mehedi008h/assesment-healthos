import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const OrderTable = ({ orders }) => {
    return (
        <div className="my-4 border-2 rounded-md p-2">
            <div className="grid grid-cols-12 gap-2">
                {/* head  */}
                <div className="col-span-3 border-r-2 font-semibold">
                    Order ID
                </div>
                <div className="col-span-3 border-r-2 font-semibold">Phone</div>
                <div className="col-span-2 border-r-2 font-semibold">
                    Address
                </div>
                <div className="col-span-2 border-r-2 font-semibold">
                    Status
                </div>
                <div className="col-span-2 font-semibold">Action</div>
                <hr className="col-span-12" />
                {/* content  */}
                {orders?.map((order) => (
                    <Fragment key={order?._id}>
                        <div className="col-span-3 border-r-2">
                            {order?._id}
                        </div>
                        <div className="col-span-3 border-r-2">
                            {order?.shippingInfo?.phoneNo}
                        </div>
                        <div className="col-span-2 border-r-2">
                            {order?.shippingInfo?.address}
                        </div>
                        <div className="col-span-2 border-r-2">
                            {order?.orderStatus}
                        </div>
                        <div className="col-span-2">
                            <Link
                                to={`/admin/order/${order?._id}`}
                                className="border-2 border-green-400 text-green-600 px-2 rounded-md font-semibold"
                            >
                                View
                            </Link>
                            <button className="border-2 border-red-400 text-red-600 px-2 rounded-md font-semibold ml-2">
                                Delete
                            </button>
                        </div>
                        <hr className="col-span-12" />
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default OrderTable;
