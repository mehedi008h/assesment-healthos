import React from "react";
import CategoryMenu from "./CategoryMenu";
import ProductSlider from "../products/ProductSlider";

const categoryLink = [
    "Featured",
    "Footwear",
    "Accessories",
    "Clothing",
    "Beauty/Health",
    "Sports",
    "Outdoor",
];

const Products = () => {
    return (
        <div className="w-11/12 mx-auto my-28">
            <div className="grid grid-cols-12 gap-4">
                {/* menu  */}
                <div className="col-span-2 xl:flex lg:flex md:flex hidden">
                    <CategoryMenu
                        title="Best Selling Product"
                        links={categoryLink}
                        buttonText="More Products"
                    />
                </div>
                {/* product slider  */}
                <div className="col-span-10 xl:block lg:block md:block hidden">
                    <ProductSlider view={3} />
                </div>

                <div className="col-span-12 xl:hidden lg:hidden md:hidden block">
                    <ProductSlider view={1} />
                </div>
            </div>
        </div>
    );
};

export default Products;
