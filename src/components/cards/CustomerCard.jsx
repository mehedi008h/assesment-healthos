import React from "react";

const CustomerCard = ({ customer }) => {
    return (
        <div className="p-4">
            <div className="grid grid-cols-12 gap-3">
                {/* image  */}
                <div className="col-span-4">
                    <div className="h-60 w-60 bg-orange-400 rounded-full flex justify-center items-center">
                        <h1 className="text-5xl font-semibold uppercase">
                            {customer?.name.substring(0, 2)}
                        </h1>
                    </div>
                </div>

                {/* info */}
                <div className="col-span-8">
                    <h1 className="text-3xl font-semibold">{customer?.name}</h1>
                    <div className="grid grid-cols-12 gap-4 mt-4">
                        <div className="col-span-3">
                            <ul className="list-none text-gray-500">
                                <li className="my-2">ID</li>
                                <li className="my-2">Name</li>
                                <li className="my-2">Phone</li>
                                <li className="my-2">Email</li>
                                <li className="my-2">Address</li>
                            </ul>
                        </div>
                        <div className="col-span-5">
                            <ul className="list-none font-medium">
                                <li className="my-2">{customer?._id}</li>
                                <li className="my-2">{customer?.name}</li>
                                <li className="my-2">{customer?.phone}</li>
                                <li className="my-2">{customer?.email}</li>
                                <li className="my-2">{customer?.address}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerCard;
