import React from "react";
import { Link } from "react-router-dom";

const Table = ({ heads, link }) => {
    return (
        <div className="my-4 border-2 rounded-md p-2">
            <div className="grid grid-cols-12 gap-2">
                {/* head  */}
                {heads.map((head, i) => (
                    <div
                        key={i}
                        className={`col-span-${head.col} border-r-2 font-semibold`}
                    >
                        {head.title}
                    </div>
                ))}
                <hr className="col-span-12" />
                {/* content  */}
                <div className="col-span-1">Id</div>
                <div className="col-span-3">Name</div>
                <div className="col-span-3">Email</div>
                <div className="col-span-3">Phone</div>
                <div className="col-span-2">
                    <Link
                        to={`/admin/${link}/2`}
                        className="border-2 border-green-400 text-green-600 px-2 rounded-md font-semibold"
                    >
                        View
                    </Link>
                    <button className="border-2 border-red-400 text-red-600 px-2 rounded-md font-semibold ml-2">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;
