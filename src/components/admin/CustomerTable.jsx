import React from "react";

const CustomerTable = () => {
    return (
        <div className="my-4 border-2 rounded-md p-2">
            <div className="grid grid-cols-12 gap-2">
                {/* head  */}
                <div className="col-span-1 border-r-2 font-semibold">Id</div>
                <div className="col-span-3 border-r-2 font-semibold">Name</div>
                <div className="col-span-3 border-r-2 font-semibold">Email</div>
                <div className="col-span-3 border-r-2 font-semibold">Phone</div>
                <div className="col-span-2 font-semibold">Action</div>
                <hr className="col-span-12" />
                {/* content  */}
                <div className="col-span-1">Id</div>
                <div className="col-span-3">Name</div>
                <div className="col-span-3">Email</div>
                <div className="col-span-3">Phone</div>
                <div className="col-span-2">
                    <button className="border-2 border-green-400 text-green-600 px-2 rounded-md font-semibold">
                        View
                    </button>
                    <button className="border-2 border-red-400 text-red-600 px-2 rounded-md font-semibold ml-2">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomerTable;
