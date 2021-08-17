import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Tab, Tabs, Modal, Card, Button, OverlayTrigger, Tooltip, Dropdown, NavLink, Nav } from "react-bootstrap";
import globalvariables from "../../../globalvariables";
import axios from 'axios';

class Info extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            evkey:""
        }
    }
    async getproject(subtype) {

        try {
            const res = await axios.post(globalvariables.data.Basicapi + "getProjectsOnSubType",
                {
                    sub_type: subtype
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            console.log("saas", res.data);
            this.setState({ projects: res.data });



        } catch (error) {
            alert("From try catch of getting Prjects", error.toString());

            console.log(error);
        }

    }
    async componentDidMount() {

        // try {
        //     const res = await axios.get(globalvariables.data.Basicapi + "getAllProjects",
        //         {
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //         });
        //     console.log("saas", res.data);
        //     this.setState({ projects: res.data });



        // } catch (error) {
        //     alert("From try catch of getting Prjects", error.toString());

        //     console.log(error);
        // }
    }
    render() {
        return (
            //     <Col md={12} style={{ marginLeft: '2.5%' }}>
            //         {this.state.projects.map((item) => {
            //             return <Col md={4} style={{ margin: '2.5%' }}>
            //                 <Card style={{ width: '18rem' }}>
            //                     <Card.Img variant="top" src={item.cover_photo} />
            //                     <Card.Body>
            //                         <Card.Title><h4>{item.title}</h4></Card.Title>
            //                         <Card.Text>
            //                             <h6>{item.property_type + " - " + item.sub_type}</h6>
            //                             <p>{item.details}</p>
            //                             <p>Address: {item.address + ", " + item.city + ", " + item.country}</p>
            //                             <p><span style={{ fontWeight: 'bold' }}>StartDate: </span>{item.startingDate} </p>
            //                             <p><span style={{ fontWeight: 'bold' }}>EndDate: </span>{item.endingDate}</p>
            //                         </Card.Text>
            //                     </Card.Body>
            //                 </Card>
            //             </Col>
            //         })}

            //     </Col>
            <div className="section agent-wrapper">
                <div className="container">
                    <div className="row">
                        <Tab.Container defaultActiveKey="openLand">
                            {/* Agency Sidebar Start */}
                            <div className="col-lg-4">
                                <div className="sidebar sticky-sidebar sidebar-left">
                                    <div className="sidebar-widget">
                                        <Nav variant="tabs" className="nav nav-tabs tab-cards">
                                            <Nav.Item>
                                                <Nav.Link eventKey="openLand" onClick={async () => {
                                                    this.setState({evkey:"openLand"});
                                                    this.getproject("openLand");
                                                }}>Open Land</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="ResidentialPlot" onClick={async () => {
                                                    this.setState({evkey:"ResidentialPlot"});
                                                    this.getproject("ResidentialPlot");
                                                }} >Residential Plot</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="Commercial" onClick={async () => {
                                                    this.setState({evkey:"Commercial"});
                                                    this.getproject("Commercial");
                                                }}>Commercial</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="AgriculturalLand" onClick={async () => {
                                                    this.setState({evkey:"AgriculturalLand"});
                                                    this.getproject("AgriculturalLand");
                                                }}>Agricultural Land</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="IndustrialLand" onClick={async () => {
                                                    this.setState({evkey:"IndustrialLand"});
                                                    this.getproject("IndustrialLand");
                                                }}>Industrial Land</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="HouseProperty" onClick={async () => {
                                                    this.setState({evkey:"HouseProperty"});
                                                    this.getproject("HouseProperty");
                                                }}>House Property</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="Villa" onClick={async () => {
                                                    this.setState({evkey:"Villa"});
                                                    this.getproject("Villa");
                                                }}>Villa</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="FarmHouse" onClick={async () => {
                                                    this.setState({evkey:"FarmHouse"});
                                                    this.getproject("FarmHouse");
                                                }}>Farm House</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="Mall" onClick={async () => {
                                                    this.setState({evkey:"Mall"});
                                                    this.getproject("Mall");
                                                }}>Mall</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="Apartment" onClick={async () => {
                                                    this.setState({evkey:"Apartment"});
                                                    this.getproject("Apartment");
                                                }}>Apartment</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="AprtmentBlock" onClick={async () => {
                                                    this.setState({evkey:"AprtmentBlock"});
                                                    this.getproject("AprtmentBlock");
                                                }}>Aprtment Block</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="Hotel" onClick={async () => {
                                                    this.setState({evkey:"Hotel"});
                                                    this.getproject("Hotel");
                                                }}>Hotel</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="IndustrialBuilding" onClick={async () => {
                                                    this.setState({evkey:"IndustrialBuilding"});
                                                    this.getproject("IndustrialBuilding");
                                                }}>Industrial Building</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="PentHouse" onClick={async () => {
                                                    this.setState({evkey:"PentHouse"});
                                                    this.getproject("PentHouse");
                                                }}>Pent House</Nav.Link>
                                            </Nav.Item>

                                        </Nav>
                                    </div>

                                </div>
                            </div>
                            {/* Agency Sidebar End */}
                            {/* Agent Tabs Start */}
                            <div className="col-lg-8">
                                <Tab.Content className="m-0">
                                    <Tab.Pane eventKey={this.state.evkey}>
                                        <div className="agency-content">
                                            <Col md={12} style={{ marginLeft: '2.5%' }}>
                                                {this.state.projects.map((item) => {
                                                    return <Col md={4} style={{ margin: '2.5%' }}>
                                                        <Card style={{ width: '18rem' }}>
                                                            <Card.Img variant="top" src={item.img_path} />
                                                            <Card.Body>
                                                                <Card.Title><h4>{item.title}</h4></Card.Title>
                                                                <Card.Text>
                                                                    <h6>{item.property_type + " - " + item.sub_type}</h6>
                                                                    <p>{item.details}</p>
                                                                    <p>Address: {item.address + ", " + item.city + ", " + item.country}</p>
                                                                    <p><span style={{ fontWeight: 'bold' }}>StartDate: </span>{item.startingDate} </p>
                                                                    <p><span style={{ fontWeight: 'bold' }}>EndDate: </span>{item.endingDate}</p>
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                })}

                                            </Col>
                                        </div>
                                    </Tab.Pane>

                                </Tab.Content>
                                {/* Agent Tabs End */}
                            </div>
                        </Tab.Container>
                    </div>
                </div>
            </div>

        );
    }
}

export default Info;