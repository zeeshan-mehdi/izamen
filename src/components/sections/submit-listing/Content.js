import React, { useEffect, useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import Locationtab from './Locationtab';
import globalvariables from "../../../globalvariables";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader';
import { connect } from 'react-redux';

// Features
const features = [
    { id: 1, icon: 'bone', title: 'Pet Friendly' },
    { id: 2, icon: 'chair', title: 'Furnished' },
    { id: 3, icon: 'fan', title: 'Cooling' },
    { id: 4, icon: 'garage', title: 'Parking' },
    { id: 5, icon: 'mailbox', title: 'Mailbox' },
    { id: 6, icon: 'eye', title: 'City View' },
];
var images = [];
function Content(props) {
    const [files, setFiles] = useState([]);
    const [coverphoto,setcoverphoto]=useState("");
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });
    const getUploadParams = async ({ file, meta: { name } }) => {
        images.push(file)
        return { url: 'https://httpbin.org/post' }

    }

    // const getUploadParams = async ({ meta: { name } }) => {
    //     const { fields, uploadUrl, fileUrl } = await axios.get("https://pyd24ltfqe.execute-api.ap-southeast-1.amazonaws.com/default/getpropertyimages");

    //     return { fields, meta: { fileUrl }, url: uploadUrl }
    //   }
    const handleChangeStatus = ({ meta }, status) => {
        console.log(status, meta)
    }

    // const handleSubmit = (files, allFiles) => {
    //     console.log(files.map(f => f))
    //     files.map(async (f) => {
    //         var s3Endpoint = await axios.get("https://pyd24ltfqe.execute-api.ap-southeast-1.amazonaws.com/default/getpropertyimages");
    //         console.log("RESPONSE: ",s3Endpoint)
    //         var file_name = s3Endpoint.photoFilename;
    //         var s3UploadLink = s3Endpoint.uploadURL
    //         var filename = file_name
    //         let binary = atob(f.split(',')[1])
    //         let array = []
    //         for (var i = 0; i < binary.length; i++) {
    //           array.push(binary.charCodeAt(i))
    //         }
    //         let blobData = new Blob([new Uint8Array(array)], {type: 'image/jpeg'})
    //         console.log("blobData");
    //         const result = await fetch(s3UploadLink, {
    //             method: 'PUT',
    //             body: blobData
    //         })
    //     })
    //     allFiles.forEach(f => f.remove())
    // }
    async function submitinglist() {
        try {
            let newdate = new Date();
            let month = newdate.getMonth() + 1;
            let year = newdate.getYear() + 1900;
            let date = newdate.getDate();
            let seconds = newdate.getSeconds();
            let minutes = newdate.getMinutes();
            let hour = newdate.getHours();
            let uid=localStorage.getItem("user_ID");
            let acctype=localStorage.getItem("accountType");
            await axios.post(globalvariables.data.Basicapi + "addProperty",
                {
                    'user_ID': uid,
                    'address': propertyaddress,
                    'city': propertycity,
                    'country': propertycountry,
                    'title': propertytitle,
                    'lat': '34.3',
                    'long': '22.3',
                    'area': propertyspace,
                    'property_type': propertytype,
                    'property_purpose': propertypurpose,
                    'price': propertyprice,
                    'dateOfAdvert': year + "-" + month + "-" + date + " " + hour + ":" + minutes + ":" + seconds,
                    'area_type': propertyareatype,
                    'sub_type': propertysubtype,
                    'description': propertydescription,
                    'agent_ID': acctype == 'agent'?this.state.userprofile.agent_ID:null,
                    'img_path':coverphoto
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(async (response) => {
                    console.log("imaes for properties",images)
                    images.forEach(async (image) => {

                        var s3Endpoint = await axios.get("https://pyd24ltfqe.execute-api.ap-southeast-1.amazonaws.com/default/getpropertyimages");
                        var file_name = s3Endpoint.data.photoFilename;
                        var s3UploadLink = s3Endpoint.data.uploadURL

                        console.log("Result", s3UploadLink, file_name, image);
                        setcoverphoto("https://induslandphotos.s3-ap-southeast-1.amazonaws.com/" + file_name);

                        const result = await fetch(s3UploadLink, {
                            method: 'PUT',
                            body: image
                        })
                        setcoverphoto("https://induslandphotos.s3-ap-southeast-1.amazonaws.com/" + file_name);
                        axios.post(globalvariables.data.Basicapi + "addPropertyImage",
                            {
                                property_ID: response.data.property_ID,
                                img_link: "https://induslandphotos.s3-ap-southeast-1.amazonaws.com/" + file_name
                            },
                            {
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            })
                    })
                    console.log("property added successfully", response);
                    toast.success(' Property Added Successfully', {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
                .catch(error => {
                    alert("in catch of axios while submitting property", error.toString());
                });
        } catch (error) {
            console.log(error);
            alert("in try catch while submitting property", error.toString());

        }
    }

    const thumbs = files.map(file => (
        <div className="thumb" key={file.name}>
            <div className="thumbInner">
                <img
                    src={file.preview}
                    alt="img"
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
    let [propertytype, setpropertytype] = useState("");
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

    // let [propertytype, setpropertytype] = useState("");

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <Tab.Container defaultActiveKey="tab1">
                        {/* Tabs Start */}
                        <div className="col-md-4">
                            <Nav variant="tabs" className="nav nav-tabs tab-cards">
                                <Nav.Item>
                                    <Nav.Link eventKey="tab1"><span>01</span> Basic Information</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab2"><span>02</span> Gallery</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab3"><span>03</span> Location</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="tab4"><span>04</span> Features</Nav.Link>
                                </Nav.Item> */}
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="tab5"><span>04</span> Details</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                        </div>
                        {/* Tabs End */}
                        {/* Tab Content Start */}
                        <div className="col-md-8">
                            <Tab.Content className="m-0">
                                <Tab.Pane eventKey="tab1">
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <label>Title</label>
                                            <input type="text" name="title" className="form-control" placeholder="Title" onChange={(event) => { setpropertytitle(event.target.value) }} />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <label>Property Description<span style={{ color: "red" }}>*</span></label>
                                            <textarea name="content" value={propertydescription} onChange={(event) => { setpropertydescription(event.target.value) }} rows={4} className="form-control" placeholder="Property Description" />
                                        </div>
                                        {/* <div className="col-md-6 form-group">
                                                <label>Property Name</label>
                                                <input type="text" className="form-control" placeholder="Property Name" name="name" />
                                            </div> */}
                                        <div className="col-md-6">
                                            <label>Property Type<span style={{ color: "red" }}>*</span></label>
                                            <select className="form-control" name="type"
                                                onChange={event => setpropertytype(event.target.value)}

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
                                                <select className="form-control" name="subtype" onChange={(event) => {
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
                                                    <select className="form-control" name="type" onChange={(event) => {
                                                        setpropertysubtype(event.target.value)
                                                        console.log("help,", propertysubtype)
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
                                            <select className="form-control" name="status" onChange={(event) => { setpropertypurpose(event.target.value) }}>
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
                                                <input type="text" className="form-control" name="price" value={propertyprice} onChange={(event) => { setpropertyprice(event.target.value) }} placeholder="Property Price" />
                                            </div>

                                        </div>
                                        {/* <div className="col-md-6">
                                                <label>Rental Period</label>
                                                <select className="form-control" name="period">
                                                    <option value="Monthly">Monthly</option>
                                                    <option value="Yearly">Yearly</option>
                                                </select>
                                            </div> */}

                                        <div className="col-md-12 form-group">
                                            <div className="row">

                                                <div className="col-md-6">

                                                    <label>Area Type<span style={{ color: "red" }}>*</span></label>
                                                    <select className="form-control" name="type"
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
                                                    <input type="text" className="form-control" placeholder="Area " value={propertyspace} onChange={(event) => { setpropertyspace(event.target.value) }} name="space" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-12 form-group">
                                                <label>Property Video</label>
                                                <input type="text" className="form-control" placeholder="Property Video URL" name="video" />
                                            </div> */}

                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab2">
                                    {/* <div className="form-group">
                                        <label>Property Thumbnail</label>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="propertyThumbnail" />
                                            <label className="custom-file-label" htmlFor="propertyThumbnail">Choose file</label>
                                        </div>
                                    </div> */}
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
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab3">
                                    {/* <Locationtab /> */}
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <label>City</label>
                                            <input type="text" name="city" className="form-control" placeholder="City" onChange={(event) => { setpropertycity(event.target.value) }} />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <label>Address</label>
                                            <input type="text" name="address" className="form-control" placeholder="Address" onChange={(event) => { setpropertyaddress(event.target.value) }} />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <label>Country</label>
                                            <input type="text" name="country" className="form-control" placeholder="Country" onChange={(event) => { setpropertycountry(event.target.value) }} />
                                        </div>

                                        <button className="btn-custom" onClick={submitinglist}>Submit Listing</button>

                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab4">
                                    <div className="row">
                                        {features.map((item, i) => (
                                            <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                                                <label className="acr-listing-feature">
                                                    <input type="checkbox" name={"feature" + item.id + ""} />
                                                    <i className="acr-feature-check fas fa-check" />
                                                    <i className={"acr-listing-feature-icon flaticon-" + item.icon + ""} />
                                                    {item.title}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab5">
                                    <div className="row">
                                        {/* <div className="col-md-6 form-group">
                                                <label>Property ID</label>
                                                <input type="text" className="form-control" placeholder="Property ID" name="id" />
                                            </div> */}
                                        <div className="col-md-6 form-group">
                                            <label>Beds</label>
                                            <input type="text" className="form-control" placeholder="Number of Beds" name="beds" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Bathrooms</label>
                                            <input type="text" className="form-control" placeholder="Number of Bathrooms" name="baths" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Condition</label>
                                            <input type="text" className="form-control" placeholder="Property Condition" name="condition" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Year Built</label>
                                            <input type="text" className="form-control" placeholder="Property Year Built" name="built" />
                                        </div>
                                        {/* <div className="col-md-6 form-group">
                                                <label>Neighborhood</label>
                                                <input type="text" className="form-control" placeholder="Property Neighborhood" name="neighborhood" />
                                            </div> */}
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="termsAndConditions" />
                                            <label className="custom-control-label" htmlFor="termsAndConditions">I Agree to the terms &amp; Conditions of Property Submission</label>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Tab.Container>
                    {/* Tab Content End */}
                    <ToastContainer />

                </div>
            </div>
        </div >

    );
}
const mapStateToProps = state => {
    return {
        userprofile: state.userprofile,
    };

}

export default connect(mapStateToProps)(Content);


//////////////////////////////////////////////////////////////////
////Old one
///////////////////////////////////////////////////////////////



// import React, { useEffect, useState } from 'react';
// import { Tab, Nav } from 'react-bootstrap';
// import { useDropzone } from 'react-dropzone';
// import Locationtab from './Locationtab';
// import globalvariables from "../../../globalvariables";
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'react-dropzone-uploader/dist/styles.css'
// import Dropzone from 'react-dropzone-uploader';
// import {connect} from 'react-redux';

// // Features
// const features = [
//     { id: 1, icon: 'bone', title: 'Pet Friendly' },
//     { id: 2, icon: 'chair', title: 'Furnished' },
//     { id: 3, icon: 'fan', title: 'Cooling' },
//     { id: 4, icon: 'garage', title: 'Parking' },
//     { id: 5, icon: 'mailbox', title: 'Mailbox' },
//     { id: 6, icon: 'eye', title: 'City View' },
// ];
// var images=[];
// function Content(props) {
//     const [files, setFiles] = useState([]);
//     // const { getRootProps, getInputProps } = useDropzone({
//     //     accept: 'image/*',
//     //     onDrop: acceptedFiles => {
//     //         setFiles(acceptedFiles.map(file => Object.assign(file, {
//     //             preview: URL.createObjectURL(file)
//     //         })));
//     //     }
//     // });
//     const getUploadParams = async ({ file, meta: { name } }) => {
//         // const { uploadUrl, fileUrl } = await axios.get("https://pyd24ltfqe.execute-api.ap-southeast-1.amazonaws.com/default/getpropertyimages");
//         // const result = await fetch(uploadUrl, {
//         //     method: 'PUT',
//         //     body: file
//         // })
//         // var s3Endpoint = await axios.get("https://pyd24ltfqe.execute-api.ap-southeast-1.amazonaws.com/default/getpropertyimages");
//         //         var file_name = s3Endpoint.data.photoFilename;
//         //         var s3UploadLink = s3Endpoint.data.uploadURL
//         //         var filename = file_name
//         // console.log("Result",s3UploadLink,file_name,file)
//         // const result = await fetch(s3UploadLink, {
//         //     method: 'PUT',
//         //     body: file
//         // })
//         // images.push({imagepath:"https://induslandphotos.s3-ap-southeast-1.amazonaws.com/"+file_name})
//         // console.log(images);
//         // return;
//         images.push(file);
//         console.log("images",images);
//         return { url: 'https://httpbin.org/post' }

//       }
  
//     // const getUploadParams = async ({ meta: { name } }) => {
//     //     const { fields, uploadUrl, fileUrl } = await axios.get("https://pyd24ltfqe.execute-api.ap-southeast-1.amazonaws.com/default/getpropertyimages");
       
//     //     return { fields, meta: { fileUrl }, url: uploadUrl }
//     //   }
//     const handleChangeStatus = ({ meta }, status) => {
//         console.log(status, meta)
//     }

//     // const handleSubmit = (files, allFiles) => {
//     //     console.log(files.map(f => f))
//     //     files.map(async (f) => {
//     //         var s3Endpoint = await axios.get("https://pyd24ltfqe.execute-api.ap-southeast-1.amazonaws.com/default/getpropertyimages");
//     //         console.log("RESPONSE: ",s3Endpoint)
//     //         var file_name = s3Endpoint.photoFilename;
//     //         var s3UploadLink = s3Endpoint.uploadURL
//     //         var filename = file_name
//     //         let binary = atob(f.split(',')[1])
//     //         let array = []
//     //         for (var i = 0; i < binary.length; i++) {
//     //           array.push(binary.charCodeAt(i))
//     //         }
//     //         let blobData = new Blob([new Uint8Array(array)], {type: 'image/jpeg'})
//     //         console.log("blobData");
//     //         const result = await fetch(s3UploadLink, {
//     //             method: 'PUT',
//     //             body: blobData
//     //         })
//     //     })
//     //     allFiles.forEach(f => f.remove())
//     // }
//     function submitinglist() {
//         try {
//             let newdate = new Date();
//             let month = newdate.getMonth() + 1;
//             let year = newdate.getYear() + 1900;
//             let date = newdate.getDate();
//             let seconds = newdate.getSeconds();
//             let minutes = newdate.getMinutes();
//             let hour = newdate.getHours();
//             axios.post(globalvariables.data.Basicapi + "addProperty",
//                 {
//                     'user_ID': this.state.userprofile.user_ID,
//                     'address': propertyaddress,
//                     'city': propertycity,
//                     'country': propertycountry,
//                     'title': propertytitle,
//                     'lat': '34.3',
//                     'long': '22.3',
//                     'area': propertyspace,
//                     'property_type': propertytype,
//                     'property_purpose': propertypurpose,
//                     'price': propertyprice,
//                     'dateOfAdvert': year + "-" + month + "-" + date + " " + hour + ":" + minutes + ":" + seconds,
//                     'area_type': propertyareatype,
//                     'sub_type': propertysubtype,
//                     'description': propertydescription,
//                     'agent_ID': '2'
//                 },
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 })
//                 .then(async (response) => {
//                     console.log("property added successfully", response);
//                     toast.success(' Property Added Successfully', {
//                         position: "bottom-center",
//                         autoClose: 3000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                     });
//                 })
//                 .catch(error => {
//                     alert("in catch of axios while submitting property", error.toString());

//                 });
//         } catch (error) {

//             alert("in try catch while submitting property", error.toString());

//         }
//     }

//     const thumbs = files.map(file => (
//         <div className="thumb" key={file.name}>
//             <div className="thumbInner">
//                 <img
//                     src={file.preview}
//                     alt="img"
//                 />
//             </div>
//         </div>
//     ));

//     useEffect(() => () => {
//         // Make sure to revoke the data uris to avoid memory leaks
//         files.forEach(file => URL.revokeObjectURL(file.preview));
//     }, [files]);
//     let [propertytype, setpropertytype] = useState("");
//     let [propertydescription, setpropertydescription] = useState("");
//     let [propertysubtype, setpropertysubtype] = useState("");
//     let [propertypurpose, setpropertypurpose] = useState("");
//     let [propertyprice, setpropertyprice] = useState("");
//     let [propertyspace, setpropertyspace] = useState("");
//     let [propertythumbnail, setpropertythumbnail] = useState("");
//     let [propertyimages, setpropertyimages] = useState("");
//     let [propertyaddress, setpropertyaddress] = useState("");
//     let [propertycity, setpropertycity] = useState("");
//     let [propertycountry, setpropertycountry] = useState("");
//     let [propertytitle, setpropertytitle] = useState("");
//     let [propertyareatype, setpropertyareatype] = useState("");

//     // let [propertytype, setpropertytype] = useState("");

//     return (
//         <div className="section">
//             <div className="container">
//                 <div className="row">
//                     <Tab.Container defaultActiveKey="tab1">
//                         {/* Tabs Start */}
//                         <div className="col-md-4">
//                             <Nav variant="tabs" className="nav nav-tabs tab-cards">
//                                 <Nav.Item>
//                                     <Nav.Link eventKey="tab1"><span>01</span> Basic Information</Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link eventKey="tab2"><span>02</span> Gallery</Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link eventKey="tab3"><span>03</span> Location</Nav.Link>
//                                 </Nav.Item>
//                                 {/* <Nav.Item>
//                                     <Nav.Link eventKey="tab4"><span>04</span> Features</Nav.Link>
//                                 </Nav.Item> */}
//                                 {/* <Nav.Item>
//                                     <Nav.Link eventKey="tab5"><span>04</span> Details</Nav.Link>
//                                 </Nav.Item> */}
//                             </Nav>
//                         </div>
//                         {/* Tabs End */}
//                         {/* Tab Content Start */}
//                         <div className="col-md-8">
//                             <Tab.Content className="m-0">
//                                 <Tab.Pane eventKey="tab1">
//                                     <div className="row">
//                                         <div className="col-md-12 form-group">
//                                             <label>Title</label>
//                                             <input type="text" name="title" className="form-control" placeholder="Title" onChange={(event) => { setpropertytitle(event.target.value) }} />
//                                         </div>
//                                         <div className="col-md-12 form-group">
//                                             <label>Property Description<span style={{ color: "red" }}>*</span></label>
//                                             <textarea name="content" value={propertydescription} onChange={(event) => { setpropertydescription(event.target.value) }} rows={4} className="form-control" placeholder="Property Description" />
//                                         </div>
//                                         {/* <div className="col-md-6 form-group">
//                                                 <label>Property Name</label>
//                                                 <input type="text" className="form-control" placeholder="Property Name" name="name" />
//                                             </div> */}
//                                         <div className="col-md-6">
//                                             <label>Property Type<span style={{ color: "red" }}>*</span></label>
//                                             <select className="form-control" name="type"
//                                                 onChange={event => setpropertytype(event.target.value)}

//                                             >
//                                                 <option value="none">None</option>
//                                                 <option value="Land/Plot">Land/Plot</option>
//                                                 <option value="Buildings">Buildings</option>

//                                             </select>
//                                         </div>
//                                         {
//                                             propertytype === "none" ? (null) :
//                                                 (null)

//                                         }
//                                         {
//                                             propertytype === "Land/Plot" ? (<div className="col-md-6">
//                                                 <label>Property Sub Type<span style={{ color: "red" }}>*</span></label>
//                                                 <select className="form-control" name="subtype" onChange={(event) => {
//                                                     setpropertysubtype(event.target.value);
//                                                 }}>
//                                                     <option value="openLand">Open Land</option>
//                                                     <option value="ResidentialPlot">Residential Plot</option>
//                                                     <option value="Commercial">Commercial Plot</option>
//                                                     <option value="AgriculturalLand">Agricultural Land</option>
//                                                     <option value="IndustrialLand">Industrial Plot</option>
//                                                 </select>
//                                             </div>) :
//                                                 (null)

//                                         }
//                                         {
//                                             propertytype === "Buildings" ?
//                                                 (<div className="col-md-6">
//                                                     <label>Property Sub Type<span style={{ color: "red" }}>*</span></label>
//                                                     <select className="form-control" name="type" onChange={(event) => {
//                                                         setpropertysubtype(event.target.value)
//                                                         console.log("help,", propertysubtype)
//                                                     }}>
//                                                         <option value="HouseProperty">House Property</option>
//                                                         <option value="Villa">Villa</option>
//                                                         <option value="FarmHouse">Farm House</option>
//                                                         <option value="Mall">Mall</option>
//                                                         <option value="Apartment">Apartment</option>
//                                                         <option value="AprtmentBlock">Apartment Block</option>
//                                                         <option value="Hotel">Hotel</option>
//                                                         <option value="IndustrialBuilding">Industrial Building</option>
//                                                         <option value="PentHouse">Pent House</option>

//                                                     </select>
//                                                 </div>) : (null)

//                                         }

//                                         <div className="col-md-6 form-group">
//                                             <label>Property Purpose<span style={{ color: "red" }}>*</span></label>
//                                             <select className="form-control" name="status" onChange={(event) => { setpropertypurpose(event.target.value) }}>
//                                                 <option value="none">none</option>
//                                                 <option value="Sale">Sale</option>
//                                                 <option value="Purchase">Purchase</option>
//                                                 <option value="Rent">Rent</option>


//                                             </select>
//                                         </div>

//                                         <div className="col-md-6 form-group">
//                                             <label>Property Price<span style={{ color: "red" }}>*</span></label>
//                                             <div className="input-group">
//                                                 <div className="input-group-prepend">
//                                                     <span className="input-group-text">PKR</span>
//                                                 </div>
//                                                 <input type="text" className="form-control" name="price" value={propertyprice} onChange={(event) => { setpropertyprice(event.target.value) }} placeholder="Property Price" />
//                                             </div>

//                                         </div>
//                                         {/* <div className="col-md-6">
//                                                 <label>Rental Period</label>
//                                                 <select className="form-control" name="period">
//                                                     <option value="Monthly">Monthly</option>
//                                                     <option value="Yearly">Yearly</option>
//                                                 </select>
//                                             </div> */}

//                                         <div className="col-md-12 form-group">
//                                             <div className="row">

//                                                 <div className="col-md-6">

//                                                     <label>Area Type<span style={{ color: "red" }}>*</span></label>
//                                                     <select className="form-control" name="type"
//                                                         onChange={event => setpropertyareatype(event.target.value)}

//                                                     >
//                                                         <option value="none">None</option>
//                                                         <option value="squarefoot">Square foot</option>
//                                                         <option value="yard">Yards</option>
//                                                         <option value="marla">Marla</option>
//                                                         <option value="kanal">Kanal</option>
//                                                         <option value="moza">Moza</option>

//                                                         <option value="acre">Acre</option>

//                                                     </select>
//                                                 </div>
//                                                 <div className="col-md-6">
//                                                     <label>Area<span style={{ color: "red" }}>*</span></label>
//                                                     <input type="text" className="form-control" placeholder="Area " value={propertyspace} onChange={(event) => { setpropertyspace(event.target.value) }} name="space" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         {/* <div className="col-md-12 form-group">
//                                                 <label>Property Video</label>
//                                                 <input type="text" className="form-control" placeholder="Property Video URL" name="video" />
//                                             </div> */}

//                                     </div>
//                                 </Tab.Pane>
//                                 <Tab.Pane eventKey="tab2">
//                                     {/* <div className="form-group">
//                                         <label>Property Thumbnail</label>
//                                         <div className="custom-file">
//                                             <input type="file" className="custom-file-input" id="propertyThumbnail" />
//                                             <label className="custom-file-label" htmlFor="propertyThumbnail">Choose file</label>
//                                         </div>
//                                     </div> */}
//                                     <div className="form-group">
//                                         <label>Property Gallery</label>



//                                         <Dropzone
//                                             getUploadParams={getUploadParams}
//                                             onChangeStatus={handleChangeStatus}
//                                             // onSubmit={handleSubmit}
//                                             styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
//                                         />

//                                         <span className="acr-form-notice">*You can upload up to 10 images for your listing</span>
//                                         <span className="acr-form-notice">*Listing images should be atleast 620x480 in dimensions</span>
//                                     </div>
//                                 </Tab.Pane>
//                                 <Tab.Pane eventKey="tab3">
//                                     {/* <Locationtab /> */}
//                                     <div className="row">
//                                         <div className="col-md-12 form-group">
//                                             <label>City</label>
//                                             <input type="text" name="city" className="form-control" placeholder="City" onChange={(event) => { setpropertycity(event.target.value) }} />
//                                         </div>
//                                         <div className="col-md-12 form-group">
//                                             <label>Address</label>
//                                             <input type="text" name="address" className="form-control" placeholder="Address" onChange={(event) => { setpropertyaddress(event.target.value) }} />
//                                         </div>
//                                         <div className="col-md-12 form-group">
//                                             <label>Country</label>
//                                             <input type="text" name="country" className="form-control" placeholder="Country" onChange={(event) => { setpropertycountry(event.target.value) }} />
//                                         </div>

//                                         <button className="btn-custom" onClick={submitinglist}>Submit Listing</button>

//                                     </div>
//                                 </Tab.Pane>
//                                 <Tab.Pane eventKey="tab4">
//                                     <div className="row">
//                                         {features.map((item, i) => (
//                                             <div key={i} className="col-lg-4 col-md-6 col-sm-6">
//                                                 <label className="acr-listing-feature">
//                                                     <input type="checkbox" name={"feature" + item.id + ""} />
//                                                     <i className="acr-feature-check fas fa-check" />
//                                                     <i className={"acr-listing-feature-icon flaticon-" + item.icon + ""} />
//                                                     {item.title}
//                                                 </label>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </Tab.Pane>
//                                 <Tab.Pane eventKey="tab5">
//                                     <div className="row">
//                                         {/* <div className="col-md-6 form-group">
//                                                 <label>Property ID</label>
//                                                 <input type="text" className="form-control" placeholder="Property ID" name="id" />
//                                             </div> */}
//                                         <div className="col-md-6 form-group">
//                                             <label>Beds</label>
//                                             <input type="text" className="form-control" placeholder="Number of Beds" name="beds" />
//                                         </div>
//                                         <div className="col-md-6 form-group">
//                                             <label>Bathrooms</label>
//                                             <input type="text" className="form-control" placeholder="Number of Bathrooms" name="baths" />
//                                         </div>
//                                         <div className="col-md-6 form-group">
//                                             <label>Condition</label>
//                                             <input type="text" className="form-control" placeholder="Property Condition" name="condition" />
//                                         </div>
//                                         <div className="col-md-6 form-group">
//                                             <label>Year Built</label>
//                                             <input type="text" className="form-control" placeholder="Property Year Built" name="built" />
//                                         </div>
//                                         {/* <div className="col-md-6 form-group">
//                                                 <label>Neighborhood</label>
//                                                 <input type="text" className="form-control" placeholder="Property Neighborhood" name="neighborhood" />
//                                             </div> */}
//                                     </div>
//                                     <div className="form-group">
//                                         <div className="custom-control custom-checkbox">
//                                             <input type="checkbox" className="custom-control-input" id="termsAndConditions" />
//                                             <label className="custom-control-label" htmlFor="termsAndConditions">I Agree to the terms &amp; Conditions of Property Submission</label>
//                                         </div>
//                                     </div>
//                                 </Tab.Pane>
//                             </Tab.Content>
//                         </div>
//                     </Tab.Container>
//                     {/* Tab Content End */}
//                     <ToastContainer />

//                 </div>
//             </div>
//         </div >

//     );
// }
// const mapStateToProps = state=> {
//     return{
//         userprofile: state.userprofile,
//     };
    
//  }

// export default connect(mapStateToProps)(Content);