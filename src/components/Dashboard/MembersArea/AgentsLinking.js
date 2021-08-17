
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
import { Link } from 'react-router-dom';
import Tooltip from "@material-ui/core/Tooltip";
import InfoIcon from "@material-ui/icons/Info";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
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
  infoIconColor,
} from "../style/design";
import EmptyArea from "../EmptyArea/EmptyArea";
import TableViewTemplate from "../style/TableViewTemplate/TableViewTemplate";
import globalvariables from "../../../globalvariables";
import axios from 'axios';



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
// function linkFollow3(cell, row, rowIndex, formatExtraData) {
//     return (
//       <Link
//         style={{}}
//         onClick={() => {
//           if( row.items === undefined)
//           {

//           }
//           else{
//             setdisplaymodal(true);
//             setrowdata(row);
//           }


//         }}
//       >
//         <Tooltip title={"Details"} placement={"right"}>
//           <InfoIcon style={infoIconColor} />
//         </Tooltip>
//       </Link>
//     );
//   };
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

function AgentsLinking(props) {
  const { classes } = props;

  const [AgentsLinkingcolums, setAgentsLinkingcolums] = useState([
    {

      dataField: "agent_ID",
      text: "ID",
      sort: true,
    },
    {
      dataField: "firstName",
      text: "First Name",
      sort: true,
    },
    {
      dataField: "lastName",
      text: "Last Name",
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      dataField: "contactNo",
      text: "Contact Number",
      sort: true,
    },
    {
      dataField: "address",
      text: "Address",
      sort: true,
    },
    {
      dataField: "city",
      text: "City",
      sort: true,
    },





    {
      dataField: "details",
      text: "",
      formatter: linkFollow3,
    },
    // {
    //   dataField: "delete",
    //   text: "Delete",
    //   formatter: delete3,
    // },

  ])

  const [agents, Setagents] = useState([]);
  const [showwebdisplaymodel, Setshowwebdisplaymodel] = useState(false);

  const getallagents= async ()=>{
    try {
      const res = await axios.get(globalvariables.data.Basicapi + "getAllAgents",
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      console.log("res from getting all agents", res.data);
      if (res.data.length > 0) {
        Setagents(res.data)

      }

    } catch (error) {
      alert("From try catch of getting agents", error.toString());

      // console.log(error);
    }
  }
  useEffect(async () => {
    getallagents();
  }, []);
  return (
    <>
      <Container fluid>
        <TableViewTemplate
          keyField={"agent_ID"}
          data={agents}
          columns={AgentsLinkingcolums}
          addButtonText={"Add Web Admin"}
          tabTitle={"Web Admins"}
          addButtonOnClick={() => {
            Setshowwebdisplaymodel(true)

          }
          }
          exportCsvButtonShow={true}
          addButtonShow={false}
        />












      </Container>
      <Modal
      style={{zIndex:'10000000'}}
        show={showwebdisplaymodel}
        centered
        size="lg"
      >
        <Modal.Header style={{ backgroundColor: "#CAAE59", color: "white" }}>

          <Modal.Title>
            Add Web Admin
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {/* For Web Admin  */}
            <Container>
              <AddWebAdmin 
              fordatareferesh={getallwebadmins}
              forclosingmodal={()=>{Setshowwebdisplaymodel(false)}}/>
            </Container>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{Setshowwebdisplaymodel(false)}}>
            Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}



export default compose(
  withStyles(Styles))(AgentsLinking);
