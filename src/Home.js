import React from "react";
import Navbar_Component from "./Navbar";
import Splash from "./Splash";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

class Home extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Navbar_Component />
                <Splash />
                <Projects />
                <Contact />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home