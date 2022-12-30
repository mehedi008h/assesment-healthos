import React, { useEffect } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotals } from "../app/features/cartSlice";
import CartCard from "./cards/CartCard";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    return (
        <div className="my-4 px-2">
            <h1 className="text-xl font-semibold">
                Cart <span>({cart?.cartItems.length} items)</span>
            </h1>
            <hr className="my-2" />
            <div className="my-2 overflow-y-scroll" style={{ height: "76vh" }}>
                {cart?.cartItems.length === 0 ? (
                    <div>
                        <h1>Empty</h1>
                    </div>
                ) : (
                    <div>
                        {cart.cartItems &&
                            cart.cartItems.map((cartItem, i) => (
                                <CartCard
                                    cartItem={cartItem}
                                    key={i}
                                    order={false}
                                />
                            ))}
                    </div>
                )}
            </div>

            <hr />
            {/* checkout  */}
            <div className="flex flex-row justify-between my-3">
                <h3 className="text-xl font-semibold">
                    Total:{" "}
                    <span className="text-green-600">
                        {cart?.cartTotalAmount} BDT
                    </span>
                </h3>
                <Link
                    to="/checkout"
                    className="bg-green-500 hover:bg-green-600 transition-all text-white px-2 py-1 rounded-md flex items-center gap-2"
                >
                    Checkout <HiArrowSmRight size={25} />
                </Link>
            </div>
        </div>
    );
};

export default Cart;
