import React, { useState } from "react";
import { Link } from "react-router-dom";


import logoLight from "../../assets/images/logo-light.svg";
import logoDark from "../../assets/images/logo-dark.svg";

export default function Header({hasLightTheme = true}) {

    const [query, setQuery] = useState("");

    const color = hasLightTheme ? "light" : "dark";
    const logo = hasLightTheme ? logoLight : logoDark;


    return (

        <header className={"header"}>

            <Link to="/">
                <img src={logoLight} alt="logo" />
            </Link>

            <div className="search-bar">

                <input placeholder="Search" value = {query} onChange = {(event) => setQuery(event.target.value)}/>
                <Link to={"/results/" + query}>Search</Link>

            </div>

        </header>

    )
}