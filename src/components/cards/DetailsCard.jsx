import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import Rating from "react-rating";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const colors = ["red", "green", "gray", "white", "yellow"];
const sizes = ["S", "M", "L", "XL", "XXL"];

const DetailsCard = ({ admin }) => {
    return (
        <div>
            <h1 className="text-2xl">Product Title</h1>
            {/* rating  */}
            <div className="mt-2 flex gap-2">
                <Rating
                    initialRating={4}
                    fullSymbol={<AiFillStar color="#FDBC15" size={20} />}
                    emptySymbol={<AiOutlineStar size={20} />}
                    readonly
                />
                <div className="text-gray-500 text-sm">(1 Customer Review)</div>
            </div>
            {/* description  */}
            <p className="my-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                veniam nisi labore dignissimos deleniti autem quis voluptatem
                vitae architecto, quibusdam cum totam officiis beatae in
                repellat! Saepe asperiores impedit tempora!
            </p>

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
                        <li>Winter Collection</li>
                        <li className="text-green-600 my-2">In Stock</li>
                        <li className="my-2">Easy Fashion</li>
                        {admin && <li className="my-2">500.00</li>}
                    </ul>
                </div>
            </div>

            {/* color  */}
            <div className="my-4">
                <h3 className="text-xl font-semibold">Colors</h3>
                <div className="flex flex-row items-center mt-2 gap-4">
                    {colors.map((color, i) => (
                        <div key={i}>
                            <button
                                id={color}
                                className="h-8 w-8 rounded-full border-2 p-4"
                                style={{
                                    background: `${color}`,
                                }}
                            ></button>
                            {/* tooltip  */}
                            <Tooltip
                                anchorId={color}
                                place="bottom"
                                content={color}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* size  */}
            <div className="my-6">
                <h3 className="text-xl font-semibold">Size</h3>
                <div className="flex flex-row items-center mt-2 gap-4">
                    {sizes.map((size, i) => (
                        <div key={i}>
                            <button
                                id={size}
                                className="h-8 w-12 rounded-md border-2 p-4 flex justify-center items-center font-semibold"
                            >
                                {size}
                            </button>
                            {/* tooltip  */}
                            <Tooltip
                                anchorId={size}
                                place="top"
                                content={size}
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
                            500.00 BDT
                        </h3>
                        <p className="text-gray-500 line-through">550.00</p>
                    </div>
                    <div className="border-2 px-2 py-1 rounded-md">
                        <select
                            className="outline-none text-sm font-semibold"
                            name=""
                            id=""
                        >
                            <option value="1">Pcs</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    {/* add to cart  */}

                    <div>
                        <button className="px-2 py-2 bg-green-500 text-white text-sm rounded-md flex justify-center items-center gap-2">
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
