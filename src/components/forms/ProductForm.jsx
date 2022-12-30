import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Input from "./Input";
import { categories } from "../../data/data";

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
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    console.log("Image", images);

    const onChange = (e) => {
        const files = Array.from(e.target.files);

        setImagesPreview([]);
        setImages([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((oldArray) => [
                        ...oldArray,
                        reader.result,
                    ]);
                    setImages((oldArray) => [...oldArray, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
    };
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
                                {/* product name  */}
                                <Input
                                    label="Product Name"
                                    name="name"
                                    placeholder="Product Name"
                                    errors={errors.name}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    touched={touched.name}
                                    value={values.name}
                                />
                                {/* price & discount price  */}
                                <div className="grid grid-cols-12 gap-2">
                                    <div className="col-span-6">
                                        <Input
                                            label="Product Price"
                                            name="price"
                                            placeholder="Product price"
                                            errors={errors.price}
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            touched={touched.price}
                                            value={values.price}
                                        />
                                    </div>
                                    <div className="col-span-6">
                                        <Input
                                            label="Discout Price"
                                            name="discout"
                                            placeholder="Product discout price"
                                            errors={errors.discout}
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            touched={touched.discout}
                                            value={values.discout}
                                        />
                                    </div>
                                </div>
                                {/* price & discount price  */}
                                <div className="grid grid-cols-12 gap-2">
                                    <div className="col-span-6">
                                        <div className="flex flex-col gap-1">
                                            <label
                                                className="text-base font-medium"
                                                htmlFor="firstName"
                                            >
                                                Product Colors
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </label>
                                            <select
                                                className="px-2 py-1 outline-none border-2 bg-white rounded-md focus:border-green-200 mb-5"
                                                name="colors"
                                            >
                                                <option value="red">Red</option>
                                                <option value="green">
                                                    Green
                                                </option>
                                                <option value="yellow">
                                                    Yellow
                                                </option>
                                                <option value="blue">
                                                    Blue
                                                </option>
                                                <option value="black">
                                                    Black
                                                </option>
                                                <option value="white">
                                                    White
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-span-6">
                                        <div className="flex flex-col gap-1">
                                            <label
                                                className="text-base font-medium"
                                                htmlFor="firstName"
                                            >
                                                Product Size
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </label>
                                            <select
                                                className="px-2 py-1 outline-none border-2 bg-white rounded-md focus:border-green-200 mb-5"
                                                name="colors"
                                            >
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                                <option value="XXL">XXL</option>
                                                <option value="XXXL">
                                                    XXXL
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* category & seller  */}
                                <div className="grid grid-cols-12 gap-2">
                                    <div className="col-span-6">
                                        <div className="flex flex-col gap-1">
                                            <label
                                                className="text-base font-medium"
                                                htmlFor="firstName"
                                            >
                                                Product Category
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </label>
                                            <select
                                                className="px-2 py-1 outline-none border-2 bg-white rounded-md focus:border-green-200 mb-5"
                                                name="colors"
                                            >
                                                {categories.map(
                                                    (category, i) => (
                                                        <option
                                                            key={i}
                                                            value={category}
                                                        >
                                                            {category}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-span-6">
                                        <Input
                                            label="Product Seller"
                                            name="seller"
                                            placeholder="Product seller"
                                            errors={errors.seller}
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            touched={touched.seller}
                                            value={values.seller}
                                        />
                                    </div>
                                </div>
                                {/* discription  */}
                                <textarea
                                    className="px-2 py-1 outline-none border-2 bg-white rounded-md focus:border-green-200 mb-5"
                                    name=""
                                    id=""
                                    cols="5"
                                    rows="5"
                                ></textarea>
                                {/* image  */}
                                <div className="flex flex-col gap-2">
                                    <label>Images</label>

                                    <div className="image_file ml-2">
                                        <input
                                            type="file"
                                            name="product_images"
                                            id="customFile"
                                            onChange={onChange}
                                            multiple
                                        />
                                        <AiOutlineCloudUpload size={20} />
                                    </div>

                                    <div className="flex flex-row gap-2">
                                        {imagesPreview.map((img) => (
                                            <img
                                                src={img}
                                                key={img}
                                                alt="Images Preview"
                                                className="mt-3 mr-2"
                                                width="55"
                                                height="52"
                                            />
                                        ))}
                                    </div>
                                </div>
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
