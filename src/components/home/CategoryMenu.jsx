import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const CategoryMenu = ({ title, links, buttonText }) => {
    return (
        <div>
            {/* menu title  */}
            <h1 className="text-xl font-semibold ">{title}</h1>
            {/* menu list  */}
            <div className="mt-4 w-max flex flex-col gap-2 text-green-500">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        className="hover:text-green-400"
                        to={"/products"}
                    >
                        {link}
                    </Link>
                ))}
            </div>
            {/* button  */}
            <button className="px-4 py-2 bg-gray-100 rounded-md mt-8 flex justify-center items-center gap-2">
                {buttonText} <BsArrowRightShort size={25} />
            </button>
        </div>
    );
};

export default CategoryMenu;
