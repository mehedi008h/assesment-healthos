import React from "react";
import { AdminNavbar, Sidebar } from "../../components";

const Dashboard = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    {/* sidebar  */}
                    <Sidebar />
                </div>
                <div className="col-span-10">
                    <h1>Dashboard</h1>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
