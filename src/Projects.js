import React from 'react';
import Card from  './Card';
import projects from './project-object';
import { ReactComponent as HTML } from "./html.svg";
import { ReactComponent as CSS } from "./css-5.svg";
import { ReactComponent as JS } from "./javascript.svg";
import { ReactComponent as NODEJS } from "./nodejs.svg";
import { ReactComponent as REACT } from "./react.svg";
import { ReactComponent as BOOTSTRAP } from "./bootstrap-logo.svg";
// import { FadeTransform, Fade, Stagger } from 'react-animation-components'


class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(

            // map

            <React.Fragment>
                <div className="container mt-5 mb-5 project-container">
                    <div id="tech-section">
                        {/* <Fade in> */}
                            <div className="row d-flex justify-content-center">
                                    <div className="col-sm-3 tech-section d-flex justify-content-center">
                                        <HTML style={{height: 150, width: 150}}/>
                                    </div>
                                <div className="col-sm-3 tech-section d-flex justify-content-center">
                                    <CSS style={{height: 150, width: 150}}/>
                                </div>
                                <div className="col-sm-3 tech-section d-flex justify-content-center">
                                    <JS style={{height: 150, width: 150}}/>
                                </div>
                            </div>
                        {/* </Fade> */}
                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-3 tech-section d-flex justify-content-center">
                                <BOOTSTRAP style={{height: 95, width: 95, paddingBottom: "0px", marginTop: "35px"}}/>
                            </div>
                            <div className="col-sm-3 tech-section d-flex justify-content-center">
                                <REACT style={{height: 170, width: 170, paddingBottom: "0px"}}/>
                            </div>
                            <div className="col-sm-3 tech-section d-flex justify-content-center">
                                <NODEJS style={{height: 170, width: 170, paddingBottom: "0px"}}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row" id="projects">
                        <div className="col-md-12 d-flex justify-content-center mb-5">
                            <h2 className="project-header">Projects</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-3 d-flex justify-content-center">
                            <Card title="E-Commerce Store" tech="Built with Bootstrap, JavaScript, AJAX" image="./e-commerce4.jpg" link="https://t-ogund.github.io/e-commerce-shoe-store/index.html" github="https://github.com/t-ogund/e-commerce-shoe-store" googleTracker=""
                            projectViewer="Viewed Project" category="Viewed Project" action="Clicked E-Commerce Store" label="E-Commerce"/>
                        </div>
                        <div className="col-lg-4 mb-3 d-flex justify-content-center">
                            <Card title="Travel Brochure Website" tech="Built with HTML, CSS, and JavaScript" image="./travel-landing.JPG"
                            link="https://t-ogund.github.io/travel-brochure/" github="https://github.com/t-ogund/travel-brochure"
                            category="Viewed Project" action="Clicked Restaurant Website" label="Restaurant"/>
                        </div>
                        <div className="col-lg-4 mb-3 d-flex justify-content-center">
                            <Card title="Restaurant Website" tech="Modern site built with Bootstrap and JavaScript" image="./restaurant-site.JPG"
                            link="https://t-ogund.github.io/restaurant-website/" github="https://github.com/t-ogund/restaurant-website"
                            category="Viewed Project" action="Clicked Restaurant Website" label="Restaurant"/>
                        </div>
                        {/* <div className="col-lg-4 mb-3 d-flex justify-content-center">
                            <Card title="Weather App" tech="Built with HTML, CSS, Javascript, AJAX, Weatherbit API" image="./weather-app.JPG"
                            link="https://t-ogund.github.io/js-weather-app/" github="https://github.com/t-ogund/js-weather-app"
                            category="Viewed Project" action="Clicked Weather App" label="Weather App"/>
                        </div>
                        <div className="col-lg-4 mb-3 d-flex justify-content-center">
                            <Card title="Starwatch" tech="Built with Bootstrap, Javascript, AJAX, NASA APOD API" image="./starwatch-standard.JPG"
                            link="https://t-ogund.github.io/star-watch/" github="https://github.com/t-ogund/star-watch" googleTracker=""
                            projectViewer="Viewed Project" category="Viewed Project" action="Clicked Starwatch" label="Starwatch"/>
                        </div> */}
                        <div className="col-lg-4 mb-3 d-flex justify-content-center">
                            <Card title="Portfolio" tech="Built with React, Bootstrap, and Node.JS" image="./portfoliov2.JPG" link="https://lit-reef-01007.herokuapp.com/" github="https://github.com/t-ogund/portfolio-new-v2"
                            category="Viewed Project" action="Clicked Portfolio" label="Portfolio"/>
                        </div>
                    </div>
                </div>
                
                
            </React.Fragment>
        )
    }
}

export default Projects