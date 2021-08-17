
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
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { compose } from "redux";
import { connect } from "react-redux";
// import { getOrdersDate } from "../../redux/actions/orderActions";
import { withStyles } from "@material-ui/core/styles";
import AddLawOfTheLand from "../Components/AddLawOfTheLand/AddLawOfTheLand";
import {


    componentTopMargin,
    deleteIconColor,
    editIconColor,
    infoIconColor
} from "../style/design";
import EmptyArea from "../EmptyArea/EmptyArea";
import TableViewTemplate from "../style/TableViewTemplate/TableViewTemplate";
import globalvariables from "../../../globalvariables";
import axios from 'axios';

import { Link } from 'react-router-dom';
import Tooltip from "@material-ui/core/Tooltip";
import InfoIcon from "@material-ui/icons/Info";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";



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
function indication() {
    return <EmptyArea />;
}


function onofficedetaileclicked(row) {
    this.setState({ rowdata: row, fordetails: true, showdetailsofoffice: true });
}

function linkFollow3(cell, row, rowIndex, formatExtraData) {
    return (
        <><Link
            onClick={() => {
                // this.onofficedetaileclicked(row);
            }}
        >
            <Tooltip title={"Details"} placement={"right"}>
                <InfoIcon style={infoIconColor} />
            </Tooltip>
        </Link>
            <Link
                style={{ marginLeft: '5%' }}
                onClick={() => {
                    // console.log("edit clicked:", row)
                    // var em = [];
                    // for (var i = 1; i < arrays.offices.length; i++) {
                    //   if (row["office_Email"] !== arrays.offices[i]["office_Email"]) {
                    //     em.push(arrays.offices[i]["office_Email"]);
                    //   }
                    // }
                    // arrays.officesemail = em;
                    // this.onFollowChanged1(row);
                }}
            >
                <Tooltip title={"Edit"} placement={"right"}>
                    <EditIcon style={editIconColor} />
                </Tooltip>
            </Link>
            <Link
                style={{ marginLeft: '5%' }}
                onClick={() => {
                    // this.ondeleted1(row);
                }}
            >
                <Tooltip title={"Delete"} placement={"right"}>
                    <DeleteIcon style={deleteIconColor} />
                </Tooltip>
            </Link>
        </>
        // <Button
        //   onClick={() => {
        //     this.ondetaileclicked(row);
        //   }}
        // >
        //   Show Details
        // </Button>
    );
};

function LawsOfTheLand(props) {
    const { classes } = props;

    const [lawofthelandcolums, setlawofthelandcolums] = useState([
        {

            dataField: "law_ID",
            text: "ID",
            sort: true,
        },
        {
            dataField: "title",
            text: "Title",
            sort: true,
        },
        {
            dataField: "description",
            text: "Description",
            sort: true,
        },

        {
            dataField: "details",
            text: "",
            formatter: linkFollow3,
        },

    ])
    const [lawoftheland, Setlawoftheland] = useState([]);
    const [lotldisplaymodal, Setlotldisplaymodal] = useState(false);

    const getalllawsofthelands = async () => {
        try {
            axios.get(globalvariables.data.Basicapi + "getAllLaws",
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(async (response) => {
                    console.log("getAllLaws successfully", response);
                    Setlawoftheland(response.data)

                })
                .catch(error => {
                    alert("in catch of axios while fetching laws of the lands", error.toString());

                });

        } catch (error) {
            alert("From try catch of Laws of the lands", error.toString());

            // console.log(error);
        }
    }


    useEffect(async () => {
        getalllawsofthelands();
    }, []);
    return (
        <>
            <Container fluid>
                <TableViewTemplate
                    keyField={"law_ID"}
                    data={lawoftheland}
                    columns={lawofthelandcolums}
                    addButtonText={"Add Law of the land"}
                    tabTitle={"Laws of the Lands"}
                    addButtonOnClick={() => {
                        Setlotldisplaymodal(true)
                    }
                    }
                    exportCsvButtonShow={true}
                    addButtonShow={true}
                />












            </Container>
            <Modal
                style={{ zIndex: '10000000' }}
                show={lotldisplaymodal}
                centered
                size="lg"
            >
                <Modal.Header style={{ backgroundColor: "#CAAE59", color: "white" }}>

                    <Modal.Title>
                        Add Law Of The Land
             </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {/* For Web Admin  */}
                        <Container>
                            <AddLawOfTheLand fordatareferesh={getalllawsofthelands}
                                forclosingmodal={() => { Setlotldisplaymodal(false) }} />
                        </Container>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        Setlotldisplaymodal(false);
                    }}>
                        Close
     </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}



export default compose(
    withStyles(Styles)
)(LawsOfTheLand);
