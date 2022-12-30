import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

const ReviewCard = ({ review }) => {
    return (
        <div className="my-4 xl:w-2/5 lg:w-2/5 md:w-2/5 w-full">
            <div className="flex flex-row items-start gap-2">
                <div className="h-10 w-10 bg-yellow-400 rounded-full">
                    <img src="" alt="" />
                </div>

                <div>
                    <div className="text-base font-semibold flex flex-col">
                        <h1>{review?.name}</h1>
                        <Rating
                            initialRating={review?.rating}
                            fullSymbol={
                                <AiFillStar color="#FDBC15" size={20} />
                            }
                            emptySymbol={<AiOutlineStar size={20} />}
                            readonly
                        />
                    </div>
                    <div className="border-2 rounded-md p-2 mt-2">
                        <p className="text-gray-500">{review?.comment}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
