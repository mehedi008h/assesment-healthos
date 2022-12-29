import React from "react";
import { bannerbg2 } from "../../assets/image";

const CustomerCard = () => {
    return (
        <div className="p-4">
            <div className="grid grid-cols-12 gap-3">
                {/* image  */}
                <div className="col-span-4">
                    <div className="h-60 w-60 rounded-full">
                        <img
                            className="h-full w-full rounded-full object-cover"
                            src={bannerbg2}
                            alt=""
                        />
                    </div>
                </div>

                {/* info */}
                <div className="col-span-8">
                    <h1 className="text-3xl font-semibold">Mehedi Hasan</h1>
                    <div className="grid grid-cols-12 gap-4 mt-4">
                        <div className="col-span-3">
                            <ul className="list-none text-gray-500">
                                <li className="my-2">ID</li>
                                <li className="my-2">Name</li>
                                <li className="my-2">Phone</li>
                                <li className="my-2">Email</li>
                                <li className="my-2">City</li>
                                <li className="my-2">Address</li>
                            </ul>
                        </div>
                        <div className="col-span-5">
                            <ul className="list-none font-medium">
                                <li className="my-2">#34343</li>
                                <li className="my-2">Mehedi Hasan</li>
                                <li className="my-2">01999934343</li>
                                <li className="my-2">mehedi@gmail.com</li>
                                <li className="my-2">Dhaka</li>
                                <li className="my-2">Dhanmondi, Dhaka</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerCard;
