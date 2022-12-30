import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const FilterMenu = ({ title, links, category, brands, rating, price }) => {
    return (
        <div className="mb-8">
            {/* menu title  */}
            <h1 className="text-xl font-semibold ">{title}</h1>
            {/* menu list  */}
            <div className="mt-4 w-4/5 flex flex-col gap-2 text-gray-700">
                {/* category  */}
                {category && (
                    <div>
                        {links &&
                            links.map((link, index) => (
                                // category
                                <div
                                    key={index}
                                    className="w-full flex justify-between items-center"
                                >
                                    <Link
                                        className="hover:text-green-400 font-medium"
                                        to={"/products"}
                                    >
                                        {link}
                                    </Link>

                                    <div className="px-2 bg-gray-200 rounded-full flex justify-center items-center text-xs text-green-500 font-semibold">
                                        111
                                    </div>
                                </div>
                            ))}
                    </div>
                )}

                {/* brands  */}
                {brands && (
                    <div>
                        {links &&
                            links.map((link, index) => (
                                // brands
                                <div key={index} className="flex items-start">
                                    <div className="flex h-5 items-center">
                                        <input
                                            id="brands"
                                            name="brands"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-green-300 text-green-600 focus:ring-green-500"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <label
                                            htmlFor="brands"
                                            className="font-medium text-gray-700"
                                        >
                                            {link}
                                        </label>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}

                {/* rating  */}
                {rating && (
                    <div className="pl-0">
                        {[5, 4, 3, 2, 1].map((star) => (
                            <li
                                style={{
                                    cursor: "pointer",
                                    listStyleType: "none",
                                    margin: "2px 0",
                                }}
                                key={star}
                            >
                                <Rating
                                    initialRating={star}
                                    fullSymbol={
                                        <AiFillStar color="#FDBC15" size={22} />
                                    }
                                    emptySymbol={<AiOutlineStar size={22} />}
                                    readonly
                                />
                            </li>
                        ))}
                    </div>
                )}
                {/* price  */}
                {price && (
                    <div className="w-4/5">
                        <RangeSlider id="range-slider-yellow" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterMenu;
