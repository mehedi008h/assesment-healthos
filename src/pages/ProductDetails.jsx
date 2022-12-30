import React from "react";
import { useParams } from "react-router-dom";
import { useSingleProductQuery } from "../app/service/productServices";
import { DetailsCard, ImageCard, Loading, Navbar, Review } from "../components";
import ProductSlider from "../components/products/ProductSlider";

const ProductDetails = () => {
    // fetching parameter
    const { id } = useParams();

    //fetching product details
    const { data, isLoading } = useSingleProductQuery({
        id,
    });

    return (
        <div>
            <Navbar />
            <div className="w-11/12 mx-auto my-6">
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                {/* image  */}
                                <ImageCard product={data?.product} />
                            </div>
                            <div className="col-span-6">
                                {/* info  */}
                                <DetailsCard product={data?.product} />
                            </div>
                        </div>
                        {/* releted product  */}
                        <div className="my-6 w-11/12 mx-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h1 className="text-2xl font-semibold">
                                    Releted Product
                                </h1>
                                <button className="text-green-400">
                                    Seel All
                                </button>
                            </div>
                            <ProductSlider view={4} />
                        </div>
                        {/* review section  */}
                        <Review product={data?.product} />
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
