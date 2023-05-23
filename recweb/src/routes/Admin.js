import Navbar from "../components/Navbar";
import React from "react";
import body from "../components/Destinations"
import Footer from "../components/Footer";
import Destinations from "../components/Destinations";
import CrudForm from "../components/CrudForm";


function Admin() {
    return (
        <>
            <Navbar/>
            <div style={{ paddingTop: "64px" }}>
                <CrudForm />
            </div>
            <Footer/>
        </>
    )

}
export default Admin;
