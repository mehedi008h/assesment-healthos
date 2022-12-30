import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import Rating from "react-rating";
import { useDispatch } from "react-redux";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { addToCart } from "../../app/features/cartSlice";

const DetailsCard = ({ product, admin }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };
    return (
        <div>
            <h1 className="text-2xl">{product?.name}</h1>
            {/* rating  */}
            <div className="mt-2 flex gap-2">
                <Rating
                    initialRating={product?.ratings}
                    fullSymbol={<AiFillStar color="#FDBC15" size={20} />}
                    emptySymbol={<AiOutlineStar size={20} />}
                    readonly
                />
                <div className="text-gray-500 text-sm">
                    ({product?.numOfReviews} Customer Review)
                </div>
            </div>
            {/* description  */}
            <p className="my-2 text-gray-600">{product?.description}</p>

            <div className="grid grid-cols-12 gap-4 mt-8">
                <div className="col-span-2">
                    <ul className="list-none text-gray-500">
                        <li className="">Category</li>
                        <li className="my-2">Stock</li>
                        <li className="my-2">Seller</li>
                        {admin && <li className="my-2">Price</li>}
                    </ul>
                </div>
                <div className="col-span-4">
                    <ul className="list-none font-medium">
                        <li>{product?.category}</li>
                        {product?.stock > 0 ? (
                            <li className="text-green-600 my-2">
                                In Stock ({product?.stock})
                            </li>
                        ) : (
                            <li className="text-red-600 my-2">Stock Out</li>
                        )}

                        <li className="my-2">{product?.seller}</li>
                        {admin && <li className="my-2">{product?.price}</li>}
                    </ul>
                </div>
            </div>

            {/* color  */}
            <div className="my-4">
                <h3 className="text-xl font-semibold">Colors</h3>
                <div className="flex flex-row items-center mt-2 gap-4">
                    {product?.colors.map((option, i) => (
                        <div key={i}>
                            <button
                                id={option.color}
                                className="h-8 w-8 rounded-full border-2 p-4"
                                style={{
                                    background: `${option.color}`,
                                }}
                            ></button>
                            {/* tooltip  */}
                            <Tooltip
                                anchorId={option.color}
                                place="bottom"
                                content={option.color}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* size  */}
            <div className="my-6">
                <h3 className="text-xl font-semibold">Size</h3>
                <div className="flex flex-row items-center mt-2 gap-4">
                    {product?.sizes.map((option, i) => (
                        <div key={i}>
                            <button
                                id={option.size}
                                className="h-8 w-12 rounded-md border-2 p-4 flex justify-center items-center font-semibold"
                            >
                                {option.size}
                            </button>
                            {/* tooltip  */}
                            <Tooltip
                                anchorId={option.size}
                                place="top"
                                content={option.size}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* price & quantity  */}
            {!admin && (
                <div className="border-2 px-3 py-2 rounded-md w-3/4 flex justify-between items-center mt-2">
                    <div>
                        <h3 className="text-2xl text-green-500 font-semibold">
                            {product?.price} BDT
                        </h3>
                    </div>

                    {/* add to cart  */}

                    <div>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="px-2 py-2 bg-green-500 text-white text-sm rounded-md flex justify-center items-center gap-2"
                        >
                            Add to cart <BiCart size={20} />
                        </button>
                    </div>
                </div>
            )}

            {admin && (
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md">
                        Update Product
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md">
                        Delete Product
                    </button>
                </div>
            )}
        </div>
    );
};

export default DetailsCard;
