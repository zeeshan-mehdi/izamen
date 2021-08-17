
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

function Testimonials(props) {
    const { classes } = props;
    let [name, setname] = useState("");
    let [reference, setreference] = useState("");
    let [details, setdetails] = useState("");
    let [image, setimage] = useState("");
    function submittestimonial() {
        try {

            axios.post(globalvariables.data.Basicapi + "createTestimonial",
                {

                    'name': name,
                    'refrence': reference,
                    'details': details,

                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(async (response) => {
                    console.log("Testimonial added successfully", response);
                    setreference("");
                    setname("");
                    setdetails("");
                    toast.success(' Testimonial Added Successfully', {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
                .catch(error => {
                    alert("in catch of axios while submitting Testimonial", error.toString());

                });
        } catch (error) {

            alert("in try catch while submitting Testimonial", error.toString());

        }
    }

    return (
        <Container>
            <h4>Add Testimonial</h4>

            <Col md={{ span: 8, offset: 2 }}>
                <Row>
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Name" onChange={(event) => { setname(event.target.value) }} />

                </Row>
                <Row>
                    <label>Reference/URL/Profile Link</label>
                    <input type="text" name="reference" className="form-control" placeholder="URL/Linkedin/Facebook/Any Profile" onChange={(event) => { setreference(event.target.value) }} />

                </Row>
                <Row>
                    <label>Description</label>
                    <input type="text" name="Details" className="form-control" placeholder="Details" onChange={(event) => { setdetails(event.target.value) }} />

                </Row>
                {/* <Row>
                    <label>Image</label>
                    <input type="text" name="image" className="form-control" placeholder="image" onChange={(event) => { setimage(event.target.value)) }} />

                </Row> */}
                <Row style={{ marginTop: '2.5%' }}>
                    <Col md={{ span: 4, offset: 4 }}>
                        <button className="btn-custom secondary btn-block" onClick={submittestimonial}>Submit</button>

                    </Col>
                </Row>
            </Col>

            <ToastContainer />

        </Container>
    );
}



export default compose(
    withStyles(Styles)
)(Testimonials);
