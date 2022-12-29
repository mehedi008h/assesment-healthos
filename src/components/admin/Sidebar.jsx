import React from "react";
import { BiUser } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { GrList, GrSystem } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";
import { FaHeadSideVirus } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="border-r-2 py-2 sidebar">
            <div>
                {/* main  */}
                <h3 className="uppercase text-gray-500 font-semibold pl-6">
                    Main
                </h3>
                <div className="flex items-center gap-3 mt-3 pl-6 py-2 hover:bg-gray-100 transition-all rounded-l-full">
                    <RxDashboard size={22} />
                    <Link className="text-lg font-medium" to="/admin">
                        Dashboard
                    </Link>
                </div>
                {/* lists  */}
                <h3 className="uppercase text-gray-500 font-semibold pl-6 mt-4">
                    Lists
                </h3>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3 mt-3 pl-6 py-2 hover:bg-gray-100 transition-all rounded-l-full">
                        <BiUser size={22} />
                        <Link className="text-lg font-medium " to="/admin">
                            Customers
                        </Link>
                    </div>
                    <div className="flex items-center gap-3 pl-6 py-2 hover:bg-gray-100 transition-all rounded-l-full">
                        <GrList size={22} />
                        <Link className="text-lg font-medium " to="/admin">
                            Products
                        </Link>
                    </div>
                    <div className="flex items-center gap-3 pl-6 py-2 hover:bg-gray-100 transition-all rounded-l-full">
                        <TbListDetails size={22} />
                        <Link className="text-lg font-medium " to="/admin">
                            Orders
                        </Link>
                    </div>
                    <div className="flex items-center gap-3 pl-6 py-2 hover:bg-gray-100 transition-all rounded-l-full">
                        <CiDeliveryTruck size={22} />
                        <Link className="text-lg font-medium " to="/admin">
                            Delivery
                        </Link>
                    </div>
                </div>
                {/* lists  */}
                <h3 className="uppercase text-gray-500 font-semibold pl-6 mt-4">
                    Service
                </h3>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3 mt-3 pl-6 py-2 hover:bg-gray-100 transition-all rounded-l-full">
                        <GrSystem size={22} />
                        <Link className="text-lg font-medium " to="/admin">
                            System Health
                        </Link>
                    </div>
                    <div className="flex items-center gap-3 pl-6 py-2 hover:bg-gray-100 transition-all rounded-l-full">
                        <FaHeadSideVirus size={22} />
                        <Link className="text-lg font-medium " to="/admin">
                            Logs
                        </Link>
                    </div>
                    <div className="flex items-center gap-3 pl-6 py-2 hover:bg-gray-100 transition-all rounded-l-full">
                        <AiOutlineSetting size={22} />
                        <Link className="text-lg font-medium " to="/admin">
                            Settings
                        </Link>
                    </div>
                </div>
            </div>
            {/* bottom  */}
            <div className="mt-auto px-4">
                <button
                    className="w-full py-2 flex justify-center items-center px-5 text-white font-medium gap-3 rounded-md"
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}
                >
                    <AiOutlineLogout size={20} /> Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
