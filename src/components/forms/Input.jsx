import React from "react";

const Input = ({
    label,
    placeholder,
    name,
    value,
    handleChange,
    handleBlur,
    errors,
    touched,
}) => {
    return (
        <div>
            <div className="flex flex-col gap-1">
                <label className="text-base font-medium" htmlFor="firstName">
                    {label} <span className="text-red-500">*</span>
                </label>
                <input
                    className={`px-2 py-1 outline-none border-2 ${
                        errors && touched && "border-red-500"
                    } rounded-md focus:border-green-200 mb-5`}
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value}
                />
            </div>
            {/* If validation is not passed show errors */}
            <div className="text-red-500 -mt-3">
                {errors && touched && errors}
            </div>
        </div>
    );
};

export default Input;
