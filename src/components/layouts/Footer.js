import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, NavLink } from 'react-bootstrap';
import App from './App';
import Logo from '../../assets/img/Logo.jpg'


class Footer extends Component {
    render() {
        return (
            <footer className="acr-footer footer-2">
                {/* Footer Top Start */}
                {/* <App/> */}
                {/* Footer Top End */}
                {/* Footer Middle Start */}
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-sm-12 footer-widget">
                                <div className="footer-logo"> <img src={Logo} alt="logo" /> </div>
                                <p>IndusLand Realtors</p>
                                {/* <Dropdown className="acr-language-selector">
                                    <Dropdown.Toggle as={NavLink} className="dropdownicon">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/flags/united-states.png"} alt="flag" />
                                        <span>English</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                        <ul>
                                            <li> <Link to="#"><img src={process.env.PUBLIC_URL + "/assets/img/flags/germany.png"} alt="flag" /> German</Link> </li>
                                            <li> <Link to="#"><img src={process.env.PUBLIC_URL + "/assets/img/flags/russia.png"} alt="flag" /> Russian</Link> </li>
                                            <li> <Link to="#"><img src={process.env.PUBLIC_URL + "/assets/img/flags/united-states.png"} alt="flag" />English</Link> </li>
                                            <li> <Link to="#"><img src={process.env.PUBLIC_URL + "/assets/img/flags/spain.png"} alt="flag" /> Spanish</Link> </li>
                                        </ul>
                                    </Dropdown.Menu>
                                </Dropdown> */}
                            </div>
                            <div className="col-lg-2 offset-lg-1 col-sm-4 footer-widget">
                                <h5 className="widget-title">Menu</h5>
                                <ul>
                                    <li >                        <Link to="/blog-list">Trends & Blogs</Link>

                                    </li>
                                    <li >  <Link to="listing-list" onClick={() => {
                                        this.props.sendlistingcategory("", false)
                                    }}>Properties</Link>
                                    </li>
                                    <li > <Link to="/our-partners">Our Partners Page</Link> </li>
                                    <li > <Link to="/services">Our Projects</Link> </li>
                                    <li > <Link to="/image-gallery">Our Image Gallery</Link> </li>
                                    <li > <Link to="/portfolio">Portfolio</Link> </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-sm-4 footer-widget">
                                <h5 className="widget-title">Information</h5>
                                <ul>
                                    <li > <Link to="/contact">Contact Us</Link>
                                    </li>
                                    <li ><Link to="/laws-of-the-land">Laws of the Land</Link>
                                    </li>
                                    <li >                        <Link to="/faq">FAQs</Link>

                                    </li>
                                    <li >                                                <Link to="/glossary">Glossary</Link>


                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Footer Middle End */}
                {/* Footer Bottom Start */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <p className="m-0">© Copyright 2020 - <Link to="#">Invictus 360</Link> All Rights Reserved.</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Footer Bottom End */}
            </footer>
        );
    }
}

export default Footer;