import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import CartCard from "./cards/CartCard";

const Cart = () => {
    return (
        <div className="my-4 px-2">
            <h1 className="text-xl font-semibold">
                Cart <span>(5 items)</span>
            </h1>
            <hr className="my-2" />
            {/* cart container  */}
            <div className="my-2 overflow-y-scroll" style={{ height: "76vh" }}>
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
            </div>
            <hr />
            {/* checkout  */}
            <div className="flex flex-row justify-between my-3">
                <h3 className="text-xl font-semibold">
                    Total: <span className="text-green-600">5000.00 BDT</span>
                </h3>
                <button className="bg-green-500 hover:bg-green-600 transition-all text-white px-2 py-1 rounded-md flex items-center gap-2">
                    Checkout <HiArrowSmRight size={25} />
                </button>
            </div>
        </div>
    );
};

export default Cart;
