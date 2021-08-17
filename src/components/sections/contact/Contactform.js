import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import globalvariables from "../../../globalvariables";
import axios from 'axios';
import nodemailer from 'nodemailer';
class Contactform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phoneno: "",
            message: "",

        }
    }
    async submitcontactform() {
        if (this.state.name == "" || this.state.message == "" ||this.state.email == "" || this.state.phoneno == "") {
            alert('Please fill name, message, email and Contact number');
        }
        else {
            const headers = {
                "Content-Type": 'application/json',
            };
            let data = {
                'name': this.state.name,
                'email': this.state.email,
                'message': this.state.message,
                'contactNo': this.state.phoneno

            };
            console.log('====================================');
            console.log("data",data);
            console.log('====================================');
            await axios
                .post(globalvariables.data.Basicapi + "addContactQuery", data, {
                    headers: headers,
                })
                .then(() => {

                    this.setState({name:"",email:"",phoneno:"",message:""})
                })
                .catch((error) => {
                    // console.log(error);
                    alert(error.toString());
                });
        }

    }
    render() {
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-lg-30">
                            <div className="acr-locations bg-bottom bg-norepeat" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/misc/bldg.png)" }}>
                                <img src={process.env.PUBLIC_URL + "/assets/img/contact.jpg"} alt="" />
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="acr-location">
                                            <h5>New York</h5>
                                            <h5>USA</h5>
                                            <div className="acr-location-address">
                                                <p>Cecilia Chapman 711-2880 Nulla St.</p>
                                                <Link to="tel:+123456789">(478) 339 120</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="acr-location">
                                            <h5>Tbilsi</h5>
                                            <h5>Georgia</h5>
                                            <div className="acr-location-address">
                                                <p>Aaron Hawkins 5587 Nunc. Avenue</p>
                                                <Link to="tel:+123456789">(134) 984 438</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="acr-location">
                                            <h5>Moscow</h5>
                                            <h5>Russia</h5>
                                            <div className="acr-location-address">
                                                <p>Lawrence Moreno 935-9940 Tortor. Street</p>
                                                <Link to="tel:+123456789">(443) 893 109</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="acr-location">
                                            <h5>Cairo</h5>
                                            <h5>Egypt</h5>
                                            <div className="acr-location-address">
                                                <p>Aaron Hawkins 5587 Nunc. Avenue</p>
                                                <Link to="tel:+123456789">(009) 338 148</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap section-header">
                                <h5 className="custom-primary">Contact Us</h5>
                                <h2 className="title">Got Any Questions?</h2>
                            </div>
                            <div className="comment-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label><span style={{ color: 'red' }}>*</span>Full Name</label>
                                            <input type="text" className="form-control" placeholder="Full Name" name="fname" onChange={(event) => { this.setState({ name: event.target.value }) }} />
                                        </div>
                                        {/* <div className="col-md-6 form-group">
                                            <label>Subject</label>
                                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                                        </div> */}
                                        <div className="col-md-6 form-group">
                                            <label> <span style={{ color: 'red' }}>*</span>Phone Number</label>
                                            <input type="text" className="form-control" placeholder="Phone Number" name="phone" onChange={(event) => { this.setState({ phoneno: event.target.value }) }} />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label><span style={{ color: 'red' }}>*</span>Email Address</label>
                                            <input type="email" className="form-control" placeholder="Email Address" name="email" onChange={(event) => { this.setState({ email: event.target.value }) }} />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <label><span style={{ color: 'red' }}>*</span>Your Message</label>
                                            <textarea className="form-control" placeholder="Type your message..." name="comment" rows={7} onChange={(event) => { this.setState({ message: event.target.value }) }} />
                                        </div>
                                    </div>
                                    <button className="btn-custom primary" onClick={() => {
                                        this.submitcontactform();
                                    }}>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactform;