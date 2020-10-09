import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./about.css";
const About = () => {
    return (
        <section className="about_section">
            <h1>Ben Corman</h1>
            <p>Ben Corman is a web developer and educator from the San Francisco Bay Area. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ul className="contact_list">
                <li>
                    <a href="https://www.twitter.com/bencorman">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/bcorman">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/benjaminscorman/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default About;