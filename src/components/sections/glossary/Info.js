import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Tab, Tabs, Modal, Card, Button, OverlayTrigger, Tooltip, Dropdown, NavLink, Nav,NavItem } from "react-bootstrap";
import globalvariables from "../../../globalvariables";
import axios from 'axios';

class Info extends Component {
    constructor() {
        super();
        this.state = {
            glossaries: [],
            evkey: ""
        }
    }
    async getglossary(subtype) {

        try {
            const res = await axios.get(globalvariables.data.Basicapi + "getAllGlossary",
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            console.log("saas", res.data);
            this.setState({ glossaries: res.data });



        } catch (error) {
            alert("From try catch of getting Prjects", error.toString());

            console.log(error);
        }

    }
    async componentDidMount() {
        this.getglossary();
    }
    render() {
        return (

            <div className="section agent-wrapper">
                <div className="container">
                    <div className="row">
                        <Tab.Container>
                            {/* Agency Sidebar Start */}
                            <div className="col-lg-4">
                                <div className="sidebar sticky-sidebar sidebar-left">
                                    <div className="sidebar-widget">

                                        <Nav variant="tabs" className="nav nav-tabs tab-cards">
                                            {

                                                this.state.glossaries.map((i) => {

                                                    return <NavItem><Nav.Link eventKey={i.title}>{i.title}</Nav.Link></NavItem>
                                                })

                                            }
                                        </Nav>
                                    </div>
                                </div>
                            </div>
                            {/* Agency Sidebar End */}
                            {/* Agent Tabs Start */}
                            <div className="col-lg-8">
                                <Tab.Content className="m-0">
                                    {

                                        this.state.glossaries.map((i) => {

                                            return <Tab.Pane eventKey={i.title}>
                                                <div className="agency-content">{i.description}
                                                </div>
                                            </Tab.Pane>
                                        })

                                    }
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