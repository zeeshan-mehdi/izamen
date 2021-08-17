
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
import { userProfile } from '../../../redux/actions/userActions';



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


function BlogsArea(props) {
    const { classes } = props;
    const [displaymodal, setdisplaymodal] = useState(false);
    const [title, Settitle] = useState("");
    const [body, Setbody] = useState("");
    const [visible1, setvisible1] = useState(false);
    const [blog_ID, setblog_ID] = useState(false);



    function indication() {
        return <EmptyArea />;
    }


    function ondelete(row) {
        setblog_ID(row.blog_ID);
        setvisible1(true);

    }

    function linkFollow3(cell, row, rowIndex, formatExtraData) {
        return (
            <>
                {/* <Link
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
                </Link> */}
                <Link
                    style={{ marginLeft: '5%' }}
                    onClick={() => {
                        ondelete(row);
                    }}
                >
                    <Tooltip title={"Delete"} placement={"right"}>
                        <DeleteIcon style={deleteIconColor} />
                    </Tooltip>
                </Link>
            </>

        );
    };

    const [blogcolums, setpropetycolums] = useState([
        {

            dataField: "blog_ID",
            text: "ID",
            sort: true,
        },
        {
            dataField: "title",
            text: "Title",
            sort: true,
        },
        {
            dataField: "body",
            text: "Body",
            sort: true,
        },
        {
            dataField: "created_at",
            text: "Date",
            sort: true,
        },

        {
            dataField: "details",
            text: "",
            formatter: linkFollow3,
        },

    ])
    const [blogs, Setblogs] = useState([]);
    useEffect(async () => {
getallblogs();

    }, []);
    const getallblogs = () => {
        try {
            let uid = localStorage.getItem("user_ID")
            let data =
            {
                user_ID: uid
            }
            console.log("daasaa", data);
            axios.post(globalvariables.data.Basicapi + "getBlogsOnUserID", data
                ,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(async (response) => {
                    console.log("getting Blogs successfully", response);
                    Setblogs(response.data);
                })
                .catch(error => {
                    alert("in catch of axios while getting Blogs", error.toString());

                });
        } catch (error) {

            console.log(error);
            alert("in try catch while getting Blogs", error.toString());

        }
    }
    return (
        <>
            <Container fluid>
                <TableViewTemplate
                    keyField={"blog_ID"}
                    data={blogs}
                    columns={blogcolums}
                    addButtonText={"Add Blog"}
                    tabTitle={"Blogs"}
                    addButtonOnClick={() => {
                        setdisplaymodal(true)
                    }}
                    exportCsvButtonShow={false}
                    addButtonShow={true}
                />












            </Container>

            <Modal
                style={{ zIndex: '10000000' }}
                show={displaymodal}
                centered
                size="lg"
            >
                <Modal.Header style={{ backgroundColor: "#CAAE59", color: "white" }}>

                    <Modal.Title>
                        Add Blog
   </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {/* For Partner  */}
                        <Container>
                            <div>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label><span style={{ color: 'red' }}>*</span>Title</label>
                                        <input type="text" className="form-control" placeholder="Title" name="title" onChange={(event) => { Settitle(event.target.value) }} />
                                    </div>


                                    <div className="col-md-12 form-group">
                                        <label><span style={{ color: 'red' }}>*</span>Body</label>
                                        <textarea className="form-control" placeholder="Type your Blog" name="body" rows={7} onChange={(event) => { Setbody(event.target.value) }} />
                                    </div>
                                </div>
                                <div className="row" style={{ paddingLeft: '25%' }}>
                                    <button className="btn-custom primary" onClick={async () => {
                                        if (title != "" || body != "") {
                                            await axios.post(globalvariables.data.Basicapi + "addBlog",
                                                {
                                                    'user_ID': localStorage.getItem("user_ID"),
                                                    'title': title,
                                                    'body': body

                                                },
                                                {
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    },
                                                })
                                                .then(async (response) => {
                                                    console.log("Blog added successfully", response.data);
                                                    getallblogs();
                                                    setdisplaymodal(false);
                                                })
                                                .catch(error => {

                                                    console.log("in catch of axios while submitting blog", error.toString());
                                                });
                                        }
                                        else {
                                            alert("Please Enter title and body")
                                        }

                                    }}>Add Blog</button>
                                </div>

                            </div>
                        </Container>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setdisplaymodal(false) }}>
                        Close
   </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                style={{ zIndex: '10000000' }}
                show={visible1}
                centered
                size="lg"
            >
                <Modal.Header style={{ backgroundColor: "#CAAE59", color: "white" }}>

                    <Modal.Title>
                        Delete Blog
      </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <h3>Do you want to delete this Blog</h3>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={async () => {

                        try {
                            await axios.patch(globalvariables.data.Basicapi + "deleteBlog",
                                {
                                    'blog_ID': blog_ID,
                                },
                                {
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                })
                                .then(async (response) => {
                                    console.log("Blog Deleted successfully");
                                    getallblogs();
                                    setvisible1(false);


                                })
                                .catch(error => {
                                    alert("in catch of axios while Deleteing Blog", error.toString());
                                });
                        } catch (error) {
                            console.log(error);
                            alert("in try catch while deleting Blog", error.toString());

                        }
                    }}>
                        Delete
</Button>
                    <Button variant="secondary" onClick={() => {
                        setvisible1(false);
                    }}>
                        Close
</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
function mapStateToProps(state) {
    return {

        userprofile: state.userReducer.userprofile,


    };

}


export default connect(mapStateToProps)
    (BlogsArea);
