import React from 'react';
import projects from './project-object';
import ReactGA from "react-ga";
import Event from "./Tracking";

class Card extends React.Component {
    constructor(props) {
        super(props);


        this.projectViewer = this.projectViewer.bind(this);

        const trackingId = "UA-33292644-2";
        ReactGA.initialize(trackingId);
    }

    projectViewer() {
        ReactGA.event({
            category: "project tracker",
            action: "viewed project"
        })
    }

    render() {
        return(
            <React.Fragment>
                <div class="card" style={{width: "18em"}}>
                        <img src={this.props.image} class="card-img-top layer" alt="..."/>
                        <div class="card-img-overlay"></div>
                    <div class="card-body">
                        <p style={{textAlign: "center", fontWeight: "500", fontSize: "1.2rem"}}class="card-text">{this.props.title}</p>
                        <p style={{textAlign: "center"}}>{this.props.tech}</p>
                        <div class="btn-group d-flex justify-content-between" role="group" aria-label="Basic example">
                            <button onClick={ ()=> Event(this.props.category, this.props.action, this.props.label)} type="button" class="btn btn-secondary project-btn" style={{width: "45%"}}><a href={this.props.link} target="_blank" id="project-link">Project</a></button>
                            <button type="button" class="btn btn-secondary project-btn" style={{width: "45%"}}><a href={this.props.github} target="_blank" id="github-link">Github</a></button>
                        </div>

                    </div>
                </div>

                
            </React.Fragment>
        )
    }
}

export default Card

