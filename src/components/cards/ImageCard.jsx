import React, { useState } from "react";

const ImageCard = ({ product }) => {
    const [imgIndex, setImgIndex] = useState(0);
    console.log(imgIndex);
    return (
        <div>
            <div className="w-4/5 h-96 mx-auto">
                <img
                    className="h-full w-full object-cover rounded-md"
                    src={product?.images[imgIndex]?.url}
                    alt="Product"
                />
            </div>

            {/* image container  */}
            <div className="w-4/5 mx-auto flex flex-row flex-wrap gap-3 mt-4">
                {product?.images.map((image, index) => (
                    <div
                        key={index}
                        className="h-20 w-20 rounded-md bg-gray-500 cursor-pointer"
                        onClick={() => setImgIndex(index)}
                    >
                        <img
                            className="h-full w-full object-cover rounded-md"
                            src={image?.url}
                            alt="Product"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageCard;
