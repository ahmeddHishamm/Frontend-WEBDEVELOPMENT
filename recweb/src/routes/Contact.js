import Navbar from "../components/Navbar";
import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Contact() {
    return (
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroimage="venice.avif"
                title="Contact us"
                url="/"

            />

            <Footer/>
        </>
    )

}

export default Contact;
