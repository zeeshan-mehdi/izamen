
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
import { Divider } from "@material-ui/core";


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

function Profile(props) {
    const { classes } = props;
    let [user, setuser] = useState({});
    let [contactNo, setcontactNo] = useState("");
    let [address, setaddress] = useState("");
    let [city, setcity] = useState("");
    let [country, setcountry] = useState("");
    let [postalCode, setpostalCode] = useState("");
    let [image, Setimage] = useState("");
    let [oldpass, setoldpass] = useState("");
    let [newpass, setnewpass] = useState("");
    let [newconfirmpass, setnewconfirmpass] = useState("");
    useEffect(async () => {
        try {
            let uid = localStorage.getItem("user_ID");
            const res = await axios.post(globalvariables.data.Basicapi + "getMemberOnUserID",
                {

                    'user_ID': uid
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            console.log("res from getting user", res.data);

            setuser(res.data);
            setcontactNo(res.data.contactNo)
            setaddress(res.data.address)
            setcity(res.data.city)
            setcountry(res.data.country)
            setpostalCode(res.data.postalCode)
            Setimage(res.data.img_path)

        } catch (error) {
            alert("From try catch of getting user", error.toString());

            // console.log(error);
        }

    }, []);
    function updateprofile() {
        try {
            if (contactNo != "" || address != "" || city != "" || country != "" || postalCode != "") {
                let uid = localStorage.getItem("user_ID");
                axios.post(globalvariables.data.Basicapi + "updateMember",
                    {

                        'user_ID': uid,
                        'contactNo': contactNo,
                        'address': address,
                        'city': city,
                        'country': country,
                        'postalCode': postalCode


                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                    .then(async (response) => {
                        // console.log("Updated successfully", response);
                        toast.success(' Profile Updated Added Successfully', {
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
                        alert("in catch of axios while Updating Profile", error.toString());

                    });
            }
            else {
                alert("Field is Empty");
            }

        } catch (error) {

            alert("in try catch while Updating Profile", error.toString());

        }
    }

    return (
        <Container>
            <h4>Profile</h4>

            <Col md={12}>
                <Row>
                    <Col md={{ span: 5, offset: 5 }}>
                        <AvatarEditor
                            image={image}
                            width={100}
                            height={100}
                            border={50}
                            color={[255, 255, 255, 0.6]} // RGBA
                            scale={1}
                            rotate={0}


                        />


                        <input type="file" className="form-control form-control-light" id="file-input" name="ImageStyle" onChange={(event) => {
                            console.log("IMAGE: ", event)
                            if (event.target.files[0])
                                Setimage(event.target.files[0]);
                        }} ></input>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <label>First Name</label>
                        <input type="text" value={user.firstName} disabled name="firstname" className="form-control" placeholder="First Name" />

                    </Col>
                    <Col md={6}>
                        <label>Last Name</label>
                        <input type="text" value={user.lastName} disabled name="lastname" className="form-control" placeholder="Last Name" />

                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <label>Contact Number</label>
                        <input type="text" value={contactNo} name="contactno" className="form-control" placeholder="Contact No" onChange={(event) => { setcontactNo(event.target.value) }} />

                    </Col>
                    <Col md={6}>
                        <label>Email</label>
                        <input type="text" disbaled value={user.email} name="email" className="form-control" placeholder="Email" />

                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <label>Address</label>
                        <input type="text" value={address} name="address" className="form-control" placeholder="Address" onChange={(event) => { setaddress(event.target.value) }} />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <label>City</label>
                        <input type="text" value={city} name="city" className="form-control" placeholder="City" onChange={(event) => { setcity(event.target.value) }} />
                    </Col>
                    <Col md={4}>
                        <label>Country</label>
                        <input type="text" value={country} name="country" className="form-control" placeholder="Country" onChange={(event) => { setcountry(event.target.value) }} />
                    </Col>
                    <Col md={4}>
                        <label>Postal Code</label>
                        <input type="text" value={postalCode} name="country" className="form-control" placeholder="Country" onChange={(event) => { setpostalCode(event.target.value) }} />

                    </Col>
                </Row>

                <Row style={{ marginTop: '2.5%' }}>
                    <Col md={{ span: 4, offset: 4 }}>
                        <button className="btn-custom secondary btn-block" onClick={updateprofile}>Update Profile</button>

                    </Col>
                </Row>

                <Divider style={{ marginTop: '2.5%' }} />

                <Row>
                    <Col md={6}>
                        <label> Old Password</label>
                        <input type="text" value={oldpass} name="oldpass" className="form-control" placeholder="Old Password" onChange={(event) => { setoldpass(event.target.value) }} />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <label>New Password</label>
                        <input type="text" value={newpass} name="newpass" className="form-control" placeholder="New Password" onChange={(event) => { setnewpass(event.target.value) }} />

                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <label>New Confirm Password</label>
                        <input type="text" value={newconfirmpass} name="pass" className="form-control" placeholder="Password" onChange={(event) => { setnewconfirmpass(event.target.value) }} />
                    </Col>

                </Row>
                <Row style={{ marginTop: '2.5%' }}>
                    <Col md={{ span: 4, offset: 4 }}>
                        <button className="btn-custom secondary btn-block" onClick={() => {
                            if (oldpass != "" && newpass != "" && newconfirmpass != "") {
                                if (newpass === newconfirmpass) {
                                    let uid = localStorage.getItem("user_ID");
                                    axios.post(globalvariables.data.Basicapi + "ChangePassword",
                                        {

                                            'user_ID': uid,
                                            'email': user.email,
                                            'password': oldpass,
                                            'newPassword': newconfirmpass


                                        },
                                        {
                                            headers: {
                                                'Content-Type': 'application/json',
                                            },
                                        })
                                        .then(async (response) => {
                                            console.log("change password",response)
                                        })
                                        .catch(error => {
                                            alert("Incorrect Old Password", error.toString());

                                        });
                                }
                                else{
                                    alert("New pass is not equal to cofirm new pass")
                                }
                            }
                            else {
                                alert("Old pass or newpass or Confirm new pass is empty")
                            }
                        }}>Confirm Change Pass</button>

                    </Col>
                </Row>
            </Col>

            <ToastContainer />

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
    connect(mapStateToProps, mapDispatchToProps))(Profile);
