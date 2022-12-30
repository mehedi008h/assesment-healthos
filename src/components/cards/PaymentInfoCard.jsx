import React from "react";

const PaymentInfoCard = ({ title, paymentInfo }) => {
    return (
        <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            <div className="grid grid-cols-12 gap-4 mt-4">
                <div className="col-span-3">
                    <ul className="list-none text-gray-500">
                        <li className="my-2">Id</li>
                        <li className="my-2">Status</li>
                        <li className="my-2">Total</li>
                    </ul>
                </div>
                <div className="col-span-5">
                    <ul className="list-none font-medium">
                        <li className="my-2">{paymentInfo?.paymentInfo?.id}</li>
                        <li className="my-2">
                            {paymentInfo?.paymentInfo?.status}
                        </li>
                        <li className="my-2">{paymentInfo?.itemsPrice}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PaymentInfoCard;
