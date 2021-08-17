
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

import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader';
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


function MembersArea(props) {
  const { classes } = props;

  let [selectedRow, setSelectedRow] = useState({});
  let [editPropertyModal, toggleEditPropertyModal] = useState(false);

  let [propertytype, setpropertytype] = useState("");
  let [property_ID, setproperty_ID] = useState("");
  let [propertydescription, setpropertydescription] = useState("");
  let [propertysubtype, setpropertysubtype] = useState("");
  let [propertypurpose, setpropertypurpose] = useState("");
  let [propertyprice, setpropertyprice] = useState("");
  let [propertyspace, setpropertyspace] = useState("");
  let [propertythumbnail, setpropertythumbnail] = useState("");
  let [propertyimages, setpropertyimages] = useState("");
  let [propertyaddress, setpropertyaddress] = useState("");
  let [propertycity, setpropertycity] = useState("");
  let [propertycountry, setpropertycountry] = useState("");
  let [propertytitle, setpropertytitle] = useState("");
  let [propertyareatype, setpropertyareatype] = useState("");
  let [agent, setagent] = useState([]);
  let [agents, setagents] = useState([]);

  function indication() {
    return <EmptyArea />;
  }

  function ondetails(row) {
    // this.setState({ rowdata: row, fordetails: true, showdetailsofoffice: true });
    setSelectedRow(row);
    setpropertytype(row.property_type);
    setpropertydescription(row.description);
    setpropertysubtype(row.propertysubtype);
    setpropertypurpose(row.property_purpose);
    setpropertyprice(row.price);
    setpropertyspace(row.area);
    setpropertyaddress(row.address);
    setpropertycity(row.city);
    setpropertycountry(row.country);
    setpropertytitle(row.title);
    setpropertyareatype(row.area_type);
    setEditingProperty(false);
    toggleEditPropertyModal(true);
  }

  function onedit(row) {
    // this.setState({ rowdata: row, fordetails: true, showdetailsofoffice: true });

    try {
      axios.post(globalvariables.data.Basicapi + "getPropertyImagesOnPropertyID",
        {
          property_ID: row.property_ID
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(async (response) => {
          console.log("Finding properties images successfully", response.data);
          row = { ...row, image: response.data }
          setSelectedRow(row);
          toggleEditPropertyModal(true);
          setEditingProperty(true)
        })
        .catch(error => {
          alert("in catch of axios while Find images properties", error.toString());

        });

    } catch (error) {

      alert("in try catch while Finding Images", error.toString());

    }

  }
  function ondelete(row) {
    setproperty_ID(row.property_ID);
    setvisible1(true);

  }

  function tableRowActions(cell, row, rowIndex, formatExtraData) {
    return (
      <><Link
        onClick={() => {
          ondetails(row);
        }}
      >
        <Tooltip title={"Details"} placement={"right"}>
          <InfoIcon style={infoIconColor} />
        </Tooltip>
      </Link>

        <Link
          style={{ marginLeft: '5%' }}
          onClick={() => {
            onedit(row);
          }}
        >
          <Tooltip title={"Edit"} placement={"right"}>
            <EditIcon style={editIconColor} />
          </Tooltip>
        </Link>

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


  function agentconnected(cell, row) {
    if (row.agent_ID) {
      return (
        <span>
          <strong style={{ color: 'green' }}>Yes</strong>
        </span>
      );
    }

    return (
      <span>No</span>
    );
  }

  function coverphoto(cell, row) {
    return (
      <span>
        <img src={cell} alt="Cover Photo" />
      </span>
    );


  }
  const [propetycolums, setpropetycolums] = useState([
    {

      dataField: "property_ID",
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
      dataField: "area_type",
      text: "Area Type",
      sort: true,
    },
    {
      dataField: "property_type",
      text: "Property Type",
      sort: true,
    }, {
      dataField: "dateOfAdvert",
      text: "Date of Advert",
      sort: true,
    },
    {
      dataField: "agent_ID",
      text: "Agent Connected",
      formatter: agentconnected
    },
    {
      dataField: "img_path",
      text: "Cover Photo",
      formatter: coverphoto
    },

    {
      dataField: "details",
      text: "",
      formatter: tableRowActions,
    },

  ])
  const [properties, Setproperties] = useState([]);
  const [editingProperty, setEditingProperty] = useState(false);
  const [listinggallery, setlistinggallery] = useState([]);
  const [visible1, setvisible1] = useState(false);

  const getUploadParams = async ({ file, meta: { name } }) => {
    return { url: 'https://httpbin.org/post' }

  }
  const updateproperty = async () => {
    try {
      console.log("UDPATED VAUE: ", selectedRow)
      await axios.patch(globalvariables.data.Basicapi + "updateProperty",
        {
          'property_ID': selectedRow.property_ID,
          'agent_ID': selectedRow.agent_ID,
          'title': selectedRow.title,
          'address': selectedRow.address,
          'city': selectedRow.city,
          'country': selectedRow.country,
          'lat': '34.3',
          'long': '22.3',
          'area': selectedRow.area,
          'property_type': selectedRow.property_type,
          'property_purpose': selectedRow.property_purpose,
          'price': selectedRow.price,
          'area_type': selectedRow.area_type,
          'sub_type': selectedRow.sub_type,
          'description': selectedRow.description,

        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(async (response) => {
          getProperties()
          console.log("property added successfully", response);

        })
        .catch(error => {
          alert("in catch of axios while submitting property", error.toString());
        });
    } catch (error) {
      console.log(error);
      alert("in try catch while submitting property", error.toString());

    }
  }


  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
  }

  useEffect(async () => {
    getProperties()
  }, []);

  useEffect(async () => {
    try {
      const res = await axios.get(globalvariables.data.Basicapi + "getAllAgents",
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      console.log("res from getting agents", res.data);
      if (res.data.length > 0) {
        setagents(res.data)

      }

    } catch (error) {
      alert("From try catch of getting agents", error.toString());

      // console.log(error);
    }
  }, []);

  var getProperties = async () => {
    try {
      let user_ID1 = localStorage.getItem("user_ID")
      const res = await axios.post(globalvariables.data.Basicapi + "getPropertyOnUserID",
        {
          user_ID: user_ID1
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      console.log("res from getting properties", res.data);
      if (res.data.length > 0) {
        Setproperties(res.data)

      }

    } catch (error) {
      alert("From try catch of getting properties", error.toString());

      // console.log(error);
    }
  }


  return (
    <>
      <Container fluid>

        <Link to="/submit-listing" className="btn-custom primary">Add Property</Link>

        <TableViewTemplate
          keyField={"property_ID"}
          data={properties}
          columns={propetycolums}
          addButtonText={"Add Property"}
          tabTitle={"Properties"}
          addButtonOnClick={() => { }
            // setdisplaymodal(true)
          }
          exportCsvButtonShow={true}
          addButtonShow={false}
        />


      </Container>

      <Modal
        style={{ zIndex: '10000000' }}
        show={editPropertyModal}
        centered
        size="lg"
      >
        <Modal.Header style={{ backgroundColor: "#CAAE59", color: "white" }}>

          <Modal.Title>
            {editingProperty ? "Edit Property" : "View Details"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>

            {editingProperty ? (
              <Container>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label>Title</label>
                    <input type="text" name="title" className="form-control" placeholder="Title" defaultValue={selectedRow.title} onChange={(event) => { console.log(selectedRow); selectedRow.title = event.target.value; setSelectedRow(selectedRow); }} />
                  </div>
                  <div className="col-md-12 form-group">
                    <label>Property Description</label>
                    <textarea name="content" defaultValue={selectedRow.description}
                      onChange={(event) => { selectedRow.description = event.target.value; setSelectedRow(selectedRow); }}
                      rows={4} className="form-control" placeholder="Property Description" />
                  </div>
                  <div className="col-md-12 form-group">
                    <label>Edit Agent<span style={{ color: "red" }}>*</span></label>
                    <select className="form-control" defaultValue={selectedRow.agent_ID} name="status" onChange={(event) => { selectedRow.agent_ID = event.target.value; setSelectedRow(selectedRow) }}>
                      <option value={null}>{"Select Agent"}</option>
                      {agents.map((item) => {
                        return <option value={item.agent_ID}>{item.firstName + " " + item.lastName + " - " + item.email}</option>

                      })}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label>Property Type<span style={{ color: "red" }}>*</span></label>
                    <select className="form-control" name="type"
                      onChange={event => { selectedRow.property_type = event.target.value; setpropertytype(selectedRow) }}
                      defaultValue={selectedRow.property_type}
                    >
                      <option value="none">None</option>
                      <option value="Land/Plot">Land/Plot</option>
                      <option value="Buildings">Buildings</option>

                    </select>
                  </div>
                  {
                    propertytype === "none" ? (null) :
                      (null)

                  }
                  {
                    propertytype === "Land/Plot" ? (<div className="col-md-6">
                      <label>Property Sub Type<span style={{ color: "red" }}>*</span></label>
                      <select className="form-control" name="subtype" defaultValue={selectedRow.sub_type} onChange={(event) => {
                        selectedRow.sub_type = event.target.value;
                        setSelectedRow(selectedRow);
                      }}>
                        <option value="openLand">Open Land</option>
                        <option value="ResidentialPlot">Residential Plot</option>
                        <option value="Commercial">Commercial Plot</option>
                        <option value="AgriculturalLand">Agricultural Land</option>
                        <option value="IndustrialLand">Industrial Plot</option>
                      </select>
                    </div>) :
                      (null)

                  }
                  {
                    propertytype === "Buildings" ?
                      (<div className="col-md-6">
                        <label>Property Sub Type<span style={{ color: "red" }}>*</span></label>
                        <select className="form-control" name="type" defaultValue={selectedRow.sub_type} onChange={(event) => {
                          selectedRow.sub_type = event.target.value;
                          setSelectedRow(selectedRow);
                        }}>
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
                      </div>) : (null)

                  }

                  <div className="col-md-6 form-group">
                    <label>Property Purpose<span style={{ color: "red" }}>*</span></label>
                    <select className="form-control" name="status" defaultValue={selectedRow.property_purpose} onChange={(event) => {
                      selectedRow.property_purpose = event.target.value;
                      setSelectedRow(selectedRow);
                    }}>
                      <option value="none">none</option>
                      <option value="Sale">Sale</option>
                      <option value="Purchase">Purchase</option>
                      <option value="Rent">Rent</option>
                    </select>
                  </div>

                  <div className="col-md-6 form-group">
                    <label>Property Price<span style={{ color: "red" }}>*</span></label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">PKR</span>
                      </div>
                      <input type="text" className="form-control" name="price" defaultValue={selectedRow.price} onChange={(event) => { console.log("UPDATEEE: ", event.target.value); selectedRow.price = event.target.value; setSelectedRow(selectedRow) }} placeholder="Property Price" />
                    </div>
                  </div>


                  <div className="col-md-12 form-group">
                    <div className="row">
                      <div className="col-md-6">
                        <label>Area Type<span style={{ color: "red" }}>*</span></label>
                        <select className="form-control" name="type" defaultValue={selectedRow.area_type}
                          onChange={event => { selectedRow.area_type = event.target.value; setSelectedRow(selectedRow) }}

                        >
                          <option value="none">None</option>
                          <option value="squarefoot">Square foot</option>
                          <option value="yard">Yards</option>
                          <option value="marla">Marla</option>
                          <option value="kanal">Kanal</option>
                          <option value="moza">Moza</option>

                          <option value="acre">Acre</option>

                        </select>
                      </div>
                      <div className="col-md-6">
                        <label>Area<span style={{ color: "red" }}>*</span></label>
                        <input type="text" className="form-control" placeholder="Area " defaultValue={selectedRow.area} onChange={(event) => { selectedRow.area = event.target.value; setSelectedRow(selectedRow) }} name="space" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <label>Property Gallery</label>
                    <Dropzone
                      getUploadParams={getUploadParams}
                      onChangeStatus={handleChangeStatus}
                      // onSubmit={handleSubmit}
                      accept="image/*"
                      styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
                    />

                    <span className="acr-form-notice">*You can upload up to 10 images for your listing</span>
                    <span className="acr-form-notice">*Listing images should be atleast 620x480 in dimensions</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label>City</label>
                    <input type="text" name="city" className="form-control" defaultValue={selectedRow.city} placeholder="City" onChange={(event) => { selectedRow.city = event.target.value; setSelectedRow(selectedRow) }} />
                  </div>
                  <div className="col-md-12 form-group">
                    <label>Address</label>
                    <input type="text" name="address" className="form-control" defaultValue={selectedRow.address} placeholder="Address" onChange={(event) => { selectedRow.address = event.target.value; setSelectedRow(selectedRow) }} />
                  </div>
                  <div className="col-md-12 form-group">
                    <label>Country</label>
                    <input type="text" name="country" className="form-control" defaultValue={selectedRow.country} placeholder="Country" onChange={(event) => { selectedRow.country = event.target.value; setSelectedRow(selectedRow) }} />
                  </div>

                  <button className="btn-custom" onClick={updateproperty} >Update Listing</button>

                </div>
              </Container>

            ) : (
              <Container>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label>Title</label>
                    <input disabled type="text" name="title" className="form-control" placeholder="Title" onChange={(event) => { setpropertytitle(event.target.value) }} />
                  </div>
                  <div className="col-md-12 form-group">
                    <label>Property Description</label>
                    <textarea disabled name="content" value={propertydescription} onChange={(event) => { setpropertydescription(event.target.value) }} rows={4} className="form-control" placeholder="Property Description" />
                  </div>
                  <div className="col-md-12 form-group">
                    <label>Edit Agent<span style={{ color: "red" }}>*</span></label>
                    <select disabled className="form-control" name="status" onChange={(event) => { setagent(event.target.value) }}>
                      {agents.map((item) => {
                        return <option value={item.agent_ID}>{item.firstName + " " + item.lastName + "-" + item.email}</option>

                      })}



                    </select>
                  </div>

                  <div className="col-md-6">
                    <label>Property Type<span style={{ color: "red" }}>*</span></label>
                    <select disabled className="form-control" name="type"
                      onChange={event => setpropertytype(event.target.value)}
                      value={propertytype}
                    >
                      <option value="none">None</option>
                      <option value="Land/Plot">Land/Plot</option>
                      <option value="Buildings">Buildings</option>

                    </select>
                  </div>
                  {
                    propertytype === "none" ? (null) :
                      (null)

                  }
                  {
                    propertytype === "Land/Plot" ? (<div className="col-md-6">
                      <label>Property Sub Type<span style={{ color: "red" }}>*</span></label>
                      <select disabled className="form-control" name="subtype" value={propertysubtype} onChange={(event) => {
                        setpropertysubtype(event.target.value);
                      }}>
                        <option value="openLand">Open Land</option>
                        <option value="ResidentialPlot">Residential Plot</option>
                        <option value="Commercial">Commercial Plot</option>
                        <option value="AgriculturalLand">Agricultural Land</option>
                        <option value="IndustrialLand">Industrial Plot</option>
                      </select>
                    </div>) :
                      (null)

                  }
                  {
                    propertytype === "Buildings" ?
                      (<div className="col-md-6">
                        <label>Property Sub Type<span style={{ color: "red" }}>*</span></label>
                        <select disabled className="form-control" name="type" value={propertysubtype} onChange={(event) => {
                          setpropertysubtype(event.target.value)
                        }}>
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
                      </div>) : (null)

                  }

                  <div className="col-md-6 form-group">
                    <label>Property Purpose<span style={{ color: "red" }}>*</span></label>
                    <select disabled className="form-control" name="status" value={propertypurpose} onChange={(event) => { setpropertypurpose(event.target.value) }}>
                      <option value="none">none</option>
                      <option value="Sale">Sale</option>
                      <option value="Purchase">Purchase</option>
                      <option value="Rent">Rent</option>


                    </select>
                  </div>

                  <div className="col-md-6 form-group">
                    <label>Property Price<span style={{ color: "red" }}>*</span></label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">PKR</span>
                      </div>
                      <input disabled type="text" className="form-control" name="price" value={propertyprice} onChange={(event) => { setpropertyprice(event.target.value) }} placeholder="Property Price" />
                    </div>

                  </div>


                  <div className="col-md-12 form-group">
                    <div className="row">

                      <div className="col-md-6">

                        <label>Area Type<span style={{ color: "red" }}>*</span></label>
                        <select disabled className="form-control" name="type" value={propertyareatype}
                          onChange={event => setpropertyareatype(event.target.value)}

                        >
                          <option value="none">None</option>
                          <option value="squarefoot">Square foot</option>
                          <option value="yard">Yards</option>
                          <option value="marla">Marla</option>
                          <option value="kanal">Kanal</option>
                          <option value="moza">Moza</option>

                          <option value="acre">Acre</option>

                        </select>
                      </div>
                      <div className="col-md-6">
                        <label>Area<span style={{ color: "red" }}>*</span></label>
                        <input disabled type="text" className="form-control" placeholder="Area " value={propertyspace} onChange={(event) => { setpropertyspace(event.target.value) }} name="space" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <label>Property Gallery</label>
                    {
                      listinggallery.map((item) => {
                        return <img src={item.img_path} alt="image gallery" style={{ width: "300px", height: "250px" }} />
                      })
                    }



                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label>City</label>
                    <input disabled type="text" name="city" className="form-control" value={propertycity} placeholder="City" onChange={(event) => { setpropertycity(event.target.value) }} />
                  </div>
                  <div className="col-md-12 form-group">
                    <label>Address</label>
                    <input disabled type="text" name="address" className="form-control" value={propertyaddress} placeholder="Address" onChange={(event) => { setpropertyaddress(event.target.value) }} />
                  </div>
                  <div className="col-md-12 form-group">
                    <label>Country</label>
                    <input disabled type="text" name="country" className="form-control" value={propertycountry} placeholder="Country" onChange={(event) => { setpropertycountry(event.target.value) }} />
                  </div>

                </div>
              </Container>

            )}
          </div>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={() => {
            toggleEditPropertyModal(false);
          }}>
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
            Delete Property
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <h3>Do you want to delete this property</h3>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={async () => {

            try {
              await axios.patch(globalvariables.data.Basicapi + "deleteProperty",
                {
                  'property_ID': property_ID,
                },
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                })
                .then(async (response) => {
                  console.log("property Deleted successfully");
                  setvisible1(false);


                })
                .catch(error => {
                  alert("in catch of axios while Deleteing property", error.toString());
                });
            } catch (error) {
              console.log(error);
              alert("in try catch while deleting property", error.toString());

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



export default compose(
  withStyles(Styles)
)(MembersArea);
