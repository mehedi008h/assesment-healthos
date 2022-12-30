import React, { Fragment } from "react";

const TransationTable = ({ transations }) => {
    return (
        <div className="my-4 border-2 rounded-md p-2">
            <div className="grid grid-cols-12 gap-2">
                {/* head  */}
                <div className="col-span-2 border-r-2 font-semibold">
                    Transation ID
                </div>
                <div className="col-span-2 border-r-2 font-semibold">
                    Product ID
                </div>
                <div className="col-span-3 border-r-2 font-semibold">Date</div>
                <div className="col-span-3 border-r-2 font-semibold">
                    Amount
                </div>
                <div className="col-span-2 font-semibold">Action</div>
                <hr className="col-span-12" />
                {/* content  */}
                {transations?.map((transation) => (
                    <Fragment key={transation?._id}>
                        <div className="col-span-2 border-r-2">
                            {transation?.id}
                        </div>
                        <div className="col-span-2 border-r-2">
                            {transation?.pId}
                        </div>
                        <div className="col-span-3 border-r-2">
                            {transation?.date}
                        </div>
                        <div className="col-span-3 border-r-2">
                            {transation?.amount}
                        </div>
                        <div className="col-span-2">
                            <button className="border-2 border-green-400 text-green-600 px-2 rounded-md font-semibold">
                                View
                            </button>
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

export default TransationTable;
