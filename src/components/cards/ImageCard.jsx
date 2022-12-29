import React, { useState } from "react";
import { bannerbg2 } from "../../assets/image";

const ImageCard = () => {
    const [imgIndex, setImgIndex] = useState(0);
    console.log(imgIndex);
    return (
        <div>
            <div className="w-4/5 mx-auto">
                <img
                    className="h-full w-full object-cover rounded-md"
                    src={bannerbg2}
                    alt=""
                />
            </div>

            {/* image container  */}
            <div className="w-4/5 mx-auto flex flex-row flex-wrap mt-4">
                <div
                    className="h-20 w-20 rounded-md bg-gray-500 cursor-pointer"
                    onClick={() => setImgIndex(1)}
                ></div>
            </div>
        </div>
    );
};

export default ImageCard;
