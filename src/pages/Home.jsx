import React from "react";
import Category from "../components/home/Category";
import Products from "../components/home/Products";
import Navbar from "../components/navbar/Navbar";

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
