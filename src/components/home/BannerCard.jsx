import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const BannerCard = ({ img, title }) => {
    return (
        <div className="bg-gray-200 h-80 rounded-md relative">
            {/* img  */}
            <img
                className="w-full h-full rounded-md object-cover"
                src={img}
                alt=""
            />
            {/* info  */}
            <div className="h-72 mt-auto flex flex-col justify-between py-4 absolute top-0 left-4">
                <div className="mt-10">
                    <h5 className="text-lg uppercase font-semibold text-gray-500">
                        Available in Store & Online
                    </h5>
                    <h1 className="text-5xl font-bold mt-1 text-white font-lobster tracking-widest">
                        {title}
                    </h1>
                </div>
                <button className="px-4 py-1 border-2 border-green-600 rounded-md flex items-center gap-2 w-max text-base font-roboto">
                    Shop Now
                    <BsArrowRightShort className="text-green-500" size={25} />
                </button>
            </div>
        </div>
    );
};

export default BannerCard;
