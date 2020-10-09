import React from "react";
import { Link } from "gatsby";
import "./header.css";

const linkMenu = ["About", "Projects", "Blog", "Contact"].map((linkTitle, i) => {
    return (
        <Link key={i} className="header_link" to={`/${linkTitle.toLowerCase()}`}>{linkTitle}</Link>
    );
});

const Header = () => {
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