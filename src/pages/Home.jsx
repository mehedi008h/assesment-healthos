import React from "react";
import { Category, Navbar, Products } from "../components";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Category />
            <Products />
        </div>
    );
};

export default Home;
