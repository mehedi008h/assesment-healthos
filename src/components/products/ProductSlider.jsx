import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Keyboard, Mousewheel, Navigation } from "swiper";
import ProductCard from "../cards/ProductCard";
import { useAllProductQuery } from "../../app/service/productServices";
import Loading from "../cards/Loading";

const ProductSlider = ({ view }) => {
    // featch data using redux toolkit query
    const { data, isLoading } = useAllProductQuery();
    return (
        <div>
            <Swiper
                slidesPerView={view}
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
                {isLoading ? (
                    <Loading />
                ) : (
                    <div>
                        {data?.products.map((product) => (
                            <SwiperSlide key={product?._id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </div>
                )}
            </Swiper>
        </div>
    );
};

export default ProductSlider;
