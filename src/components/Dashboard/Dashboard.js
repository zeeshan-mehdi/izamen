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

import globalvariables from "../../globalvariables";
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
  const [Membercount, SetMembercount] = useState([]);
  const [Agentcount, SetAgentcount] = useState([]);
  const [Propertycount, SetPropertycount] = useState([]);
  const [Projectcount, SetProjectcount] = useState([]);
  const [Partnercount, SetPartnercount] = useState([]);
  const [Queriescount, SetQueriescount] = useState([]);
  const [NotmembersCount, SetNotmembersCount] = useState([]);
  const [MonthlyPropertyCount, SetMonthlyPropertyCount] = useState([]);
  const [MonthlyMemberCount, SetMonthlyMemberCount] = useState([]);
  const [NotMonthlyMemberCount, SetNotMonthlyMemberCount] = useState([]);


  useEffect(async () => {
    try {
      const res = await axios.get(globalvariables.data.Basicapi + "getMemberCount",
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      console.log("res from getting Membercount", res.data);
      SetMembercount(res.data)



    } catch (error) {
      alert("From try catch of getting Membercount", error.toString());

      // console.log(error);
    }
  }, []);

  useEffect(async () => {
    try {
      const res = await axios.get(globalvariables.data.Basicapi + "getGuestCount",
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      console.log("res from getting Non Membercount", res.data);
      SetNotmembersCount(res.data)



    } catch (error) {
      alert("From try catch of getting Non Membercount", error.toString());

      // console.log(error);
    }
  }, []);

  useEffect(async () => {
    try {
      const res = await axios.get(globalvariables.data.Basicapi + "getAgentCount",
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      console.log("res from getting Agentcount", res.data);
      SetAgentcount(res.data)



    } catch (error) {
      alert("From try catch of getting Agentcount", error.toString());

      // console.log(error);
    }
  }, []);

  useEffect(async () => {
    try {
      const res = await axios.get(globalvariables.data.Basicapi + "getPropertyCount",
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      console.log("res from getting Propertycount", res.data);
      SetPropertycount(res.data)



    } catch (error) {
      alert("From try catch of getting Propertycount", error.toString());

      // console.log(error);
    }
  }, []);
  useEffect(async () => {
    try {
      const res = await axios.get(globalvariables.data.Basicapi + "getProjectCount",
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      console.log("res from getting Projectcount", res.data);

      SetProjectcount(res.data)



    } catch (error) {
      alert("From try catch of getting Projectcount", error.toString());

      // console.log(error);
    }
  }, []);

  useEffect(async () => {
    try {
      const res = await axios.get(globalvariables.data.Basicapi + "getPartnerCount",
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      console.log("res from getting Partner Count", res.data);
      SetPartnercount(res.data)



    } catch (error) {
      alert("From try catch of getting Partner Count", error.toString());

      // console.log(error);
    }
  }, []);
  useEffect(async () => {
    try {
      const res = await axios.get(globalvariables.data.Basicapi + "getQueriesCount",
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      console.log("res from getting Queries Count", res.data);
      SetQueriescount(res.data)



    } catch (error) {
      alert("From try catch of getting Partner Count", error.toString());

      // console.log(error);
    }
  }, []);

  useEffect(async () => {
    try {
      const res = await axios.get(globalvariables.data.Basicapi + "monthlyPropertyCount",
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      console.log("res from getting Monthly property Count", res.data);
      SetMonthlyPropertyCount(res.data)



    } catch (error) {
      alert("From try catch of getting Monthly property Count", error.toString());

      // console.log(error);
    }
  }, []);

  useEffect(async () => {
    try {
      const res = await axios.get(globalvariables.data.Basicapi + "monthlyMemberCount",
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      console.log("res from getting Monthly Member Count", res.data);
      SetMonthlyMemberCount(res.data)



    } catch (error) {
      alert("From try catch of getting Monthly Member Count", error.toString());

      // console.log(error);
    }
  }, []);
  useEffect(async () => {
    try {
      const res = await axios.get(globalvariables.data.Basicapi + "monthlyGuestCount",
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      console.log("res from getting Monthly Non Member Count", res.data);
      SetNotMonthlyMemberCount(res.data)



    } catch (error) {
      alert("From try catch of getting Monthly Non Member Count", error.toString());

      // console.log(error);
    }
  }, []);


  return (
    <Container fluid>
      <h3>Dashboard</h3>

      <Row style={{ marginBottom: '2.5%' }}>
        <Col md={4}>
          <Link style={{ color: 'black' }} to="/membersdashboard">
            <Card bg="info" >
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Members</Card.Title>
                <Card.Text>
                  <h3 style={{ textAlign: "center" }}>{Membercount}</h3>
                </Card.Text>

              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col md={4}>
          <Card bg="info">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Non Members</Card.Title>
              <Card.Text>
                <h3 style={{ textAlign: "center" }}>{NotmembersCount}</h3>
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card bg="info">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Projects Uploaded</Card.Title>
              <Card.Text>
                <h3 style={{ textAlign: "center" }}>{Projectcount}</h3>
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>


      </Row>




      <Row>
        <Col md={4}>
          <Card bg="success">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Listed Properties</Card.Title>
              <Card.Text>
                <h3 style={{ textAlign: "center" }}>{Propertycount}</h3>
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card bg="success">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Partners Updated</Card.Title>
              <Card.Text>
                <h3 style={{ textAlign: "center" }}>{Partnercount}</h3>
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card bg="success">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Total Agents</Card.Title>
              <Card.Text>
                <h3 style={{ textAlign: "center" }}>{Agentcount}</h3>
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>


      </Row>
      <Row style={{ padding: '2.5%' }}>
        <Paper elevation={3} >
          <Col md={6}>
            <h5>Monthly Property Chart</h5>
            <ComposedChart
              width={500}
              height={400}
              data={MonthlyPropertyCount}
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
              <Bar dataKey="COUNT(property_ID)" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="COUNT(property_ID)" stroke="#ff7300" />
            </ComposedChart>
          </Col>
        </Paper>
        <Paper elevation={3}  style={{marginLeft:'2.5%'}}>
          <Col md={6}>
          <h5>Monthly Members Registeration Chart</h5>

            <AreaChart
              width={500}
              height={400}
              data={MonthlyMemberCount}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="memberCount" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </Col>
        </Paper>
      </Row>

      <Row style={{ padding: '2.5%' }}>
        <Paper elevation={3} >
        <Col md={6}>
        <h5>Non Members</h5>

          <AreaChart
          width={500}
          height={400}
          data={NotMonthlyMemberCount}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="guestCount" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
        </AreaChart>
        </Col>
      </Paper>
      </Row>




    </Container>
  );
}



export default compose(
  withStyles(Styles)
)(Dashboard);
