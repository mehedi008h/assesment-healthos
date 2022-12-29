import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
    return (
        <div className="w-11/12 h-10 mx-auto flex justify-between items-center border-b border-gray-100">
            {/* info */}
            <div className="flex flex-row gap-4 text-sm">
                <p className="text-green-700">Chat with us</p>
                <p className="text-gray-600">+88012345678</p>
                <p className="text-gray-600">info@ecommerce.com</p>
            </div>
            {/* link  */}
            <div className="flex flex-row gap-4 text-green-700 text-sm">
                <Link className="hover:text-green-500" to={"/admin"}>
                    Admin
                </Link>
                <Link className="hover:text-green-500" to={"/"}>
                    Blog
                </Link>
                <Link className="hover:text-green-500" to={"/"}>
                    About Us
                </Link>
                <Link className="hover:text-green-500" to={"/"}>
                    Career
                </Link>
            </div>
        </div>
    );
};

export default TopNav;
