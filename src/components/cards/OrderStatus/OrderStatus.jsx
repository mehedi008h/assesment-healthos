import React from "react";
import { FcInTransit, FcPaid, FcProcess, FcShipped } from "react-icons/fc";
import styles from "./OrderStatus.module.css";

const OrderStatus = ({ orderStatus }) => {
    // condition for animation
    let status;

    if (orderStatus === "Processing") {
        status = 0;
    } else if (orderStatus === "On The Way") {
        status = 1;
    } else if (orderStatus === "Shipped") {
        status = 2;
    } else {
        status = 3;
    }

    const statusClass = (index) => {
        if (index - status < 1) return styles.done;
        if (index - status === 1) return styles.inProgress;
        if (index - status > 1) return styles.undone;
    };
    return (
        <div className="py-2 px-4 my-4">
            <h1 className="text-xl font-semibold">Order Status</h1>

            <div className="grid grid-cols-12 gap-3 mt-8">
                <div className="col-span-3 flex flex-col justify-center items-center">
                    <FcProcess className={statusClass(0)} size={35} />
                    <h1 className="text-lg font-semibold mt-4">Processing</h1>
                </div>
                <div className="col-span-3 flex flex-col justify-center items-center">
                    <FcInTransit className={statusClass(1)} size={35} />
                    <h1 className="text-lg font-semibold mt-4">On The Way</h1>
                </div>
                <div className="col-span-3 flex flex-col justify-center items-center">
                    <FcShipped className={statusClass(2)} size={35} />
                    <h1 className="text-lg font-semibold mt-4">Shipped</h1>
                </div>
                <div className="col-span-3 flex flex-col justify-center items-center">
                    <FcPaid className={statusClass(3)} size={35} />
                    <h1 className="text-lg font-semibold mt-4">Delivery</h1>
                </div>
            </div>
        </div>
    );
};

export default OrderStatus;
