import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ProductTable = ({ products }) => {
    return (
        <div className="my-4 border-2 rounded-md p-2">
            <div className="grid grid-cols-12 gap-2">
                {/* head  */}
                <div className="col-span-3 border-r-2 font-semibold">
                    Product ID
                </div>
                <div className="col-span-3 border-r-2 font-semibold">
                    Product Name
                </div>
                <div className="col-span-2 border-r-2 font-semibold">
                    Price (BDT)
                </div>
                <div className="col-span-2 border-r-2 font-semibold">
                    Stcok (PCS)
                </div>
                <div className="col-span-2 font-semibold">Action</div>
                <hr className="col-span-12" />
                {/* content  */}
                {products?.map((product) => (
                    <Fragment key={product?._id}>
                        <div className="col-span-3 border-r-2">
                            {product?._id}
                        </div>
                        <div className="col-span-3 border-r-2">
                            {product?.name}
                        </div>
                        <div className="col-span-2 border-r-2">
                            {product?.price}
                        </div>
                        <div className="col-span-2 border-r-2">
                            {product?.stock}
                        </div>
                        <div className="col-span-2">
                            <Link
                                to={`/admin/product/${product?._id}`}
                                className="border-2 border-green-400 text-green-600 px-2 rounded-md font-semibold"
                            >
                                View
                            </Link>
                            <button className="border-2 border-red-400 text-red-600 px-2 rounded-md font-semibold ml-2">
                                Delete
                            </button>
                        </div>
                        <hr className="col-span-12" />
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default ProductTable;
