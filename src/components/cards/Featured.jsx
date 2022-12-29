import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

const Featured = () => {
    return (
        <div className="bg-white shadow rounded-md p-2">
            <div>
                <h1 className="text-lg font-semibold text-gray-500">
                    Total Revenue
                </h1>
                {/* <MoreVertIcon fontSize="small" /> */}
            </div>
            <div className="p-5 flex flex-col items-center justify-center gap-4">
                <div className="w-28 h-28">
                    <CircularProgressbar
                        value={59}
                        text={"59%"}
                        strokeWidth={5}
                    />
                </div>
                <p className="text-base font-semibold text-gray-500">
                    Total sales made today
                </p>
                <p className="text-3xl">$420</p>
                <p className="font-light text-sm text-gray-500 text-center">
                    Previous transactions processing. Last payments may not be
                    included.
                </p>
                <div className="w-full flex items-center justify-between">
                    <div className="text-center">
                        <div className="text-sm text-gray-500">Target</div>
                        <div className="flex items-center mt-2 text-sm text-red-500">
                            <GoArrowSmallDown size={22} />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-sm text-gray-500">Last Week</div>
                        <div className="flex items-center mt-2 text-sm text-green-500">
                            <GoArrowSmallUp size={22} />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-sm text-gray-500">Last Month</div>
                        <div className="flex items-center mt-2 text-sm text-green-500">
                            <GoArrowSmallUp size={22} />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
