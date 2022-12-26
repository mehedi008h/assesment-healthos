import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";

const PasswordInput = ({
    label,
    placeholder,
    name,
    value,
    handleChange,
    handleBlur,
    errors,
    touched,
}) => {
    const [passwordShow, setPasswordShow] = useState(false);

    // showing password
    const togglePasswordVisiblity = () => {
        setPasswordShow(passwordShow ? false : true);
    };
    return (
        <div>
            <div className="flex flex-col gap-1">
                <label className="text-base font-medium" htmlFor="firstName">
                    {label} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <input
                        className={`w-full px-2 py-1 outline-none border-2 ${
                            errors && touched && "border-red-500"
                        } rounded-md focus:border-green-200 mb-5`}
                        type={passwordShow ? "text" : "password"}
                        name={name}
                        placeholder={placeholder}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={value}
                    />
                    <AiOutlineEye
                        color={passwordShow ? "#4285f4" : "black"}
                        onClick={togglePasswordVisiblity}
                        className="absolute top-2 right-2"
                    />
                </div>
            </div>
            {/* If validation is not passed show errors */}
            <div className="text-red-500 -mt-3">
                {errors && touched && errors}
            </div>
        </div>
    );
};

export default PasswordInput;
