import React from "react";
import { Link } from "gatsby";
import "./header.css";


const Header = () => {
    const linkMenu = ["Projects", "Blog"].map((linkTitle, i) => {
        return (
            <Link key={i} className="header_link" to={`/${linkTitle.toLowerCase()}`}>{linkTitle}</Link>
        );
    });
    
    return (
        <header>
            <Link to="/" id="header_site_name" className="header_link">Logo</Link>

            <nav id="header_menu">
                {linkMenu}
            </nav>
        </header>
    );
};

export default Header;