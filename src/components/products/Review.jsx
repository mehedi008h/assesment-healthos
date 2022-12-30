import React from "react";
import ReviewCard from "../cards/ReviewCard";

const Review = ({ product }) => {
    return (
        <div className="my-12 w-11/12 mx-auto">
            <h1 className="text-2xl font-semibold">Review</h1>
            {product?.reviews.map((review) => (
                <ReviewCard key={review?._id} review={review} />
            ))}
        </div>
    );
};

export default Review;
