import React from "react";
import { HiX } from "react-icons/hi";
import { useDispatch } from "react-redux";
import {
    addToCart,
    decreaseCart,
    removeFromCart,
} from "../../app/features/cartSlice";

const CartCard = ({ cartItem, order }) => {
    const dispatch = useDispatch();
    // remove from cart
    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    // add to cart & incress from cart
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    // decrease from cart
    const handleDecreaseCart = (item) => {
        dispatch(decreaseCart(item));
    };
    return (
        <div>
            <div className="w-full flex flex-row gap-3">
                <div className="w-20 h-20 rounded-md bg-gray-400">
                    <img
                        className="h-full w-full object-cover rounded-md"
                        src={cartItem?.images[0]?.url}
                        alt={cartItem?.name}
                    />
                </div>
                <div className="w-full">
                    <h3 className="text-xl">{cartItem?.name}</h3>
                    <div className="grid grid-cols-12 gap-3 mt-1">
                        <div className="col-span-3">
                            <p className="text-sm text-gray-400">Price</p>
                            <h5 className="font-medium text-gray-500">
                                {cartItem?.price} BDT
                            </h5>
                        </div>
                        <div className="col-span-2">
                            <p className="text-sm text-gray-400">Color</p>
                            <h5 className="font-medium text-gray-500">Red</h5>
                        </div>
                        <div className="col-span-2">
                            <p className="text-sm text-gray-400">Size</p>
                            <h5 className="font-medium text-gray-500">M</h5>
                        </div>

                        {order ? (
                            <>
                                {/* for order section  */}
                                <div className="col-span-4">
                                    <p className="text-sm text-gray-400">
                                        Total
                                    </p>
                                    <h5 className="font-medium text-gray-500">
                                        {cartItem?.price} *{" "}
                                        {cartItem?.cartQuantity} =
                                        <span className="text-green-500">
                                            {cartItem?.price *
                                                cartItem?.cartQuantity}
                                        </span>
                                    </h5>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* for cart section  */}
                                <div className="col-span-3">
                                    <p className="text-sm text-gray-400">
                                        Quantity
                                    </p>
                                    <div className="flex flex-row gap-3 w-full">
                                        <button
                                            onClick={() =>
                                                handleAddToCart(cartItem)
                                            }
                                            className="h-6 w-6 bg-green-500 flex justify-center items-center rounded-full text-white font-semibold"
                                        >
                                            +
                                        </button>
                                        <div className="font-semibold">
                                            {cartItem?.cartQuantity}
                                        </div>
                                        <button
                                            onClick={() =>
                                                handleDecreaseCart(cartItem)
                                            }
                                            className="h-6 w-6 bg-red-500 flex justify-center items-center rounded-full text-white font-semibold"
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                                {/* delete  */}
                                <div className="col-span-2">
                                    <HiX
                                        onClick={() =>
                                            handleRemoveFromCart(cartItem)
                                        }
                                        className="mt-1 cursor-pointer"
                                        color="red"
                                        size={25}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <hr className="my-4" />
        </div>
    );
};

export default CartCard;
