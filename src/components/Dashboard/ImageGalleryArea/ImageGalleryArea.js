
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
import AvatarEditor from 'react-avatar-editor';

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

function ImageGalleryArea(props) {
    const { classes } = props;
    function image(cell, row) {
        return (
            <span>
                <img src={cell} alt="Image Gallery" />
            </span>
        );
    }
    const [gallerycolums, setgallerycolums] = useState([
        {

            dataField: "gallery_ID",
            text: "ID",
            sort: true,
        },

        {
            dataField: "desc",
            text: "Description",
            sort: true,
        },
        {
            dataField: "img_path",
            text: "Image",
            formatter: image
        },
        {
            dataField: "details",
            text: "",
            formatter: linkFollow3,
        },

    ])
    const [gallery, Setgallery] = useState([]);
    const [images, setimages] = useState([]);
    const [description, setdescription] = useState("");

    const [lotldisplaymodal, Setlotldisplaymodal] = useState(false);

    const getallGalleries = async () => {
        try {
            axios.get(globalvariables.data.Basicapi + "getAllGalleries",
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(async (response) => {
                    console.log("getAll Glossaries successfully", response);
                    Setgallery(response.data)

                })
                .catch(error => {
                    alert("in catch of axios while fetching Glossaries", error.toString());

                });

        } catch (error) {
            alert("From try catch of Glossareis", error.toString());

            // console.log(error);
        }
    }


    useEffect(async () => {
        getallGalleries();
    }, []);
    return (
        <>
            <Container fluid>
                <TableViewTemplate
                    keyField={"gallery_ID"}
                    data={gallery}
                    columns={gallerycolums}
                    addButtonText={"Add Item"}
                    tabTitle={"Image Gallery"}
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
                        Add Image Gallery Item
             </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {/* For Web Admin  */}
                        <Container>
                            <div className="form-group">
                                <label>Image Gallery Picture</label>
                                <AvatarEditor
                                    image={images}
                                    width={500}
                                    height={500}
                                    border={20}
                                    color={[255, 255, 255, 0.6]} // RGBA
                                    scale={1}
                                    rotate={0}
                                />
                                <input type="file" className="form-control form-control-light" id="file-input" name="ImageStyle" onChange={(event) => {
                                    console.log("IMAGE: ", event)
                                    if (event.target.files[0])
                                        setimages(event.target.files[0]);
                                }} />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control form-control-light" placeholder="Descriptiom" name="desc" onChange={(event) => { setdescription(event.target.value) }} />
                            </div>
                        </Container>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={async () => {
                        try {
                            var s3Endpoint = await axios.get("https://pyd24ltfqe.execute-api.ap-southeast-1.amazonaws.com/default/getpropertyimages");
                            var file_name = s3Endpoint.data.photoFilename;
                            var s3UploadLink = s3Endpoint.data.uploadURL

                            console.log("Result", s3UploadLink, file_name, images)
                            const result = await fetch(s3UploadLink, {
                                method: 'PUT',
                                body: images
                            }).then(async () => {
                                axios.post(globalvariables.data.Basicapi + "createGallery",
                                    {
                                        img_path: "https://induslandphotos.s3-ap-southeast-1.amazonaws.com/" + file_name,
                                        desc: description
                                    },

                                    {
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                    })
                                    .then(async (response) => {
                                        console.log("Submitted Gallery successfully", response);
                                        Setlotldisplaymodal(false);
                                        getallGalleries();

                                    })
                                    .catch(error => {
                                        alert("in catch of axios while submitting Gallery", error.toString());

                                    });
                            })


                        } catch (error) {
                            alert("From try catch of Gallery", error.toString());

                            // console.log(error);
                        }
                    }}>
                        Submit
     </Button>
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
)(ImageGalleryArea);
