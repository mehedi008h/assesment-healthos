import React from "react";
import ProductCard from "../cards/ProductCard";
import CategoryMenu from "./CategoryMenu";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Keyboard, Mousewheel, Navigation } from "swiper";

const categoryLink = [
    "Featured",
    "Footwear",
    "Accessories",
    "Clothing",
    "Beauty/Health",
    "Sports",
    "Outdoor",
];

const Products = () => {
    return (
        <div className="w-11/12 mx-auto my-28">
            <div className="grid grid-cols-12 gap-4">
                {/* menu  */}
                <div className="col-span-2">
                    <CategoryMenu
                        title="Best Selling Product"
                        links={categoryLink}
                        buttonText="More Products"
                    />
                </div>
                {/* collection banner  */}
                <div className="col-span-10">
                    {/* <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-4">
                            <ProductCard />
                        </div>
                        <div className="col-span-4">
                            <ProductCard />
                        </div>
                        <div className="col-span-4">
                            <ProductCard />
                        </div>
                    </div> */}

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Products;
