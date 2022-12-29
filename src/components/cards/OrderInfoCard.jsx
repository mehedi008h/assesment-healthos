import React from "react";

const OrderInfoCard = ({ title, orderInfo }) => {
    return (
        <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            <div className="grid grid-cols-12 gap-4 mt-4">
                <div className="col-span-3">
                    <ul className="list-none text-gray-500">
                        {orderInfo.map((order, i) => (
                            <li key={i} className="my-2">
                                {order.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-5">
                    <ul className="list-none font-medium">
                        {orderInfo.map((order, i) => (
                            <li key={i} className="my-2">
                                {order.info}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OrderInfoCard;
