import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Tab, Tabs, Modal, Card, Button } from "react-bootstrap";
import globalvariables from "../../../globalvariables";
import axios from 'axios';

class Info extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }
    async componentDidMount() {

        try {
            const res = await axios.get(globalvariables.data.Basicapi + "getAllProjects",
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
    render() {
        return (
            <Col md={12} style={{ marginLeft: '2.5%' }}>
                {this.state.projects.map((item) => {
                    return <Col md={4} style={{ margin: '2.5%' }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.cover_photo} />
                            <Card.Body>
                                <Card.Title><h4>{item.title}</h4></Card.Title>
                                <Card.Text>
                                    <p>{item.details}</p>
                                    <p>Address: {item.address + ", " + item.city + ", " + item.country}</p>
                                    <p><span style={{fontWeight:'bold'}}>With Partner : </span> {item.name}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                })}

            </Col>
        );
    }
}

export default Info;