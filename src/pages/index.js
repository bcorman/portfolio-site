import React from "react";
import Header from "../components/header/header";
import About from "../components/about/about";
import "./index.css";
export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <About />
            </main>
        </div>
    );
}
