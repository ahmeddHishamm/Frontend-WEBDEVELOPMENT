import Navbar from "../components/Navbar";
import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function About() {
    return (
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroimage="swiss-landscape--wallpaper.jpg"
                title="About"
                url="/"


            />

            <Footer/>
        </>
    )

}

export default About;
