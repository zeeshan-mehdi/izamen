import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navigation from '../../data/navigation.json'

class Mobilemenu extends Component {
    getNextSibling = function (elem, selector) {
        // Get the next sibling element
        var sibling = elem.nextElementSibling;
        // If there's no selector, return the first sibling
        if (!selector) return sibling;
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return sibling;
            sibling = sibling.nextElementSibling
        }
    }
    triggerChild = (e) => {
        let subMenu = '';
        subMenu = (this.getNextSibling(e.target, '.submenu') !== undefined) ? this.getNextSibling(e.target, '.submenu') : null;
        if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
            subMenu.classList = subMenu.classList.contains('d-block') ? 'submenu' : 'submenu d-block';
        }
    }
    render() {
        return (
            <div className="aside-scroll">
                <ul>
                    {/* Pages Start */}
                    <li className="menu-section-title">Pages</li>
                    <li className="menu-item">  <Link to={
                        ((localStorage.getItem("isSignedIn") === "true") && localStorage.getItem("user_ID") !== null && localStorage.getItem("user_ID") !== "") ? (
                            (localStorage.getItem("accountType") === "member") ?
                                "/memdashboard" : (
                                    localStorage.getItem("accountType") === "agent" ? (
                                        "/agdashboard"
                                    ) :
                                        ((localStorage.getItem("accountType") === "client") ?
                                            "/dashboard" : (
                                                (localStorage.getItem("accountType") === "web_admin") ?
                                                    "/propertydashboard" : (null)
                                            )
                                        ))
                        ) : "/login"
                    } > Login</Link> </li>
                    <li className="menu-item"> <Link to="/register"> Signup</Link> </li>
                    <li className="menu-item"><Link to="/">Home</Link>
                    </li>
                    <li className="menu-item">                        <Link to="/blog-list">Trends & Blogs</Link>

                    </li>
                    <li className="menu-item">  <Link to="listing-list" onClick={() => {
                        this.props.sendlistingcategory("", false)
                    }}>Properties</Link>
                    </li>
                    <li className="menu-item"> <Link to="/our-partners">Our Partners Page</Link> </li>
                    <li className="menu-item"> <Link to="/services">Our Projects</Link> </li>
                    <li className="menu-item"> <Link to="/image-gallery">Our Image Gallery</Link> </li>
                    <li className="menu-item"> <Link to="/portfolio">Portfolio</Link> </li>
                    <li className="menu-item"> <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="menu-item"><Link to="/laws-of-the-land">Laws of the Land</Link>
                    </li>
                    <li className="menu-item">                        <Link to="/faq">FAQs</Link>

                    </li>
                    <li className="menu-item">                                                <Link to="/glossary">Glossary</Link>


                    </li>

                    <li className="menu-item">
                        <Link to={
                            ((localStorage.getItem("isSignedIn") === "true") && localStorage.getItem("user_ID") !== null && localStorage.getItem("user_ID") !== "") ? (
                                (localStorage.getItem("accountType") === "member") ?
                                    "/memdashboard" : (
                                        localStorage.getItem("accountType") === "agent" ? (
                                            "/agdashboard"
                                        ) :
                                            ((localStorage.getItem("accountType") === "client") ?
                                                "/dashboard" : (
                                                    (localStorage.getItem("accountType") === "web_admin") ?
                                                        "/propertydashboard" : (null)
                                                )
                                            ))
                            ) : "/login"
                        } > Login</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/register"> Signup</Link>
                    </li>

                    {/* Pages End */}
                    {/* Social Media Start */}
                    <li className="menu-section-title">Get Social</li>
                    <li className="menu-item">  <Link to="#"> <i className="fab fa-facebook-f" /> </Link> </li>
                    <li className="menu-item">  <Link to="#"> <i className="fab fa-pinterest-p" /> </Link> </li>
                    <li className="menu-item">  <Link to="#"> <i className="fab fa-linkedin-in" /> </Link> </li>
                    <li className="menu-item">  <Link to="#"> <i className="fab fa-twitter" /> </Link> </li>
                    <li className="menu-item"> <Link onClick={() => window.open("https://wa.me/+923335144458", "_blank")}> <i class="fab fa-whatsapp" /> </Link> </li>
                    <li className="menu-item">  <Link to=""> <i class="fab fa-pinterest" /> </Link> </li>
                    <li className="menu-item">  <Link to="#"> <i class="fab fa-tumblr" /> </Link> </li>
                    <li className="menu-item">  <Link to="#"> <i class="fab fa-telegram" /> </Link> </li>




                    {/* Social Media End */}
                </ul>
            </div >
        );
    }
}

export default Mobilemenu;