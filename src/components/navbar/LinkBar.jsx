import React from "react";
import { Link } from "react-router-dom";

// category data for link
const categories = [
    "Eid Collection",
    "New Collection",
    "Featured",
    "Footwear",
    "Accessories",
    "Clothing",
    "Beauty/Health",
    "Sports",
    "Outdoor",
    "Other",
];

const LinkBar = () => {
    return (
        <div className="w-full bg-gray-100">
            <div className="w-11/12 h-12 mx-auto flex justify-center items-center gap-8">
                {categories.map((link, index) => (
                    <Link
                        to={"/"}
                        key={index}
                        className="font-roboto font-medium hover:text-blue-600 link"
                    >
                        {link}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LinkBar;
