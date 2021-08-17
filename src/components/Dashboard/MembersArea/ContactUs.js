
/** @format */

import React, { useState, useEffect } from "react";
// import PieChart from "../common/PieCharts";
// import CustomBarChart from "../common/BarChart";
// import {
//   Box,

//   Grid,
//   makeStyles,
//   Typography,
// } from "@material-ui/core";
import { Container, Row, Col, Tab, Tabs, Modal, Card, Button } from "react-bootstrap";

import { compose } from "redux";
import { connect } from "react-redux";
// import { getOrdersDate } from "../../redux/actions/orderActions";
import { withStyles } from "@material-ui/core/styles";
import globalvariables from "../../../globalvariables";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userProfile } from '../../../redux/actions/userActions';
import AvatarEditor from 'react-avatar-editor';


const Styles = (theme) => ({
    root: {
        flexGrow: 1,
        color: "rgba(0, 0, 0, 0.54)",
    },
    root1: {
        minWidth: 275,
    },
    internal: {
        backGroundColor: "#FFFFFF",
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function ContactUs(props) {
    const { classes } = props;
    let [user, setuser] = useState({});
  
   
   

    return (
        <Container>
            <h4>Contact US</h4>

            <div className="col-lg-12">
                <div className="section-title-wrap section-header">
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
                        // this.submitcontactform();
                    }}>Send Message</button>
                </div>
            </div>


        </Container>
    );
}

function mapStateToProps(state) {
    return {
        userprofile: state.userprofile,


    };

}
const mapDispatchToProps = (dispatch) => {
    return {
        senduserprofile: (userprofile) => {
            dispatch(userProfile(userprofile));
        },
    }
}

export default compose(
    withStyles(Styles),
    connect(mapStateToProps, mapDispatchToProps))(ContactUs);
