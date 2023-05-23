import Navbar from "../components/Navbar";
import React from "react";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Trip from "../components/OurTrips";
import OurTrips from "../components/OurTrips";
import Footer from "../components/Footer";
import FlightSearchForm from "../components/FlightSearchForm";

function Home() {
    return (
        <>


            <Navbar/>
            <Hero

                cName="hero"
                heroimage="photo-1678806525080-a3ef276e954d.webp"
                title="Your Adventure Starts Here!"
                text= "select Your desired Destination"

            />

            {/*<Destinations/>*/}
            <OurTrips/>
            <Footer/>


        </>
    )

}

export default Home;
