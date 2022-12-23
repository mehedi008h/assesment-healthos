import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiCart, BiUser, BiSearchAlt } from "react-icons/bi";

// category data for search
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

const SearchBar = () => {
    // state
    const [category, setCategory] = useState("");
    const [searchInput, setSearchInput] = useState("");

    console.log("Category :", category);
    console.log("Search Input :", searchInput);
    return (
        <div className="w-11/12 h-20 mx-auto flex justify-between items-center">
            {/* logo */}
            <div>
                <h1 className="text-3xl font-roboto font-bold">Logo</h1>
            </div>
            {/* search */}
            <div className="flex flex-row  border-2 border-gray-200 rounded-md px-2 py-1">
                <select
                    className="outline-none text-sm font-semibold"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">All categories </option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <input
                    className="px-4 py-1 w-full outline-none text-gray-500"
                    type="text"
                    name="searchInput"
                    placeholder="Search products ..."
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <BiSearchAlt className="text-gray-400" size={30} />
            </div>
            {/* link  */}
            <div className="flex flex-row gap-4">
                <Link
                    className="h-12 w-12 flex justify-center items-center border-2 rounded-full hover:text-green-500"
                    to={"/"}
                >
                    <BiUser size={25} />
                </Link>
                <Link
                    className="h-12 w-12 flex justify-center items-center border-2 rounded-full hover:text-green-500 hover:border-green-300 relative"
                    to={"/"}
                >
                    <BiCart size={25} />
                    <div className="h-6 w-6 flex justify-center items-center rounded-full bg-amber-500 text-white text-sm font-semibold font-roboto absolute -top-1.5 -right-1.5">
                        1
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SearchBar;
