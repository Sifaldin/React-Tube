import React from "react";
import { Link } from "react-router-dom";


import logoLight from "../../assets/images/logo-light.svg";

export default function Header() {
    return (

        <header className={"header"}>

            <Link to="/">
                <img src={logoLight} alt="logo-image" />
            </Link>

            <div className="search-bar">
                <input placeholder="Search" />
                <Link to="/search-page">Search</Link>
            </div>

        </header>

    )
}