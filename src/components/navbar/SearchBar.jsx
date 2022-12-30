import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiCart, BiUser, BiSearchAlt } from "react-icons/bi";
import { HiX } from "react-icons/hi";
import Cart from "../Cart";
import { Tooltip } from "react-tooltip";
import { logo } from "../../assets/image";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../app/features/cartSlice";

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
    // cart open & close
    const [toggle, setToggle] = useState(false);

    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    console.log("Category :", category);
    console.log("Search Input :", searchInput);

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    return (
        <div className="w-11/12 h-20 mx-auto flex justify-between items-center">
            {/* logo */}
            <Link to="/">
                <div className="w-36 h-16">
                    <img className="w-full h-full" src={logo} alt="" />
                </div>
            </Link>
            {/* search */}
            <div className="xl:flex lg:flex md:flex hidden flex-row  border-2 border-gray-200 rounded-md px-2 py-1">
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
                    to={"/login"}
                >
                    <BiUser size={25} />
                </Link>
                {/* toogle cart view  */}
                <div className="relative">
                    <button
                        className="h-12 w-12 flex justify-center items-center border-2 rounded-full hover:text-green-500 hover:border-green-300 relative"
                        onClick={() => setToggle(true)}
                    >
                        <BiCart size={25} />
                        <div className="h-6 w-6 flex justify-center items-center rounded-full bg-amber-500 text-white text-sm font-semibold font-roboto absolute -top-1.5 -right-1.5">
                            {cart?.cartItems.length}
                        </div>
                    </button>

                    {toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: "easeOut" }}
                            className="cart_container xl:w-2/5 lg:w-2/5 md:w-2/5 w-full"
                        >
                            <HiX
                                className="text-red-500"
                                size={25}
                                onClick={() => setToggle(false)}
                                id="btn_close"
                            />
                            {/* tooltip  */}
                            <Tooltip
                                anchorId="btn_close"
                                place="top"
                                content="Close Cart"
                            />
                            {/* cart  */}
                            <Cart />
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
