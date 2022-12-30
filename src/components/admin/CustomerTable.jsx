import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CustomerTable = ({ customers }) => {
    return (
        <div className="my-4 border-2 rounded-md p-2">
            <div className="grid grid-cols-12 gap-2">
                {/* head  */}
                <div className="col-span-3 border-r-2 font-semibold">
                    Customer ID
                </div>
                <div className="col-span-2 border-r-2 font-semibold">
                    Customer Name
                </div>
                <div className="col-span-3 border-r-2 font-semibold">Email</div>
                <div className="col-span-2 border-r-2 font-semibold">Phone</div>
                <div className="col-span-2 font-semibold">Action</div>
                <hr className="col-span-12" />
                {/* content  */}
                {customers?.map((customer) => (
                    <Fragment key={customer?._id}>
                        <div className="col-span-3 border-r-2">
                            {customer?._id}
                        </div>
                        <div className="col-span-2 border-r-2">
                            {customer?.name}
                        </div>
                        <div className="col-span-3 border-r-2">
                            {customer?.email}
                        </div>
                        <div className="col-span-2 border-r-2">
                            {customer?.phone}
                        </div>
                        <div className="col-span-2">
                            <Link
                                to={`/admin/customer/${customer?._id}`}
                                className="border-2 border-green-400 text-green-600 px-2 rounded-md font-semibold"
                            >
                                View
                            </Link>
                            <button className="border-2 border-red-400 text-red-600 px-2 rounded-md font-semibold ml-2">
                                Delete
                            </button>
                        </div>
                        <hr className="col-span-12" />
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default CustomerTable;
