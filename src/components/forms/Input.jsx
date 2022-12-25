import React from "react";

const Input = ({ label, placeholder, name, onChange, value }) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-base font-semibold" htmlFor="firstName">
                {label} <span className="text-red-500">*</span>
            </label>
            <input
                className="px-2 py-1 outline-none border-2 rounded-md focus:border-green-200 mb-5"
                type="text"
                name={name}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
