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
                    <div className="xl:col-span-7 lg:col-span-7 md:col-span-7 col-span-12">
                        <BillingInfo />
                        <PaymentMethod />
                    </div>
                    <div className="xl:col-span-5 lg:col-span-5 md:col-span-5 col-span-12">
                        <OrderSummery />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
