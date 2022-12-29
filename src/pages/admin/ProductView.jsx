import React from "react";
import { AdminNavbar, DetailsCard, ImageCard, Sidebar } from "../../components";
import { productViewData } from "../../data/data";

const ProductView = () => {
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
                        <div className="col-span-6">
                            {/* image  */}
                            <ImageCard />
                        </div>
                        <div className="col-span-6">
                            {/* info  */}
                            <DetailsCard admin={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
