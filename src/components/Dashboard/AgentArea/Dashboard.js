/** @format */

import React, { useState, useEffect } from "react";
// import PieChart from "../common/PieCharts";
// import CustomBarChart from "../common/BarChart";
import {
    Paper
} from "@material-ui/core";
import { Container, Row, Col, Tab, Tabs, Modal, Card, Button } from "react-bootstrap";

import { compose } from "redux";
import { connect } from "react-redux";
// import { getOrdersDate } from "../../redux/actions/orderActions";
import { withStyles } from "@material-ui/core/styles";
import Clock from 'react-live-clock';

// import { getActiveUsers } from "../../redux/actions/userActions";
// import { getTransactionDate } from "../../redux/actions/transactionActions";
// import { getFeedBackCount } from "../../redux/actions/feedbackActions";
// import { getProblemCount } from "../../redux/actions/problemActions";
// import { getSolvedProblemCount } from "../../redux/actions/solvedproblemActions";
// import { getTotalPeers, getTotalPatrons,getTotalSignups,getTotalSignupsM_F,getTotalSignupsAgeWise } from "../../redux/actions/userDashboardActions";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Loader from "../common/Loader";

import globalvariables from "../../../globalvariables";
import axios from 'axios';
import { Link } from "react-router-dom";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    AreaChart
} from 'recharts';

import { curveCardinal } from "d3-shape";

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
const cardinal = curveCardinal.tension(0.2);

function Dashboard(props) {
    const { classes } = props;
    const [propertypurposecount, Setpropertypurposecount] = useState([]);
    const [propertypurposemonthlycount, Setpropertypurposemonthlycount] = useState({});
    const [totalpropertycount, Settotalpropertycount] = useState("");


    useEffect(async () => {
        try {
            let uid = localStorage.getItem("user_ID");
            const res = await axios.post(globalvariables.data.Basicapi + "getPropertyPurposeCountOnUserID",
                {
                    user_ID: uid
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            console.log("res from getting propert on purpose counts", res.data);

            Setpropertypurposecount(res.data);
            var j = 0;
            if (res.data != null || res.data != []) {
                res.data.forEach(element => {
                    j = j + element.count;
                });
                Settotalpropertycount(j);
            }
            else {
                Settotalpropertycount(0);
            }



        } catch (error) {
            alert("From try catch of getting propert on purpose counts", error.toString());

            console.log(error);
        }
    }, []);
    useEffect(async () => {
        try {
            let uid = localStorage.getItem("user_ID");
            const res = await axios.post(globalvariables.data.Basicapi + "getPropertyPurposeCountMonthlyOnUserID",
                {
                    user_ID: uid
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            console.log("res from getting propert on purpose monthly count", res.data);

            Setpropertypurposemonthlycount(res.data);



        } catch (error) {
            alert("From try catch of getting propert on purpose monthly counts", error.toString());

            // console.log(error);
        }
    }, []);






    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 8, offset: 8 }}>
                   <h3 style={{color:'#D5B357'}} > <Clock format={'h:mm:ssa'} ticking={true} /></h3>

                </Col>
            </Row>
            <Row>
                <Col md={6}><h1>Welcome {localStorage.getItem("username")}</h1></Col>

            </Row>
            <Row>
                <Col md={6}><h3>Dashboard</h3></Col>

            </Row>


            <Row style={{ marginBottom: '2.5%' }}>
                {
                    propertypurposecount.map((item) => {
                        if (item.property_purpose == "Sale") {
                            return <Col md={4}>
                                <Card bg="info" >
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: "center" }}>Sale properties</Card.Title>
                                        <Card.Text>
                                            <h3 style={{ textAlign: "center" }}>{item.count}</h3>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        }
                        if (item.property_purpose == "Purchase") {
                            return <Col md={4}>
                                <Card bg="info" >
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: "center" }}>Purchase properties</Card.Title>
                                        <Card.Text>
                                            <h3 style={{ textAlign: "center" }}>{item.count}</h3>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        }
                        if (item.property_purpose == "Rent") {
                            return <Col md={4}>
                                <Card bg="info" >
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: "center" }}>Rent properties</Card.Title>
                                        <Card.Text>
                                            <h3 style={{ textAlign: "center" }}>{item.count}</h3>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        }
                    })
                }

            </Row>
            <Row style={{ marginBottom: '2.5%' }}>
                <Col md={4}>
                    <Card bg="success" >
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>Total Properties listed</Card.Title>
                            <Card.Text>
                                <h3 style={{ textAlign: "center" }}>{totalpropertycount}</h3>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* <Row style={{ padding: '2.5%' }}>
                <Paper elevation={3} >
                    <Col md={6}>
                        <h5>Monthly Property Chart</h5>
                        <ComposedChart
                            width={500}
                            height={400}
                            data={propertypurposemonthlycount}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="date" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="count" stroke="#ff7300" />
                        </ComposedChart>


                    </Col>
                </Paper>
               
            </Row>
 */}




        </Container>
    );
}



export default compose(
    withStyles(Styles)
)(Dashboard);
