import React from "react";

const ShippingInfoCard = ({ title, shippingInfo }) => {
    return (
        <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            <div className="grid grid-cols-12 gap-4 mt-4">
                <div className="col-span-3">
                    <ul className="list-none text-gray-500">
                        <li className="my-2">Phone</li>
                        <li className="my-2">City</li>
                        <li className="my-2">Country</li>
                        <li className="my-2">Address</li>
                    </ul>
                </div>
                <div className="col-span-5">
                    <ul className="list-none font-medium">
                        <li className="my-2">{shippingInfo?.phoneNo}</li>
                        <li className="my-2">{shippingInfo?.city}</li>
                        <li className="my-2">{shippingInfo?.country}</li>
                        <li className="my-2">{shippingInfo?.address}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ShippingInfoCard;
