import React, { Fragment } from 'react';
import Menu from '../layouts/Menu';
import Mobilemenu from '../layouts/Mobilemenu';
import HeaderComponent from '../../helper/Navigationhelper';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class Header extends HeaderComponent {
    render() {
        const stickyheader = this.state.isTop ? 'sticky' : '';
        return (
            <Fragment>
                {/* Aside (Mobile Navigation) */}
                <aside className={classNames("main-aside", { "open": this.state.navtoggle })}>
                    <div className="aside-title">
                        <div className="aside-controls aside-trigger">
                            <h4>Menu</h4>
                            <div className="close-btn close-dark" onClick={this.navtoggleClass} >
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                    <Mobilemenu />
                </aside>
                <div className="aside-overlay aside-trigger" onClick={this.navtoggleClass} />
                {/* Header Start */}
                <header className={`main-header header-fw can-sticky header-1 ${stickyheader}`}>
                    {/* Top Header Start */}
                    <div className="top-header">
                        <div className="top-header-inner">
                            <ul className="social-media">
                                <li> <a href="https://www.facebook.com/iZameenDotCom/"> <i className="fab fa-facebook-f" /> </a> </li>
                                <li> <a href="https://www.pinterest.com/iZameenDotCom/_saved/"> <i className="fab fa-pinterest-p" /> </a> </li>
                                <li> <a href="https://www.linkedin.com/in/izameen/"> <i className="fab fa-linkedin-in" /> </a> </li>
                                <li> <a href="https://twitter.com/iZameenDotCom"> <i className="fab fa-twitter" /> </a> </li>
                                <li> <Link onClick={() => window.open("https://wa.me/+923335144458", "_blank")}> <i class="fab fa-whatsapp" /> </Link> </li>
                                <li> <a href="http://izameen.tumblr.com"> <i class="fab fa-tumblr" /> </a> </li>
                                <li> <a href="https://instagram.com/izameendotcom?utm_medium=copy_link"> <i class="fab fa-instagram" /> </a> </li>
                            </ul>
                            <ul className="top-header-nav">

                                <li> <Link to={
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
                                <li>or</li>
                                <li> <Link to="/register"> Signup</Link> </li>
                            </ul>
                        </div>
                    </div>
                    {/* Top Header End */}
                    <nav className="navbar">
                        {/* Menu */}
                        <Menu />
                        <div className="header-controls">
                            <ul className="header-controls-inner d-none d-lg-flex">
                                <li>
                                    <Link to={
                                        ((localStorage.getItem("isSignedIn") === "true") && localStorage.getItem("user_ID") !== null && localStorage.getItem("user_ID") !== "") ?
                                            "/submit-listing" :
                                            "/login"
                                    } className="btn-custom primary">Add Property <i className="fas fa-plus" /> </Link>
                                </li>
                            </ul>
                            {/* Toggler */}
                            <div className="aside-toggler aside-trigger" onClick={this.navtoggleClass}>
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                    </nav>
                </header>
                {/* Header End */}
            </Fragment>
        );
    }
}

export default Header;