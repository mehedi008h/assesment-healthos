import React from "react";
import { Link } from "react-router-dom";
import { Input, PasswordInput } from "../components";

import { Formik } from "formik";
import * as Yup from "yup";
import { logo } from "../assets/image";

// Creating schema
const schema = Yup.object().shape({
    phone: Yup.string()
        // regexr bd phone number validation
        .matches(/(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/, {
            message: "Invalid Bangladesh number",
            excludeEmptyString: false,
        })
        .required("Phone is a required field"),
    password: Yup.string()
        .required("Password is a required field")
        .min(6, "Password must be at least 6 characters"),
    retypePassword: Yup.string()
        .required("Retype Password is a required field")
        .min(6, "Retype Password must be at least 6 characters"),
});

const Auth = ({ title, link, linkText, text, login }) => {
    return (
        <div className="min-h-screen w-full flex justify-center items-center bg-gray-100 relative">
            {/* logo  */}
            <div className="absolute top-8 left-10">
                <Link to="/">
                    <div className="w-36 h-16">
                        <img
                            className="w-full h-full object-cover"
                            src={logo}
                            alt=""
                        />
                    </div>
                </Link>
            </div>
            <div className="bg-white shadow-md xl:w-2/6 lg:w-2/6 md:w-2/6 w-11/12 p-5 rounded-md">
                <div className="flex justify-between mt-4">
                    <h1 className="text-3xl font-semibold">{title}</h1>

                    <div>
                        <p className="text-gray-500">{text}</p>
                        <Link
                            className="text-blue-500 font-semibold"
                            to={`/${link}`}
                        >
                            {linkText}
                        </Link>
                    </div>
                </div>
                {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        phone: "",
                        password: "",
                        retypePassword: "",
                    }}
                    onSubmit={(values) => {
                        if (login) {
                            console.log("Login :", values);
                        } else {
                            console.log("Signup :", values);
                        }
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <div className="mt-6 flex flex-col gap-3">
                                <Input
                                    label="Phone number"
                                    placeholder="phone number"
                                    name="phone"
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    value={values.phone}
                                    errors={errors.phone}
                                    touched={touched.phone}
                                />
                                <PasswordInput
                                    label="Password"
                                    placeholder="password"
                                    name="password"
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    value={values.password}
                                    errors={errors.password}
                                    touched={touched.password}
                                />

                                {!login && (
                                    <PasswordInput
                                        label="Retype Password"
                                        placeholder="retype password"
                                        name="retypePassword"
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        value={values.retypePassword}
                                        errors={errors.retypePassword}
                                        touched={touched.retypePassword}
                                    />
                                )}

                                <div className="flex justify-between">
                                    <button
                                        type="submit"
                                        className="px-5 py-2 bg-green-500 text-white rounded-md font-semibold"
                                    >
                                        {title}
                                    </button>
                                    {login && (
                                        <Link
                                            to="/"
                                            className="text-blue-500 font-semibold"
                                        >
                                            Forgot Password?
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Auth;
