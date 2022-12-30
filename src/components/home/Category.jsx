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
                <div className="col-span-2 xl:flex lg:flex md:flex hidden">
                    <CategoryMenu
                        title="Category Menu"
                        links={categoryLink}
                        buttonText="More Category"
                    />
                </div>
                {/* collection banner  */}
                <div className="xl:col-span-10 lg:col-span-10 md:col-span-10 col-span-12">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <BannerCard
                                img={bannerbg1}
                                title="Winter Exclusive"
                            />
                        </div>
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
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
