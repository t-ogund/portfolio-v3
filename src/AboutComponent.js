import React from 'react';
import { Col, Row } from 'reactstrap';
import Navbar_Component from "./Navbar";
import Footer from "./Footer";

function About(props) {
    return (
        <React.Fragment>
            <Navbar_Component />
            <div className="container-fluid about-row">
                <Row>

                    <Col className="about-text" md={6}>
                        <p>Hi, my name is Toye Ogundepo. I'm a web developer, specializing in JavaScript and React, who likes bringing websites and applications to life. I enjoy taking on new challenges and finding solutions to complex problems. If you are in need of a website or web application, feel free to contact me.</p>
                    </Col>
                    <Col className="about-image" md={6}>
                    </Col>
                </Row>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default About