import React from "react";
import { Link } from "react-router-dom";
import { Input, PasswordInput } from "../components";

import { Formik } from "formik";
import * as Yup from "yup";

// Creating schema
const schema = Yup.object().shape({
    phone: Yup.string().required("Phone is a required field"),
    password: Yup.string()
        .required("Password is a required field")
        .min(6, "Password must be at least 6 characters"),
});

const Login = () => {
    return (
        <div className="min-h-screen w-full flex justify-center items-center bg-slate-100">
            <div className="bg-white shadow-md xl:w-2/6 lg:w-2/6 md:w-2/6 w-11/12 p-5 rounded-md">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold">Login</h1>

                    <div>
                        <p className="text-gray-500">Don't have account?</p>
                        <Link
                            className="text-blue-500 font-semibold"
                            to="/signup"
                        >
                            Signup
                        </Link>
                    </div>
                </div>
                {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
                <Formik
                    validationSchema={schema}
                    initialValues={{ phone: "", password: "" }}
                    onSubmit={(values) => {
                        console.log(values);
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

                                <div className="flex justify-between">
                                    <button
                                        type="submit"
                                        className="px-5 py-2 bg-green-500 text-white rounded-md font-semibold"
                                    >
                                        Login
                                    </button>
                                    <Link
                                        to="/"
                                        className="text-blue-500 font-semibold"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;
