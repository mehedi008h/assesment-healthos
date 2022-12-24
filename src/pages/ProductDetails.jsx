import React, { useState } from "react";
import { bannerbg2 } from "../assets/image";
import { DetailsCard, Navbar, Review } from "../components";
import ProductSlider from "../components/products/ProductSlider";

const ProductDetails = () => {
    const [imgIndex, setImgIndex] = useState(0);
    console.log(imgIndex);
    return (
        <div>
            <Navbar />
            <div className="w-11/12 mx-auto my-6">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        {/* image  */}
                        <div className="w-4/5 mx-auto">
                            <img
                                className="h-full w-full object-cover rounded-md"
                                src={bannerbg2}
                                alt=""
                            />
                        </div>

                        {/* image container  */}
                        <div className="w-4/5 mx-auto flex flex-row flex-wrap mt-4">
                            <div
                                className="h-20 w-20 rounded-md bg-gray-500 cursor-pointer"
                                onClick={() => setImgIndex(1)}
                            ></div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        {/* info  */}
                        <DetailsCard />
                    </div>
                </div>
                {/* releted product  */}
                <div className="my-6 w-11/12 mx-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-semibold">
                            Releted Product
                        </h1>
                        <button className="text-green-400">Seel All</button>
                    </div>
                    <ProductSlider view={4} />
                </div>
                {/* review section  */}
                <Review />
            </div>
        </div>
    );
};

export default ProductDetails;
