import React from "react";
import { useAllProductQuery } from "../app/service/productServices";
import { Navbar } from "../components";
import ProductCard from "../components/cards/ProductCard";
import FilterMenu from "../components/products/FilterMenu";
import { categories } from "../data/data";

const Products = () => {
    // featch data using redux toolkit query
    const { data, isLoading } = useAllProductQuery();

    return (
        <div>
            <Navbar />
            <div className="w-11/12 mx-auto my-6">
                <div className="grid grid-cols-12 gap-4">
                    {/* filter  */}
                    <div className="col-span-3">
                        <div className="flex flex-col gap-4">
                            {/* category */}
                            <FilterMenu
                                title="Category"
                                links={categories}
                                category={true}
                            />
                            {/* brands  */}
                            <FilterMenu
                                title="Brands"
                                links={categories}
                                brands={true}
                            />
                            {/* rating */}
                            <FilterMenu title="Ratings" rating={true} />
                            {/* price  */}
                            <FilterMenu title="Price" price={true} />
                        </div>
                    </div>
                    {/* product items  */}
                    <div className="col-span-9">
                        {isLoading ? (
                            <div>
                                <h1>Loading</h1>
                            </div>
                        ) : (
                            <div className="grid grid-cols-12 gap-6">
                                {data?.products.map((product) => (
                                    <div
                                        key={product?._id}
                                        className="col-span-4"
                                    >
                                        <ProductCard
                                            product={product}
                                            rating={true}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
