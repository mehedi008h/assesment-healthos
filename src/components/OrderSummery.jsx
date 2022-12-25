import React from "react";
import CartCard from "./cards/CartCard";

const OrderSummery = () => {
    return (
        <div className="shadow-md bg-gray-50 p-3 rounded-md">
            <h1 className="text-2xl font-semibold">Order Summery</h1>
            <div className="my-4">
                <CartCard order={true} />
                <CartCard order={true} />
                <CartCard order={true} />

                {/* subtotal , tax , shipping  */}
                <div className="mt-6 flex justify-between items-center">
                    <div className="font-semibold flex flex-col gap-1">
                        <h5>Subtotal</h5>
                        <h5>Tax</h5>
                        <h5>Shipping</h5>
                    </div>
                    <div className="pr-4 font-semibold flex flex-col gap-1">
                        <p>1500.00 BDT</p>
                        <p>25 %</p>
                        <p>60.00 BDT</p>
                    </div>
                </div>
                {/* promo code  */}
                <div className="my-6 w-full px-2 py-2 rounded-md border-2 flex flex-row justify-between items-center">
                    <input
                        className=" outline-none w-4/5 bg-inherit"
                        type="text"
                        placeholder="Apply promo code"
                    />
                    <button className="text-green-500 font-semibold">
                        Apply code
                    </button>
                </div>

                {/* total order  */}
                <div className="mt-6 flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Total</h2>
                    <h2 className="pr-4 text-2xl font-semibold text-green-500">
                        1500.00 BDT
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default OrderSummery;
