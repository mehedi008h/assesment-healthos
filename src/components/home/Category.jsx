import React from "react";
import { bannerbg1, bannerbg2 } from "../../assets/image";
import BannerCard from "./BannerCard";
import CategoryMenu from "./CategoryMenu";

const categoryLink = [
    "Eid Collection",
    "New Collection",
    "Footwear",
    "Accessories",
    "Clothing",
    "Beauty/Health",
];

const Category = () => {
    return (
        <div className="w-11/12 mx-auto my-6">
            <div className="grid grid-cols-12 gap-4">
                {/* menu  */}
                <div className="col-span-2">
                    <CategoryMenu title="Category Menu" links={categoryLink} />
                </div>
                {/* collection banner  */}
                <div className="col-span-10">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-6">
                            <BannerCard
                                img={bannerbg1}
                                title="Winter Exclusive"
                            />
                        </div>
                        <div className="col-span-6">
                            <BannerCard
                                img={bannerbg2}
                                title="Comfy Cool Kicks"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
