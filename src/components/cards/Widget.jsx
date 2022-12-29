import React from "react";
import { BiUser } from "react-icons/bi";
import { TbListDetails, TbWallet } from "react-icons/tb";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
import { GoArrowSmallUp } from "react-icons/go";

const Widget = ({ type }) => {
    let data;

    //temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <div
                        className="h-8 w-8 flex justify-center items-center rounded-md"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    >
                        <BiUser size={25} />
                    </div>
                ),
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <div
                        className="h-8 w-8 flex justify-center items-center rounded-md"
                        style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                        }}
                    >
                        <TbListDetails size={25} />
                    </div>
                ),
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <div
                        className="h-8 w-8 flex justify-center items-center rounded-md"
                        style={{
                            backgroundColor: "rgba(0, 128, 0, 0.2)",
                            color: "green",
                        }}
                    >
                        <RiMoneyCnyCircleLine size={25} />
                    </div>
                ),
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <div
                        className="h-8 w-8 flex justify-center items-center rounded-md"
                        style={{
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple",
                        }}
                    >
                        <TbWallet size={25} />
                    </div>
                ),
            };
            break;
        default:
            break;
    }
    return (
        <div className="flex justify-between p-2 rounded-md shadow bg-white">
            <div className="flex flex-col justify-between gap-2">
                <span className="text-lg font-semibold text-gray-500">
                    {data.title}
                </span>
                <span className="text-3xl">
                    {data.isMoney && "$"} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="flex flex-col justify-between items-end">
                <div className="flex items-center gap-2">
                    <GoArrowSmallUp color="green" size={25} />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
