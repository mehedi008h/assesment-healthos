import React from "react";
import ReviewCard from "../cards/ReviewCard";

const Review = () => {
    return (
        <div className="my-12 w-11/12 mx-auto">
            <h1 className="text-2xl font-semibold">Review</h1>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
        </div>
    );
};

export default Review;
