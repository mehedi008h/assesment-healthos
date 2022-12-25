import React from "react";
import {
    BillingInfo,
    Navbar,
    OrderSummery,
    PaymentMethod,
} from "../components";

const Checkout = () => {
    return (
        <div>
            <Navbar />
            <div className="w-11/12 mx-auto my-12">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-7">
                        <BillingInfo />
                        <PaymentMethod />
                    </div>
                    <div className="col-span-5">
                        <OrderSummery />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
