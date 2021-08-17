import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Slider from 'react-slick';
import globalvariables from "../../../globalvariables";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { userProfile } from '../../../redux/actions/userActions';


const images = [
    { img: 'assets/img/coming-soon/1.jpg', title: "Quote of the day", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { img: 'assets/img/coming-soon/2.jpg', title: "Quote of the day", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { img: 'assets/img/coming-soon/3.jpg', title: "Quote of the day", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
];

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            pass: ""
        }
        this.submitinglogin = this.submitinglogin.bind(this)

    }
    submitinglogin() {
        try {
            console.log("username and pass", this.state.email, this.state.pass)
            axios.post(globalvariables.data.Basicapi + "Login",
                {
                    'email': this.state.email,
                    'password': this.state.pass,

                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(async (response) => {
                    console.log("Login successfully", response.data);
                    if (response.data === "Password is incorrect.") {
                        toast.error(' Login Failed', {
                            position: "bottom-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        localStorage.setItem('user_ID',"");
                        localStorage.setItem('accountType',"");
                        localStorage.setItem('username',"");
                        localStorage.setItem('isSignedIn', JSON.stringify(false));

                    }
                    else if (response.data === "User not found.") {
                        toast.error(' Login Failed', {
                            position: "bottom-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        localStorage.setItem('user_ID',"");
                        localStorage.setItem('accountType',"");
                        localStorage.setItem('username',"");
                        localStorage.setItem('isSignedIn', JSON.stringify(false));

                    }
                    else {
                        localStorage.setItem("user_ID", response.data.user_ID);
                        localStorage.setItem('isSignedIn', JSON.stringify(true));
                        localStorage.setItem("accountType",response.data.accountType);
                        localStorage.setItem('username',response.data.firstName +" "+ response.data.lastName);


                        this.props.senduserprofile(response.data);
                        toast.success(' LoginSuccessfully', {
                            position: "bottom-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                      
                    }
                })
                .catch(error => {
                    toast.error(' Login Failed', {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    console.log("in catch of axios while submitting User", error.toString());
                   localStorage.setItem('user_ID',"");
                        localStorage.setItem('accountType',"");
                        localStorage.setItem('username',"");
                        localStorage.setItem('isSignedIn', JSON.stringify(false));


                });
        } catch (error) {
            localStorage.setItem('user_ID',"");
            localStorage.setItem('accountType',"");
            localStorage.setItem('username',"");
            localStorage.setItem('isSignedIn', JSON.stringify(false));
            toast.error(' Login Failed', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.log("in try catch while submitting property", error.toString());

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
                <div className="acr-auth-content">
                    {/* <form method="post"> */}
                    <div className="auth-text" style={{ marginTop: "100px" }}>
                        <h3>Log Into Izameen</h3>
                        <p>Izameen is a digital Real estate platform which will Help the consumer in multiple ways</p>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control form-control-light" placeholder="Email" name="username" onChange={(event) => {
                            this.setState({ email: event.target.value });
                        }} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control form-control-light" placeholder="Password" name="password" onChange={(event) => {
                            this.setState({ pass: event.target.value });
                        }} />
                    </div>
                    <div className="form-group">
                        <Link to="#" className="forgot-password">Forgot Password?</Link>
                    </div>
                    <Link className="btn-custom secondary btn-block" to={
                          ((localStorage.getItem("isSignedIn") === "true") && localStorage.getItem("user_ID") !== null && localStorage.getItem("user_ID") !== "") ? (
                            ( localStorage.getItem("accountType") === "member")?
                            "/memdashboard":(
                                localStorage.getItem("accountType") === "agent" ? (
                                    "/agdashboard"
                                ):
                               ( (localStorage.getItem("accountType") === "client")?
                                "/dashboard":(
                                    (localStorage.getItem("accountType") === "web_admin")?
                                "/propertydashboard":(null)
                                )
                            ))
                            ):"/login"
                    
                    } onClick={() => {
                        this.submitinglogin();
                    }}>Login</Link>
                    <div className="auth-seperator">
                        <span>OR</span>
                    </div>
                    {/* <div className="social-login">
                            <button type="button" className="acr-social-login facebook"><i className="fab fa-facebook-f" /> Continue with Facebook </button>
                            <button type="button" className="acr-social-login google"><i className="fab fa-google" /> Continue with Google</button>
                        </div> */}
                    <p className="text-center mb-0">Don't have an account? <Link to="/register">Create One</Link> </p>
                    {/* </form> */}
                </div>
                <div className="acr-auth-bg">
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
                </div>
                <ToastContainer />

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        userprofile: state.userprofile,
    

    };

}
const mapDispatchToProps = (dispatch) => {
    return {
        senduserprofile: (userprofile) => {
            dispatch(userProfile(userprofile));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);