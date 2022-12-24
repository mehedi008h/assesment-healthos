import React from "react";
import { BiCart } from "react-icons/bi";
import { bannerbg1 } from "../../assets/image";

const ProductCard = () => {
    return (
        <div className="border-2 rounded-md p-2 relative">
            {/* img  */}
            <div className="w-full h-48 border-2 rounded-md">
                <img
                    className="h-full w-full object-cover"
                    src={bannerbg1}
                    alt=""
                />
            </div>
            {/* info */}
            <div className="mt-3">
                <h1 className="text-lg">Product Title</h1>
                <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex justify-between my-2 items-center">
                    <p className="text-lg font-semibold font-roboto text-green-500">
                        50.0 BDT
                    </p>
                    <button className="px-2 py-1 bg-black text-white text-sm rounded-md flex justify-center items-center gap-2">
                        Add to cart <BiCart size={20} />
                    </button>
                </div>
            </div>

            {/* discount  */}
            <div className="bg-blue-200 px-3 py-1 rounded-full text-xs absolute top-5 left-5">
                20 %
            </div>
        </div>
    );
};

export default ProductCard;
