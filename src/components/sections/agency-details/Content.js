import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Dropdown, NavLink, Tab, Nav, NavItem } from 'react-bootstrap';
import agents from '../../../data/agents.json';
import listing from '../../../data/listings.json';
import axios from "axios";
import globalvariables from "../../../globalvariables";
const gallerytip = (
    <Tooltip>
        Gallery
    </Tooltip>
);
const bedstip = (
    <Tooltip>
        Beds
    </Tooltip>
);
const bathstip = (
    <Tooltip>
        Bathrooms
    </Tooltip>
);
const areatip = (
    <Tooltip>
        Square Feet
    </Tooltip>
);

class Content extends Component {
    constructor() {
        super();
        this.state = {
            lawsofthelands: []
        }
    }
    componentDidMount() {

        try {

            axios.get(globalvariables.data.Basicapi + "getAllLaws",
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(async (response) => {
                    console.log("getAllLaws successfully", response);
                    this.setState({ lawsofthelands: response.data })

                })
                .catch(error => {
                    alert("in catch of axios while fetching laws of the lands", error.toString());

                });

        } catch (error) {

            alert("in try catch while fetching laws of the lands", error.toString());

        }
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

                                                this.state.lawsofthelands.map((i) => {

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

                                        this.state.lawsofthelands.map((i) => {

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

export default Content;