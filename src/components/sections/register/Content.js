import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import globalvariables from "../../../globalvariables";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { userProfile } from '../../../redux/actions/userActions';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';
import Pic from '../../../assets/img/house-isolated-field.jpg'


const images = [
    { img: 'assets/img/coming-soon/1.jpg', title: "Quote of the day", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { img: 'assets/img/coming-soon/2.jpg', title: "Quote of the day", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { img: 'assets/img/coming-soon/3.jpg', title: "Quote of the day", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
];


class Content extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            email: "",
            contactNo: "",
            address: "",
            city: "",
            country: "",
            postalCode: "",
            image: null,
            agentcheck:false
        }
    }
    handleDrop = (dropped) => {
        this.setState({ image: dropped[0] })
    }
    async register() {
        try {
            if(this.state.agentcheck)
            {
                var s3Endpoint = await axios.get("https://pyd24ltfqe.execute-api.ap-southeast-1.amazonaws.com/default/getpropertyimages");
                var file_name = s3Endpoint.data.photoFilename;
                var s3UploadLink = s3Endpoint.data.uploadURL
                if (this.state.image !== null)
                    console.log("Result", s3UploadLink, file_name, this.state.image)
                const result = await fetch(s3UploadLink, {
                    method: 'PUT',
                    body: this.state.image
                }).then(async (response) => {
                    await axios.post(globalvariables.data.Basicapi + "createAgent",
                        {
                            'firstName': this.state.firstName,
                            'lastName': this.state.lastName,
                            'password': this.state.password,
                            'email': this.state.email,
                            'contactNo': this.state.contactNo,
                            'address': this.state.address,
                            'city': this.state.city,
                            'country': this.state.country,
                            'postalCode': this.state.postalCode,
                            'img_path': "https://induslandphotos.s3-ap-southeast-1.amazonaws.com/" + file_name,
                            'subscriptionAdded': '0',
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })
                        .then(async (response) => {
                            console.log("registered successfully", response.data);
                        })
                        .catch(error => {
                            toast.error(' Registeration Failed', {
                                position: "bottom-center",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                            console.log("in catch of axios while submitting registeration", error.toString());
                        });
                })
            }
            else
            {
            var s3Endpoint = await axios.get("https://pyd24ltfqe.execute-api.ap-southeast-1.amazonaws.com/default/getpropertyimages");
            var file_name = s3Endpoint.data.photoFilename;
            var s3UploadLink = s3Endpoint.data.uploadURL
            if (this.state.image !== null)
                console.log("Result", s3UploadLink, file_name, this.state.image)
            const result = await fetch(s3UploadLink, {
                method: 'PUT',
                body: this.state.image
            }).then(async (response) => {
                await axios.post(globalvariables.data.Basicapi + "createMember",
                    {
                        'firstName': this.state.firstName,
                        'lastName': this.state.lastName,
                        'password': this.state.password,
                        'email': this.state.email,
                        'contactNo': this.state.contactNo,
                        'address': this.state.address,
                        'city': this.state.city,
                        'country': this.state.country,
                        'postalCode': this.state.postalCode,
                        'img_path': "https://induslandphotos.s3-ap-southeast-1.amazonaws.com/" + file_name,
                        'subscriptionAdded': '0',
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                    .then(async (response) => {
                        console.log("registered successfully", response.data);
                    })
                    .catch(error => {
                        toast.error(' Registeration Failed', {
                            position: "bottom-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        console.log("in catch of axios while submitting registeration", error.toString());
                    });
            })
        }
        } catch (error) {

            toast.error(' Registeration Failed', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.log("in try catch while submitting registeration", error.toString());

        }
    }
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            dots: true,
            dotsClass: "d-flex slick-dots",
        }
        return (
            <div className="acr-auth-container">
                <div className="acr-auth-content" style={{ marginLeft: '25%' }}>
                    <form>
                        <div className="auth-text" style={{ paddingTop: '20%' }}>
                            <h3>Create An Acres Account</h3>
                        </div>


                        <div className="form-group">
                            <label>Profile Picture</label>
                            <AvatarEditor
                                image={this.state.image}
                                width={250}
                                height={250}
                                border={50}
                                color={[255, 255, 255, 0.6]} // RGBA
                                scale={1}
                                rotate={0}
                            />
                            <input type="file" className="form-control form-control-light" id="file-input" name="ImageStyle" onChange={(event) => {
                                console.log("IMAGE: ", event)
                                if (event.target.files[0])
                                    this.setState({ image: event.target.files[0] })
                            }} />
                        </div>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control form-control-light" placeholder="First Name" name="firstname" onChange={(event) => { this.setState({ firstName: event.target.value }) }} />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control form-control-light" placeholder="Last Name" name="lastname" onChange={(event) => { this.setState({ lastName: event.target.value }) }} />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" className="form-control form-control-light" placeholder="Email Address" name="email" onChange={(event) => { this.setState({ email: event.target.value }) }} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control form-control-light" placeholder="Password" name="password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
                        </div>
                        <div className="form-group">
                            <label>Contact No</label>
                            <input type="text" className="form-control form-control-light" placeholder="Contact No" name="contact" onChange={(event) => { this.setState({ contactNo: event.target.value }) }} />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control form-control-light" placeholder="Address" name="address" onChange={(event) => { this.setState({ address: event.target.value }) }} />
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control form-control-light" placeholder="city" name="city" onChange={(event) => { this.setState({ city: event.target.value }) }} />
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <input type="text" className="form-control form-control-light" placeholder="Country" name="country" onChange={(event) => { this.setState({ country: event.target.value }) }} />
                        </div>
                        <div className="form-group">
                            <label>Postal Code</label>
                            <input type="text" className="form-control form-control-light" placeholder="Postal Code" name="postal" onChange={(event) => { this.setState({ postalCode: event.target.value }) }} />
                        </div>
                        <div className="form-group" style={{ marginLeft: '20%' }}>
                            <input type="checkbox" id="agent" name="agentcheck" value={this.state.agentcheck} onChange={()=>{this.setState({agentcheck:true})}} />
                            <label for="agent"> Do you want to register as agent</label>
                        </div>
                        <Link to="/login" type="submit" className="btn-custom secondary btn-block" onClick={() => { this.register() }} >Register</Link>
                        {/* <div className="auth-seperator
                            <span>OR</span>
                        </div> */}
                        {/* <div className="social-login">
                            <button type="button" className="acr-social-login facebook"><i className="fab fa-facebook-f" /> Continue with Facebook </button>
                            <button type="button" className="acr-social-login google"><i className="fab fa-google" /> Continue with Google</button>
                        </div> */}
                        {/* <p className="text-center mb-0">Already have an account? <Link to="/login">Login</Link> </p> */}
                    </form>
                </div>
                {/* <div className="acr-auth-bg">
                    <Slider className="acr-auth-bg-slider acr-cs-bg-slider" {...settings}>
                        {images.map((item, i) => (
                            <div key={i}>
                                <div className="acr-cs-bg-item bg-cover bg-center" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.img + ")" }} >
                                    <div className="acr-auth-quote">
                                        <h6>{item.title}</h6>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div> */}
                <ToastContainer />

            </div>
        );
    }
}

export default Content;












////////////////////Old ONE////////////////////////////////////////////




// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
// import globalvariables from "../../../globalvariables";
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { connect } from 'react-redux';
// import { userProfile } from '../../../redux/actions/userActions';
// const images = [
//     { img: 'assets/img/coming-soon/1.jpg', title: "Quote of the day", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
//     { img: 'assets/img/coming-soon/2.jpg', title: "Quote of the day", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
//     { img: 'assets/img/coming-soon/3.jpg', title: "Quote of the day", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
// ];

// class Content extends Component {
//     constructor() {
//         super();
//         this.state = {
//             firstName: "",
//             lastName: "",
//             password: "",
//             email: "",
//             contactNo: "",
//             address: "",
//             city: "",
//             country: "",
//             postalCode: ""
//         }
//     }
//     register() {
//         try {
//             axios.post(globalvariables.data.Basicapi + "createMember",
//                 {
//                     'firstName': this.state.firstName,
//                     'lastName': this.state.lastName,
//                     'password': this.state.password,
//                     'email': this.state.email,
//                     'contactNo': this.state.contactNo,
//                     'address': this.state.address,
//                     'city': this.state.city,
//                     'country': this.state.country,
//                     'postalCode': this.state.postalCode,
//                     'subscriptionAdded': '0',


//                 },
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 })
//                 .then(async (response) => {
//                     console.log("registered successfully", response.data);

//                 })
//                 .catch(error => {
//                     toast.error(' Registeration Failed', {
//                         position: "bottom-center",
//                         autoClose: 3000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                     });
//                     console.log("in catch of axios while submitting registeration", error.toString());


//                 });
//         } catch (error) {

//             toast.error(' Registeration Failed', {
//                 position: "bottom-center",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });
//             console.log("in try catch while submitting registeration", error.toString());

//         }
//     }
//     render() {
//         const settings = {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: false,
//             autoplay: true,
//             dots: true,
//             dotsClass: "d-flex slick-dots",
//         }
//         return (
//             <div className="acr-auth-container">
//                 <div className="acr-auth-content" style={{ marginLeft: '25%' }}>
//                     <form>
//                         <div className="auth-text" style={{ paddingTop: '20%' }}>
//                             <h3>Create An Acres Account</h3>
//                         </div>
//                         <div className="form-group">
//                             <label>First Name</label>
//                             <input type="text" className="form-control form-control-light" placeholder="First Name" name="firstname" onChange={(event) => { this.setState({ firstName: event.target.value }) }} />
//                         </div>
//                         <div className="form-group">
//                             <label>Last Name</label>
//                             <input type="text" className="form-control form-control-light" placeholder="Last Name" name="lastname" onChange={(event) => { this.setState({ lastName: event.target.value }) }} />
//                         </div>
//                         <div className="form-group">
//                             <label>Email Address</label>
//                             <input type="email" className="form-control form-control-light" placeholder="Email Address" name="email" onChange={(event) => { this.setState({ email: event.target.value }) }} />
//                         </div>
//                         <div className="form-group">
//                             <label>Password</label>
//                             <input type="password" className="form-control form-control-light" placeholder="Password" name="password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
//                         </div>
//                         <div className="form-group">
//                             <label>Contact No</label>
//                             <input type="text" className="form-control form-control-light" placeholder="Contact No" name="contact" onChange={(event) => { this.setState({ contactNo: event.target.value }) }} />
//                         </div>
//                         <div className="form-group">
//                             <label>Address</label>
//                             <input type="text" className="form-control form-control-light" placeholder="Address" name="address" onChange={(event) => { this.setState({ address: event.target.value }) }} />
//                         </div>
//                         <div className="form-group">
//                             <label>City</label>
//                             <input type="text" className="form-control form-control-light" placeholder="city" name="city" onChange={(event) => { this.setState({ city: event.target.value }) }} />
//                         </div>
//                         <div className="form-group">
//                             <label>Country</label>
//                             <input type="text" className="form-control form-control-light" placeholder="Country" name="country" onChange={(event) => { this.setState({ country: event.target.value }) }} />
//                         </div>
//                         <div className="form-group">
//                             <label>Postal Code</label>
//                             <input type="text" className="form-control form-control-light" placeholder="Postal Code" name="postal" onChange={(event) => { this.setState({ postalCode: event.target.value }) }} />
//                         </div>
//                         <div className="form-group" style={{marginLeft:'20%'}}>
//                             <input type="checkbox" id="agent" name="agentcheck" value="agent"/>
//                                 <label for="agent"> Do you want to register as agent</label>
//                         </div>
//                                 <Link to="/login" type="submit" className="btn-custom secondary btn-block" onClick={() => { this.register() }} >Register</Link>
//                                 {/* <div className="auth-seperator
//                             <span>OR</span>
//                         </div> */}
//                                 {/* <div className="social-login">
//                             <button type="button" className="acr-social-login facebook"><i className="fab fa-facebook-f" /> Continue with Facebook </button>
//                             <button type="button" className="acr-social-login google"><i className="fab fa-google" /> Continue with Google</button>
//                         </div> */}
//                                 {/* <p className="text-center mb-0">Already have an account? <Link to="/login">Login</Link> </p> */}
//                     </form>
//                         </div>
//                         {/* <div className="acr-auth-bg">
//                     <Slider className="acr-auth-bg-slider acr-cs-bg-slider" {...settings}>
//                         {images.map((item, i) => (
//                             <div key={i}>
//                                 <div className="acr-cs-bg-item bg-cover bg-center" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.img + ")" }} >
//                                     <div className="acr-auth-quote">
//                                         <h6>{item.title}</h6>
//                                         <p>{item.text}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div> */}
//                         <ToastContainer />

//             </div>
//         );
//     }
// }

// export default Content;