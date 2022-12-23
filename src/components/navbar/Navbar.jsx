import React from "react";
import LinkBar from "./LinkBar";
import SearchBar from "./SearchBar";
import TopNav from "./TopNav";

const Navbar = () => {
    return (
        <div>
            <TopNav />
            <SearchBar />
            <LinkBar />
        </div>
    );
};

export default Navbar;
