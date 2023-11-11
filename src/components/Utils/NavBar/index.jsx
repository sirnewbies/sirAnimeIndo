import React from "react";

const { default: Link } = require("next/link")
import InputSearch from "./InputSearch";

const handleLinkClick = (event) => {
    event.preventDefault();
};
const NavBar = () => {
    return(
        <header>
            <div className="container">
                <div className="flex flex-col md:flex-row gap-2 justify-between md:items-center rounded bg-color-primary p-4">
                    <Link href="/" className="font-bold text-white text-2xl">sirAnimeIndo</Link>
                    <InputSearch/>
                </div>
            </div>
        </header>
    )
}

export default NavBar;