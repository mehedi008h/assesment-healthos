import React from "react";
import { creditCart, paypal, stripe } from "../assets/image";
import Input from "./forms/Input";

const PaymentMethod = () => {
    return (
        <div className="mt-14">
            <h1 className="text-2xl font-semibold">Payment Method</h1>
            <p className="text-gray-400 mt-1">
                Please enter your payment method
            </p>
            {/* form  */}
            <div className="pr-12 grid grid-cols-12 gap-2 mt-4 border-2 rounded-md p-3 xl:w-3/4 lg:w-3/4 md:w-3/4 w-full">
                <div className="col-span-12">
                    <div className="flex flex-row justify-between mb-2">
                        <h3 className="text-xl font-semibold">Credit Card</h3>
                        <div>
                            <img src={creditCart} alt="" />
                        </div>
                    </div>
                    {/* card number  */}
                    <Input
                        label="Card Number"
                        placeholder="Card Number"
                        name="cardNumber"
                    />
                </div>
                <div className="xl:col-span-5 lg:col-span-5 md:col-span-5 col-span-12">
                    {/* card holder  */}
                    <Input
                        label="Card Holder"
                        placeholder="Card Holder"
                        name="cardHolder"
                    />
                </div>
                <div className="col-span-4">
                    {/* card holder  */}
                    <Input
                        label="Expiration date"
                        placeholder="DD / MM / YY"
                        name="expirationDate"
                    />
                </div>
                <div className="col-span-3">
                    {/* card holder  */}
                    <Input label="CVC" placeholder="CVC" name="cvc" />
                </div>
            </div>
            <div className="xl:w-3/4 lg:w-3/4 md:w-3/4 w-full my-4">
                {/* paypal  */}
                <div className="flex justify-between bg-gray-200 px-4 py-2 rounded-md cursor-pointer">
                    <h3>Paypal</h3>
                    <div>
                        <img src={paypal} alt="" />
                    </div>
                </div>
                {/* stripe  */}
                <div className="flex justify-between bg-gray-200 px-4 py-2 rounded-md mt-4 cursor-pointer">
                    <h3>Stripe</h3>
                    <div>
                        <img src={stripe} alt="" />
                    </div>
                </div>
            </div>

            <div className="">
                <div className="mb-2">
                    <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                    />
                    <label
                        className="text-base font-semibold text-gray-500 pl-2"
                        for="vehicle1"
                    >
                        I agree with our terms and conditions and privacy
                        policy.
                    </label>
                    <br />
                </div>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                    Confirm Order
                </button>
            </div>
        </div>
    );
};

export default PaymentMethod;
