import React from "react";
import { HiX } from "react-icons/hi";
import { bannerbg2 } from "../../assets/image";

const CartCard = ({ order }) => {
    return (
        <div>
            <div className="w-full flex flex-row gap-3">
                <div className="w-20 h-20 rounded-md bg-gray-400">
                    <img
                        className="h-full w-full object-cover rounded-md"
                        src={bannerbg2}
                        alt=""
                    />
                </div>
                <div className="w-full">
                    <h3 className="text-xl">Product Title</h3>
                    <div className="grid grid-cols-12 gap-3 mt-1">
                        <div className="col-span-4">
                            <p className="text-sm text-gray-400">Price</p>
                            <h5 className="font-medium text-gray-500">
                                300.00 BDT
                            </h5>
                        </div>
                        <div className="col-span-2">
                            <p className="text-sm text-gray-400">Color</p>
                            <h5 className="font-medium text-gray-500">Red</h5>
                        </div>
                        <div className="col-span-2">
                            <p className="text-sm text-gray-400">Size</p>
                            <h5 className="font-medium text-gray-500">M</h5>
                        </div>

                        {order ? (
                            <>
                                {/* for order section  */}
                                <div className="col-span-4">
                                    <p className="text-sm text-gray-400">
                                        Total
                                    </p>
                                    <h5 className="font-medium text-gray-500">
                                        300 * 5 =
                                        <span className="text-green-500">
                                            1500.00
                                        </span>
                                    </h5>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* for cart section  */}
                                <div className="col-span-2 border-2 px-2 py-1 rounded-md h-fit">
                                    <select
                                        className="outline-none"
                                        name=""
                                        id=""
                                    >
                                        <option value="">Pcs</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <HiX
                                        className="mt-1"
                                        color="red"
                                        size={25}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <hr className="my-4" />
        </div>
    );
};

export default CartCard;