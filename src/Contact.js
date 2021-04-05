import React from 'react';
import { Button, Col, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
// import axios from "axios";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: ""
        })   

        const { firstName, lastName, email, phoneNumber, message } = this.state

        

        // const form = await axios.post("/api/form", {
        //     firstName,
        //     lastName,
        //     email,
        //     phoneNumber,
        //     message
        // })

        console.log(this.state)
    }

    render() {
        return(
            <div className="container-fluid bg-dark handshake">
                <div className="row" id="contact">
                    <div className="col d-flex justify-content-center mt-5">
                        <h2 className="contact-header">Contact Me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <h3 className="contact-header">Let's bring your ideas to life!</h3>
                    </div>
                </div>

                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-sm-12 d-flex justify-content-center">
                            <Form onSubmit={this.handleSubmit} className="col-xs-6 col-sm-8 col-md-8 mb-3 form-style" model="feedbackForm">
                                <Row className="form-group">
                                    <Label htmlFor="firstName" md={2}>First</Label>
                                    <Col md={10}>
                                        <Input style={{backgroundColor: "transparent", color: "white"}} className="input" type="text" name="firstName" initialvalue="" placeholder="First Name" onChange={this.handleChange} 
                                        required value={this.state.firstName}/>
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Label htmlFor="lastName" md={2}>Last</Label>
                                    <Col md={10}>
                                        <Input style={{backgroundColor: "transparent", color: "white"}} type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} 
                                        required value={this.state.lastName} />
                                    </Col>
                                </Row>
                                
                                <Row className="form-group">
                                    <Label htmlFor="phoneNumber" md={2}>Phone</Label>
                                    <Col md={10}>
                                        <Input style={{backgroundColor: "transparent", color: "white"}} type="text" name="phoneNumber" placeholder="000-000-0000" onChange={this.handleChange} pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                                        value={this.state.phoneNumber} />
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Label htmlFor="email" md={2}>E-Mail</Label>
                                    <Col md={10}>
                                        <Input style={{backgroundColor: "transparent", color: "white"}} type="email" name="email" placeholder="contact@mail.com" onChange={this.handleChange} 
                                        value={this.state.email} required />
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Label for="message" md={2}>Message</Label>
                                    <Col md={10}>
                                        <Input style={{backgroundColor: "transparent", color: "white"}} type="textarea" name="message" placeholder="Type your message here..." onChange={this.handleChange} 
                                        value={this.state.message} required />
                                    </Col>
                                </Row>
                                
                                <Row>
                                    <Col className="d-flex justify-content-center">
                                        <Button className="submit-button" type="submit">Submit</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                
                </div>

            </div>
        )
    }
}

export default Contact