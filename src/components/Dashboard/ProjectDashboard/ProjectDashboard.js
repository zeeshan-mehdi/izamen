
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
import TextField from '@material-ui/core/TextField';

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
import AddProject from '../Components/AddProject/AddProject';

import { Link } from 'react-router-dom';
import Tooltip from "@material-ui/core/Tooltip";
import InfoIcon from "@material-ui/icons/Info";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AvatarEditor from 'react-avatar-editor';


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




function ProjectDashboard(props) {
  const { classes } = props;
  const [projects, Setprojects] = useState([]);
  const [selectedRow, setSelectedRow] = useState({});
  const [showEditProjectModal, toggleEditProjectModal] = useState(false);


  const [showwebdisplaymodel, Setshowwebdisplaymodel] = useState(false);

  const [image, Setimage] = useState("");
  const [title, Settitle] = useState("");
  const [details, Setdetails] = useState("");
  const [address, Setaddress] = useState("");
  const [city, Setcity] = useState("");
  const [country, Setcountry] = useState("");
  const [postalcode, Setpostalcode] = useState("");
  const [area, Setarea] = useState("");
  const [area_type, Setarea_type] = useState("");
  const [price, Setprice] = useState("");
  const [partner, Setpartner] = useState("");

  const [propertytype, Setpropertytype] = useState("");
  const [subtype, Setsubtype] = useState("");

  const [startyear, Setstartyear] = useState("");
  const [startmonth, Setstartmonth] = useState("");
  const [startday, Setstartday] = useState("");
  const [partners, Setpartners] = useState([]);

  const [endyear, Setendyear] = useState("");
  const [endmonth, Setendmonth] = useState("");
  const [endday, Setendday] = useState("");

  async function updateProject() {
    await axios.patch(globalvariables.data.Basicapi + "updateProject",
      {
        'title': selectedRow.title,
        'address': selectedRow.address,
        'city': selectedRow.city,
        'country': selectedRow.country,
        'lat': '34.3',
        'long': '22.3',
        'area': selectedRow.area,
        'property_type': selectedRow.propertytype,
        'price': selectedRow.price,
        'area_type': selectedRow.area,
        'sub_type': selectedRow.subtype,
        'details': selectedRow.details,
        'partner_ID': selectedRow.partner_ID,
        'postalCode': selectedRow.postalcode,
        'startingDate': selectedRow.startyear + "-" + selectedRow.startmonth + "-" + selectedRow.startday,
        'endingDate': selectedRow.endyear + "-" + selectedRow.endmonth + "-" + selectedRow.endday,
        // 'img_path': "https://induslandphotos.s3-ap-southeast-1.amazonaws.com/" + file_name

      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => {
        setSelectedRow({});
        toggleEditProjectModal(false)
      }).catch(error => {
        alert("an error occured when updating projet ")
        console.log("an error occured: ", error.message)
      })
  }
  async function submitproject() {
    try {

      var s3Endpoint = await axios.get("https://pyd24ltfqe.execute-api.ap-southeast-1.amazonaws.com/default/getpropertyimages");
      var file_name = s3Endpoint.data.photoFilename;
      var s3UploadLink = s3Endpoint.data.uploadURL
      //'img_path': "https://induslandphotos.s3-ap-southeast-1.amazonaws.com/" + file_name,

      if (image !== null)
        console.log("Result", s3UploadLink, file_name, image)
      const result = await fetch(s3UploadLink, {
        method: 'PUT',
        body: image
      }).then(async (response) => {
        let uid = localStorage.getItem("user_ID");
        await axios.post(globalvariables.data.Basicapi + "addProject",
          {
            'user_ID': uid,
            'title': title,
            'address': address,
            'city': city,
            'country': country,
            'lat': '34.3',
            'long': '22.3',
            'area': area,
            'property_type': propertytype,
            'price': price,
            'area_type': area,
            'sub_type': subtype,
            'details': details,
            'partner_ID': partner,
            'postalCode': postalcode,
            'startingDate': startyear + "-" + startmonth + "-" + startday,
            'endingDate': endyear + "-" + endmonth + "-" + endday,
            'img_path': "https://induslandphotos.s3-ap-southeast-1.amazonaws.com/" + file_name

          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(async (response) => {
            console.log("project successfully", response.data);
            Setshowwebdisplaymodel(false);
            getallprojects();
          })
          .catch(error => {

            console.log("in catch of axios while submitting project", error.toString());
          });
      })

    } catch (error) {

      console.log("in try catch while submitting project", error.toString());

    }
  }


  const projectcolums = [
    {

      dataField: "project_ID",
      text: "ID",
      sort: true,
    },
    {
      dataField: "title",
      text: "Title",
      sort: true,
    },
    {
      dataField: "details",
      text: "Details",
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
      dataField: "area",
      text: "Area",
      sort: true,
    },
    {
      dataField: "price",
      text: "Price",
      sort: true,
    },

    {
      dataField: "details",
      text: "",
      formatter: linkFollow3,
    },
  ]


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
          <Tooltip title={"Edit"} placement={"right"} onClick={() => { setSelectedRow(row); toggleEditProjectModal(true) }}>
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

  const getallprojects = async () => {
    try {
      const res = await axios.get(globalvariables.data.Basicapi + "getAllProjects",
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      console.log("res from getting projects", res.data);
      if (res.data.length > 0) {
        Setprojects(res.data)

      }

    } catch (error) {
      alert("From try catch of getting projects", error.toString());

      // console.log(error);
    }
  }
  useEffect(async () => {
    getallprojects();
  }, []);
  useEffect(async () => {
    try {
      const res = await axios.get(globalvariables.data.Basicapi + "getAllPartners",
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      console.log("res from getting Partners", res.data);
      if (res.data.length > 0) {
        Setpartners(res.data)

      }

    } catch (error) {
      alert("From try catch of getting projects", error.toString());

      // console.log(error);
    }
  }, []);



  return (
    <>
      <Container fluid>
        <TableViewTemplate
          keyField={"project_ID"}
          data={projects}
          columns={projectcolums}
          addButtonText={"Add Project"}
          tabTitle={"Projects"}
          addButtonOnClick={() => {
            Setshowwebdisplaymodel(true)
          }
          }
          exportCsvButtonShow={true}
          addButtonShow={true}
        />

      </Container>

      <Modal
        style={{ zIndex: '10000000' }}
        show={showwebdisplaymodel}
        centered
        size="lg"
      >
        <Modal.Header style={{ backgroundColor: "#CAAE59", color: "white" }}>

          <Modal.Title>
            Add Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {/* For Web Admin  */}
            <Container>

              <Row style={{ marginTop: '2.5%' }}>
                <Col md={6}>
                  <Row>
                    <label>Project Photo</label>
                  </Row>
                  <Row>
                    <AvatarEditor
                      image={image}
                      width={250}
                      height={150}
                      border={0}
                      color={[255, 255, 255, 0.6]} // RGBA
                      scale={1}
                      rotate={0}
                    />
                    <input type="file" className="form-control form-control-light" id="file-input" name="ImageStyle" style={{ marginTop: '1%' }} onChange={(event) => {
                      console.log("IMAGE: ", event)
                      if (event.target.files[0])
                        Setimage(event.target.files[0]);
                    }} />
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <label htmlFor="firstname" style={{ display: "block" }}>
                    Title <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <TextField id="title"
                    fullWidth
                    variant="outlined"
                    placeholder="EnterTitle"
                    type="text"
                    value={title}
                    onChange={(e) => { Settitle(e.target.value) }} />
                </Col>

              </Row>
              <Row>
                <Col md={12}>
                  <label><span style={{ color: 'red' }}>*</span>details</label>
                  <textarea className="form-control" placeholder="Details" name="comment" rows={7} onChange={(event) => { Setdetails(event.target.value) }} />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <label htmlFor="address" style={{ display: "block" }}>
                    Address<span style={{ color: "red" }}>(*)</span>
                  </label>
                  <TextField
                    id="address"
                    fullWidth
                    variant="outlined"
                    placeholder="Enter address"
                    type="text"
                    value={address}
                    onChange={(e) => { Setaddress(e.target.value) }}
                  />

                </Col>

              </Row>
              <Row>
                <Col md={4}>
                  <label htmlFor="city" style={{ display: "block" }}>
                    City<span style={{ color: "red" }}>(*)</span>
                  </label>
                  <TextField
                    id="city"
                    fullWidth
                    variant="outlined"
                    placeholder="Enter city"
                    type="text"
                    value={city}
                    onChange={(e) => { Setcity(e.target.value) }}

                  />

                </Col>
                <Col md={4}>
                  <label htmlFor="country" style={{ display: "block" }}>
                    Country<span style={{ color: "red" }}>(*)</span>
                  </label>
                  <TextField
                    id="country"
                    fullWidth
                    variant="outlined"
                    placeholder="Enter country"
                    type="text"
                    value={country}
                    onChange={(e) => { Setcountry(e.target.value) }}

                  />

                </Col>
                <Col md={4}>
                  <label htmlFor="postalcode" style={{ display: "block" }}>
                    Postal Code
                  </label>
                  <TextField
                    id="postalcode"
                    fullWidth
                    variant="outlined"
                    placeholder="Enter postalcode"
                    type="text"
                    value={postalcode}
                    onChange={(e) => { Setpostalcode(e.target.value) }}

                  />

                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <label>Choose Partner (If any)</label>
                  <select className="form-control" name="type"
                    onChange={event => Setpartner(event.target.value)}

                  >
                    <option value="none">None</option>
                    {partners.map((item) => {
                      return <option value={item.partner_ID}>{item.name + " - " + item.url}</option>

                    })}

                  </select>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <label>Property Type<span style={{ color: "red" }}>*</span></label>
                  <select className="form-control" name="type"
                    onChange={event => Setpropertytype(event.target.value)}

                  >
                    <option value="none">None</option>
                    <option value="Land/Plot">Land/Plot</option>
                    <option value="Buildings">Buildings</option>

                  </select>
                </Col>
                {
                  propertytype === "none" ? (null) :
                    (null)

                }
                {
                  propertytype === "Land/Plot" ? (<Col md={6}>
                    <label>Property Sub Type<span style={{ color: "red" }}>*</span></label>
                    <select className="form-control" name="subtype" onChange={(event) => {
                      Setsubtype(event.target.value);
                    }}>
                      <option value="none">None</option>
                      <option value="openLand">Open Land</option>
                      <option value="ResidentialPlot">Residential Plot</option>
                      <option value="Commercial">Commercial Plot</option>
                      <option value="AgriculturalLand">Agricultural Land</option>
                      <option value="IndustrialLand">Industrial Plot</option>
                    </select>
                  </Col>) :
                    (null)

                }
                {
                  propertytype === "Buildings" ?
                    (<Col md={6}>
                      <label>Property Sub Type<span style={{ color: "red" }}>*</span></label>
                      <select className="form-control" name="type" onChange={(event) => {
                        Setsubtype(event.target.value)
                      }}>
                        <option value="none">None</option>
                        <option value="HouseProperty">House Property</option>
                        <option value="Villa">Villa</option>
                        <option value="FarmHouse">Farm House</option>
                        <option value="Mall">Mall</option>
                        <option value="Apartment">Apartment</option>
                        <option value="AprtmentBlock">Apartment Block</option>
                        <option value="Hotel">Hotel</option>
                        <option value="IndustrialBuilding">Industrial Building</option>
                        <option value="PentHouse">Pent House</option>

                      </select>
                    </Col>) : (null)

                }
              </Row>
              <Row>
                <Col md={6}>
                  <label>Property Price<span style={{ color: "red" }}>*</span></label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">PKR</span>
                    </div>
                    <input type="text" className="form-control" name="price" value={price} onChange={(event) => { Setprice(event.target.value) }} placeholder="Property Price" />
                  </div>

                </Col>


                <Col md={12}>
                  <Row>

                    <Col md={6}>

                      <label>Area Type<span style={{ color: "red" }}>*</span></label>
                      <select className="form-control" name="type"
                        onChange={event => Setarea_type(event.target.value)}

                      >
                        <option value="none">None</option>
                        <option value="squarefoot">Square foot</option>
                        <option value="yard">Yards</option>
                        <option value="marla">Marla</option>
                        <option value="kanal">Kanal</option>
                        <option value="moza">Moza</option>

                        <option value="acre">Acre</option>

                      </select>
                    </Col>
                    <Col md={6}>
                      <label>Area<span style={{ color: "red" }}>*</span></label>
                      <input type="text" className="form-control" placeholder="Area " value={area} onChange={(event) => { Setarea(event.target.value) }} name="space" />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <label>Starting Date</label>
                      <Row>
                        <Col md={6}>
                          <input type="text" className="form-control" placeholder="yyyy " value={startyear} onChange={(event) => { Setstartyear(event.target.value) }} name="space" />

                        </Col>
                        <Col md={3}>
                          <input type="text" className="form-control" placeholder="mm " value={startmonth} onChange={(event) => { Setstartmonth(event.target.value) }} name="space" />

                        </Col>
                        <Col md={3}>
                          <input type="text" className="form-control" placeholder="dd " value={startday} onChange={(event) => { Setstartday(event.target.value) }} name="space" />

                        </Col>
                      </Row>


                    </Col>
                    <Col md={6}>
                      <label>Ending Date</label>
                      <Row>
                        <Col md={6}>
                          <input type="text" className="form-control" placeholder="yyyy " value={endyear} onChange={(event) => { Setendyear(event.target.value) }} name="space" />

                        </Col>
                        <Col md={3}>
                          <input type="text" className="form-control" placeholder="mm " value={endmonth} onChange={(event) => { Setendmonth(event.target.value) }} name="space" />

                        </Col>
                        <Col md={3}>
                          <input type="text" className="form-control" placeholder="dd " value={endday} onChange={(event) => { Setendday(event.target.value) }} name="space" />

                        </Col>
                      </Row>

                    </Col>
                  </Row>

                </Col>
              </Row>


            </Container>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => { submitproject() }}>
            Submit
          </Button>
          <Button variant="secondary" onClick={() => { Setshowwebdisplaymodel(false) }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Update Project */}

      <Modal
        style={{ zIndex: '10000000' }}
        show={showEditProjectModal}
        centered
        size="lg"
      >
        <Modal.Header style={{ backgroundColor: "#CAAE59", color: "white" }}>

          <Modal.Title>
            Update Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {/* For Web Admin  */}
            <Container>

              <Row style={{ marginTop: '2.5%' }}>
                <Col md={6}>
                  <Row>
                    <label>Project Photo</label>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <label htmlFor="firstname" style={{ display: "block" }}>
                    Title <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <TextField id="title"
                    fullWidth
                    variant="outlined"
                    defaultValue={selectedRow.title}
                    placeholder="EnterTitle"
                    type="text"
                    onChange={(e) => { selectedRow.title = e.target.value; setSelectedRow(selectedRow) }} />
                </Col>

              </Row>
              <Row>
                <Col md={12}>
                  <label><span style={{ color: 'red' }}>*</span>details</label>
                  <textarea className="form-control" defaultValue={selectedRow.details} placeholder="Details" name="comment" rows={7} onChange={(e) => { selectedRow.details = e.target.value; setSelectedRow(selectedRow) }} />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <label htmlFor="address" style={{ display: "block" }}>
                    Address<span style={{ color: "red" }}>(*)</span>
                  </label>
                  <TextField
                    id="address"
                    fullWidth
                    variant="outlined"
                    placeholder="Enter address"
                    type="text"
                    defaultValue={selectedRow.address}
                    onChange={(e) => { selectedRow.address = e.target.value; setSelectedRow(selectedRow) }}
                  />

                </Col>

              </Row>
              <Row>
                <Col md={4}>
                  <label htmlFor="city" style={{ display: "block" }}>
                    City<span style={{ color: "red" }}>(*)</span>
                  </label>
                  <TextField
                    id="city"
                    fullWidth
                    variant="outlined"
                    placeholder="Enter city"
                    type="text"
                    defaultValue={selectedRow.city}
                    onChange={(e) => { selectedRow.city = e.target.value; setSelectedRow(selectedRow) }}

                  />

                </Col>
                <Col md={4}>
                  <label htmlFor="country" style={{ display: "block" }}>
                    Country<span style={{ color: "red" }}>(*)</span>
                  </label>
                  <TextField
                    id="country"
                    fullWidth
                    variant="outlined"
                    placeholder="Enter country"
                    type="text"
                    defaultValue={selectedRow.country}
                    onChange={(e) => { selectedRow.country = e.target.value; setSelectedRow(selectedRow) }}

                  />

                </Col>
                <Col md={4}>
                  <label htmlFor="postalcode" style={{ display: "block" }}>
                    Postal Code
                  </label>
                  <TextField
                    id="postalcode"
                    fullWidth
                    variant="outlined"
                    placeholder="Enter postalcode"
                    type="text"
                    defaultValue={selectedRow.postalCode}
                    onChange={(e) => { selectedRow.postalCode = e.target.value; setSelectedRow(selectedRow) }}

                  />

                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <label>Choose Partner (If any)</label>
                  <select className="form-control" name="type"
                    defaultValue={selectedRow.partner_ID}

                    onChange={(e) => { selectedRow.partner_ID = e.target.value; setSelectedRow(selectedRow) }}

                  >
                    <option value="none">None</option>
                    {partners.map((item) => {
                      return <option value={item.partner_ID}>{item.name + " - " + item.url}</option>
                    })}

                  </select>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <label>Property Type<span style={{ color: "red" }}>*</span></label>
                  <select className="form-control" name="type"
                    defaultValue={selectedRow.property_type}
                    onChange={(e) => { selectedRow.property_type = e.target.value; setSelectedRow(selectedRow) }}

                  >
                    <option value="none">None</option>
                    <option value="Land/Plot">Land/Plot</option>
                    <option value="Buildings">Buildings</option>

                  </select>
                </Col>
                {
                  propertytype === "none" ? (null) :
                    (null)

                }
                {
                  propertytype === "Land/Plot" ? (<Col md={6}>
                    <label>Property Sub Type<span style={{ color: "red" }}>*</span></label>
                    <select className="form-control" name="subtype"
                      defaultValue={selectedRow.sub_type}
                      onChange={(e) => { selectedRow.sub_type = e.target.value; setSelectedRow(selectedRow) }}>
                      <option value="none">None</option>
                      <option value="openLand">Open Land</option>
                      <option value="ResidentialPlot">Residential Plot</option>
                      <option value="Commercial">Commercial Plot</option>
                      <option value="AgriculturalLand">Agricultural Land</option>
                      <option value="IndustrialLand">Industrial Plot</option>
                    </select>
                  </Col>) :
                    (null)

                }
                {
                  propertytype === "Buildings" ?
                    (<Col md={6}>
                      <label>Property Sub Type<span style={{ color: "red" }}>*</span></label>
                      <select className="form-control" name="type"
                        defaultValue={selectedRow.sub_type}
                        onChange={(e) => { selectedRow.sub_type = e.target.value; setSelectedRow(selectedRow) }}>
                        <option value="none">None</option>
                        <option value="HouseProperty">House Property</option>
                        <option value="Villa">Villa</option>
                        <option value="FarmHouse">Farm House</option>
                        <option value="Mall">Mall</option>
                        <option value="Apartment">Apartment</option>
                        <option value="AprtmentBlock">Apartment Block</option>
                        <option value="Hotel">Hotel</option>
                        <option value="IndustrialBuilding">Industrial Building</option>
                        <option value="PentHouse">Pent House</option>

                      </select>
                    </Col>) : (null)

                }
              </Row>
              <Row>
                <Col md={6}>
                  <label>Property Price<span style={{ color: "red" }}>*</span></label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">PKR</span>
                    </div>
                    <input type="text" className="form-control" name="price" defaultValue={selectedRow.price}
                      onChange={(e) => { selectedRow.price = e.target.value; setSelectedRow(selectedRow) }} placeholder="Property Price" />
                  </div>

                </Col>


                <Col md={12}>
                  <Row>

                    <Col md={6}>

                      <label>Area Type<span style={{ color: "red" }}>*</span></label>
                      <select className="form-control" name="type" defaultValue={selectedRow.area_type}
                        onChange={(e) => { selectedRow.area_type = e.target.value; setSelectedRow(selectedRow) }}

                      >
                        <option value="none">None</option>
                        <option value="squarefoot">Square foot</option>
                        <option value="yard">Yards</option>
                        <option value="marla">Marla</option>
                        <option value="kanal">Kanal</option>
                        <option value="moza">Moza</option>

                        <option value="acre">Acre</option>

                      </select>
                    </Col>
                    <Col md={6}>
                      <label>Area<span style={{ color: "red" }}>*</span></label>
                      <input type="text" className="form-control" placeholder="Area " deafultValue={selectedRow.area} onChange={(e) => { selectedRow.area = e.target.value; setSelectedRow(selectedRow) }} name="space" />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <label>Starting Date</label>
                      <Row>
                        <Col md={6}>
                          <input type="text" className="form-control" placeholder="yyyy " defaultValue={selectedRow.startingDate.split("-")[0]} onChange={(e) => { setSelectedRow({ ...selectedRow, startyear: e.target.value }) }} name="space" />

                        </Col>
                        <Col md={3}>
                          <input type="text" className="form-control" placeholder="mm " defaultValue={selectedRow.startingDate.split("-")[1]} onChange={(e) => { setSelectedRow({ ...selectedRow, startmonth: e.target.value }) }} name="space" />

                        </Col>
                        <Col md={3}>
                          <input type="text" className="form-control" placeholder="dd " defaultValue={selectedRow.startingDate.split("-")[2]} onChange={(e) => { setSelectedRow({ ...selectedRow, startday: e.target.value }) }} name="space" />

                        </Col>
                      </Row>


                    </Col>
                    <Col md={6}>
                      <label>Ending Date</label>
                      <Row>
                        <Col md={6}>
                          <input type="text" className="form-control" placeholder="yyyy " defaultValue={selectedRow.endingDate.split("-")[0]} onChange={(e) => { setSelectedRow({ ...selectedRow, endyear: e.target.value }) }} name="space" />

                        </Col>
                        <Col md={3}>
                          <input type="text" className="form-control" placeholder="mm " defaultValue={selectedRow.endingDate.split("-")[1]} onChange={(e) => { setSelectedRow({ ...selectedRow, endmonth: e.target.value }) }} name="space" />

                        </Col>
                        <Col md={3}>
                          <input type="text" className="form-control" placeholder="dd " defaultValue={selectedRow.endingDate.split("-")[2]} onChange={(e) => { setSelectedRow({ ...selectedRow, endday: e.target.value }) }} name="space" />

                        </Col>
                      </Row>

                    </Col>
                  </Row>

                </Col>
              </Row>


            </Container>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => { updateProject() }}>
            Submit
          </Button>
          <Button variant="secondary" onClick={() => { toggleEditProjectModal(false); setSelectedRow({}) }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}



export default compose(
  withStyles(Styles)
)(ProjectDashboard);

