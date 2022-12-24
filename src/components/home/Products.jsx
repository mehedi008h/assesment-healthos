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
                <div className="col-span-2">
                    <CategoryMenu
                        title="Best Selling Product"
                        links={categoryLink}
                        buttonText="More Products"
                    />
                </div>
                {/* collection banner  */}
                <div className="col-span-10">
                    <ProductSlider view={3} />
                </div>
            </div>
        </div>
    );
};

export default Products;
