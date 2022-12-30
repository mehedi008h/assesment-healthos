import React from "react";
import Input from "./forms/Input";

const BillingInfo = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold">Billing Info</h1>
            <p className="text-gray-400 mt-1">Please enter your billing info</p>
            {/* form  */}
            <div className="pr-12 grid grid-cols-12 gap-8 mt-4">
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                    {/* first name  */}
                    <Input
                        label="First Name"
                        placeholder="First name"
                        name="firstName"
                    />
                    {/* email  */}
                    <Input label="Email" placeholder="Email" name="email" />
                    {/* address  */}
                    <Input
                        label="Address"
                        placeholder="Address"
                        name="address"
                    />
                    {/* State / country  */}
                    <Input
                        label="State / Country"
                        placeholder="state / country"
                        name="country"
                    />
                </div>
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                    {/* last name  */}
                    <Input
                        label="Last Name"
                        placeholder="Last name"
                        name="lastName"
                    />
                    {/* Pohne  */}
                    <Input label="Phone" placeholder="Phone" name="phone" />
                    {/* Town / city  */}
                    <Input
                        label="Town / City"
                        placeholder="Town / city"
                        name="city"
                    />
                    {/* zip / postal  */}
                    <Input
                        label="Zip / Postal"
                        placeholder="Zip / postal"
                        name="zip"
                    />
                </div>
            </div>
        </div>
    );
};

export default BillingInfo;
