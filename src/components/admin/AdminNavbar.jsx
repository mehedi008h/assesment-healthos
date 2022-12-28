import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiChat2 } from "react-icons/ci";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
    return (
        <div className="grid grid-cols-12 h-14 border-b-2 items-center">
            <div className="col-span-2 border-r-2  pl-4">
                {/* logo  */}
                <Link to="/admin" className="flex gap-4">
                    <MdOutlineAdminPanelSettings size={30} />
                    <h1 className="text-2xl font-semibold">Admin</h1>
                </Link>
            </div>
            <div className="col-span-10 px-10">
                <div className="flex justify-between items-center">
                    {/* search input  */}
                    <div className="border-2 rounded-md px-2 py-1 flex flex-row w-80">
                        <input
                            className="outline-none w-full"
                            type="text"
                            placeholder="Search ..."
                        />
                        <BiSearchAlt size={20} />
                    </div>
                    {/* notification container  */}
                    <div className="flex flex-row items-center gap-6">
                        <button className=" hover:text-green-500 relative">
                            <CiChat2 size={25} />
                            <div className="h-4 w-4 flex justify-center items-center rounded-full bg-red-500 text-white text-xs font-semibold font-roboto absolute -top-1.5 -right-1.5">
                                2
                            </div>
                        </button>
                        <button className=" hover:text-green-500 relative">
                            <IoMdNotificationsOutline size={25} />
                            <div className="h-4 w-4 flex justify-center items-center rounded-full bg-red-500 text-white text-xs font-semibold font-roboto absolute -top-1.5 -right-1.5">
                                5
                            </div>
                        </button>

                        <div className="h-10 w-10 rounded-full bg-orange-500 text-white font-semibold flex justify-center items-center cursor-pointer">
                            M
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNavbar;
