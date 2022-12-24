import React from "react";

const ReviewCard = () => {
    return (
        <div className="my-4 w-2/5">
            <div className="flex flex-row items-start gap-2">
                <div className="h-10 w-12 bg-yellow-400 rounded-full">
                    <img src="" alt="" />
                </div>

                <div>
                    <h3 className="text-base font-semibold">User Name</h3>
                    <div className="border-2 rounded-md p-2 mt-2">
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Qui, enim.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
