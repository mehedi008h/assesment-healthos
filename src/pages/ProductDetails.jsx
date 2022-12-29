import React from "react";
import { DetailsCard, ImageCard, Navbar, Review } from "../components";
import ProductSlider from "../components/products/ProductSlider";

const ProductDetails = () => {
    return (
        <div>
            <Navbar />
            <div className="w-11/12 mx-auto my-6">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        {/* image  */}
                        <ImageCard />
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
