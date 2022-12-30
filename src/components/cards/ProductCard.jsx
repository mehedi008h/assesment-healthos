import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ProductCard = ({ product, rating }) => {
    return (
        <Link to={`/product/${1}`}>
            <div className="border-2 rounded-md p-2 relative">
                {/* img  */}
                <div className="w-full h-48 rounded-md">
                    <img
                        className="h-full w-full object-cover rounded-md"
                        src={product?.images[0]?.url}
                        alt=""
                    />
                </div>
                {/* info */}
                <div className="mt-3">
                    <h1 className="text-lg">
                        {product?.name.substring(0, 30)}
                    </h1>
                    <p className="text-sm text-gray-500">
                        {product?.description.substring(0, 50)}
                    </p>

                    {/* rating for product page */}
                    {rating && (
                        <div className="mt-2">
                            <Rating
                                initialRating={product?.ratings}
                                fullSymbol={
                                    <AiFillStar color="#FDBC15" size={22} />
                                }
                                emptySymbol={
                                    <AiOutlineStar color="gray" size={22} />
                                }
                                readonly
                            />
                        </div>
                    )}
                    <div className="flex justify-between my-2 items-center">
                        <p className="text-lg font-semibold font-roboto text-green-500">
                            {product?.price} BDT
                        </p>
                        <button className="px-2 py-1 bg-black text-white text-sm rounded-md flex justify-center items-center gap-2">
                            Add to cart <BiCart size={20} />
                        </button>
                    </div>
                </div>

                {/* discount  */}
                <div className="bg-blue-200 px-3 py-1 rounded-full text-xs font-semibold absolute top-5 left-5">
                    20 %
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
