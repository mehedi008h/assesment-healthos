import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSingleProductQuery } from "../../app/service/productServices";
import {
    AdminNavbar,
    DetailsCard,
    ImageCard,
    Loading,
    Sidebar,
} from "../../components";
import { productViewData } from "../../data/data";

const ProductView = () => {
    // fetching parameter
    const { id } = useParams();

    //fetching product details
    const { data, isLoading } = useSingleProductQuery({
        id,
    });
    return (
        <div className="bg-gray-50">
            <AdminNavbar />
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    {/* sidebar  */}
                    <Sidebar />
                </div>
                <div className="col-span-10 p-4">
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-12 border-2 px-2 py-2 mb-5 rounded-md p-2 bg-gray-100">
                            <div className="flex justify-between items-center">
                                {productViewData.map((viewData, i) => (
                                    <div className="flex items-center gap-3">
                                        <h1 className="text-xl">
                                            {viewData.title}:{" "}
                                        </h1>
                                        <h1 className="text-xl text-green-500 font-semibold">
                                            {viewData.amount}{" "}
                                            <span className="text-base uppercase">
                                                {viewData.type}
                                            </span>
                                        </h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {isLoading ? (
                            <Loading />
                        ) : (
                            <Fragment>
                                <div className="col-span-6">
                                    {/* image  */}
                                    <ImageCard product={data?.product} />
                                </div>
                                <div className="col-span-6">
                                    {/* info  */}
                                    <DetailsCard
                                        product={data?.product}
                                        admin={true}
                                    />
                                </div>
                            </Fragment>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
