import React from "react";
import {
    AdminNavbar,
    Chart,
    Featured,
    Sidebar,
    Widget,
} from "../../components";

const widgets = ["user", "order", "earning", "balance"];

const Dashboard = () => {
    return (
        <div className="bg-gray-50">
            <AdminNavbar />
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    {/* sidebar  */}
                    <Sidebar />
                </div>
                <div className="col-span-10">
                    <div className="grid grid-cols-12 gap-3 p-4">
                        {/* widgets  */}
                        {widgets.map((widget, i) => (
                            <div key={i} className="col-span-3">
                                <Widget type={widget} />
                            </div>
                        ))}

                        {/* charts  */}
                        <div className="col-span-4">
                            <Featured />
                        </div>
                        <div className="col-span-8">
                            <Chart
                                title="Last 12 Months (Revenue)"
                                aspect={3 / 1}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
