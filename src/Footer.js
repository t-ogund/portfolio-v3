import React from 'react';
import ReactGA from "react-ga";
import { Container, Row, Col } from 'reactstrap';


class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.LinkedInViewer = this.LinkedInViewer.bind(this);
        this.GithubViewer = this.GithubViewer.bind(this);

        const trackingId = "UA-33292644-2";
        ReactGA.initialize(trackingId);
    }

    LinkedInViewer() {
        ReactGA.event({
            category: "LinkedIn",
            action: "Clicked LinkedIn",
            label: "linkedin footer"
        });
    }

    GithubViewer() {
        ReactGA.event({
            category: "Github",
            action: "Clicked Github",
            label: "github footer"
        });
    }



    render() {
        return(
            <div className="container-fluid footer">
                <div className="row footer-icons">
                    <div className="col">
                    </div>
                    <div className="col d-flex justify-content-center align-items-center mt-5">
                        <a onClick={this.LinkedInViewer()} href="https://www.linkedin.com/in/toye-ogundepo-1bb416151/" target="_blank"><i className="fab fa-linkedin mr-4"></i></a>
                        <a onClick={this.GithubViewer()} href="https://github.com/t-ogund" target="_blank"><i className="fab fa-github-square"></i></a>
                        {/* <a href="" target="_blank"><i className="fab fa-twitter-square ml-4"></i></a> */}
                    </div>
                    <div className="col d-flex justify-content-center align-items-center mt-5 back-to-top">
                    <a href="#"><i class="fas fa-chevron-up"></i></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center align-items-center mt-3">
                        <p style={{color: "white"}}><i class="far fa-copyright"></i> Toye Ogundepo 2021</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer