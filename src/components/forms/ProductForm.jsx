import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "./Input";

// Creating schema
const schema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    phone: Yup.string().required("Phone is a required field"),
    address: Yup.string().required("Address is a required field"),
});

const ProductForm = () => {
    return (
        <div className="w-2/3 mx-auto rounded-md p-0">
            <div className="py-2 bg-gray-200 rounded-t-md">
                <h1 className="text-2xl text-center font-semibold">
                    Add Product
                </h1>
            </div>
            <div className="border-x-2 border-b-2 rounded-b-md py-2 px-4">
                {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        name: "",
                        email: "",
                        phone: "",
                        address: "",
                    }}
                    onSubmit={(values) => {
                        console.log("Customer: ", values);
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
                                    label="Customer Name"
                                    name="name"
                                    placeholder="Mehedi Hasan"
                                    errors={errors.name}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    touched={touched.name}
                                    value={values.name}
                                />
                                <Input
                                    label="Customer Email"
                                    name="email"
                                    placeholder="example@email.com"
                                    errors={errors.email}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    touched={touched.email}
                                    value={values.email}
                                />
                                <Input
                                    label="Customer Phone"
                                    name="phone"
                                    placeholder="012345678"
                                    errors={errors.phone}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    touched={touched.phone}
                                    value={values.phone}
                                />
                                <Input
                                    label="Customer Address"
                                    name="address"
                                    placeholder="address"
                                    errors={errors.address}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    touched={touched.address}
                                    value={values.address}
                                />
                                {/* save button  */}
                                <div className="text-center">
                                    <button className="bg-black px-3 py-2 rounded-md w-fit text-white font-semibold">
                                        Save Product
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ProductForm;
