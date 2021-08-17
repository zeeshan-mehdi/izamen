import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.jpg'
import { getlistingcategory } from '../../redux/actions/listingActions';
import { Container, Row, Col, Tab, Tabs, Modal, Card, Button } from "react-bootstrap";

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            calc: false,
            value: "",
            answer: "",
            convertfrom: "",
            convertto: ""
        }
    }
    render() {
        return (
            <Fragment>
                {/* Logo */}
                <Link className="navbar-brand" to="/"> <img src={Logo} alt="logo" width={70} /> </Link>
                {/* Menu */}
                <ul className="navbar-nav">
                    <li className="menu-item menu-item-has-children">
                        <Link to="/">Home</Link>

                    </li>
                    {/* <li className="menu-item menu-item-has-children">
                        <Link to="/services">Property Trends</Link>
                      
                    </li> */}
                    <li className="menu-item menu-item-has-children">
                        <Link to="/blog-list">Trends & Blogs</Link>
                        {/* <ul className="submenu">
                            <li className="menu-item menu-item-has-children">
                                <Link to="/blog-grid">Blog Archive</Link>
                                <ul className="submenu">
                                    <li className="menu-item"> <Link to="/blog-grid">Grid View</Link> </li>
                                    <li className="menu-item"> <Link to="/blog-list">List View</Link> </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <Link to="/blog-single">Blog Single</Link>
                            </li>
                        </ul> */}
                    </li>
                    {/* <li className="menu-item menu-item-has-children mega-menu-wrapper">
                        <Link to="#">Pages</Link>
                        <ul className="submenu">
                            <li>
                                <img src={process.env.PUBLIC_URL + "/assets/img/megamenu.png"} alt="img" />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="mega-menu-item">
                                                <h5>Featured Listings</h5>
                                                <p>
                                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                                                    making it over 2000 years old.
                </p>
                                                <Link to="/listing-map" className="btn-custom secondary">View All</Link>
                                            </div>
                                        </div>
                                        <div className="offset-lg-1 col-lg-3">
                                            <div className="mega-menu-item">
                                                <h5>Pages</h5>
                                                <Link to="/about">About Us</Link>
                                                <Link to="/services">Services</Link>
                                                <Link to="/faq">FAQ</Link>
                                                <Link to="/pricing">Pricing</Link>
                                                <Link to="/contact">Contact Us</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mega-menu-item">
                                                <h5>Other Pages</h5>
                                                <Link to="/coming-soon">Coming Soon</Link>
                                                <Link to="/error-404">404 Page</Link>
                                                <Link to="/login">Login</Link>
                                                <Link to="/register">Register</Link>
                                                <Link to="/legal">Legal</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>*/}
                    <li className="menu-item menu-item-has-children">
                        <Link to="listing-list" onClick={() => {
                            this.props.sendlistingcategory("", false)
                        }}>Properties</Link>
                        {/* <ul className="submenu">
                            <li className="menu-item menu-item-has-children">
                                <Link to="/listing-map">Listings Archive</Link>
                                <ul className="submenu">
                                    <li className="menu-item"> <Link to="/listing-grid">Grid View</Link> </li>
                                    <li className="menu-item"> <Link to="/listing-list">List View</Link> </li>
                                    <li className="menu-item"> <Link to="/listing-map">Map View</Link> </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link to="/listing-details-v1">Listing Details</Link>
                                <ul className="submenu">
                                    <li className="menu-item"> <Link to="/listing-details-v1">Listing Details v1</Link> </li>
                                    <li className="menu-item"> <Link to="/listing-details-v2">Listing Details v2</Link> </li>
                                    <li className="menu-item"> <Link to="/listing-details-v3">Listing Details v3</Link> </li>
                                </ul>
                            </li>
                            <li className="menu-item"> <Link to="/submit-listing">Submit Listing</Link> </li>
                            <li className="menu-item"> <Link to="/compare-listings">Compare Listings</Link> </li>
                        </ul> */}
                    </li>
                    {/* <li className="menu-item menu-item-has-children">
                        <Link to="/agent-archive">Agents</Link>
                        <ul className="submenu">
                            <li className="menu-item"> <Link to="/agent-archive">Agents Archive</Link> </li>
                            <li className="menu-item"> <Link to="/agent-details">Agent Details</Link> </li>
                            <li className="menu-item menu-item-has-children">
                                <Link to="/profile">Agent Profile</Link>
                                <ul className="submenu submenu-right">
                                    <li className="menu-item"> <Link to="/profile">My Account</Link> </li>
                                    <li className="menu-item"> <Link to="/profile-listings">My Listings</Link> </li>
                                    <li className="menu-item"> <Link to="/profile-saved-listings">Saved Listings</Link> </li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}
                    {/* <li className="menu-item menu-item-has-children">
                        <Link to="/agency-archive">Agency</Link>
                        <ul className="submenu">
                            <li className="menu-item"> <Link to="/agency-archive">Agency Archive</Link> </li>
                            <li className="menu-item"> <Link to="/agency-details">Agency Details</Link> </li>
                        </ul>
                    </li> */}
                    <li className="menu-item menu-item-has-children">
                        <Link>About Us</Link>
                        <ul className="submenu">
                            <li className="menu-item"> <Link to="/our-partners">Our Partners Page</Link> </li>
                            <li className="menu-item"> <Link to="/services">Our Projects</Link> </li>
                            <li className="menu-item"> <Link to="/image-gallery">Our Image Gallery</Link> </li>
                            <li className="menu-item"> <Link to="/portfolio">Portfolio</Link> </li>

                        </ul>

                    </li>
                    <li className="menu-item menu-item-has-children">
                        <Link to="/contact">Contact Us</Link>

                    </li>
                    <li className="menu-item menu-item-has-children">
                        <Link to="/laws-of-the-land">Laws of the Land</Link>

                    </li>
                    <li className="menu-item menu-item-has-children">
                        <Link to="/faq">FAQs</Link>

                    </li>
                    <li className="menu-item menu-item-has-children">
                        <Link to="/glossary">Glossary</Link>

                    </li>
                    <li className="menu-item menu-item-has-children">
                        <Link onClick={() => { this.setState({ calc: true }) }}>Calclulator</Link>
                    </li>

                </ul>

                <Modal
                    style={{ zIndex: '10000000' }}
                    show={this.state.calc}
                    centered
                    onHide={() => { this.setState({ calc: false }) }}
                >
                    <Modal.Header >

                        <Modal.Title>
                            Calculator
         </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            {/* For Web Admin  */}
                            <Container>
                                <Row>
                                    <Col md={6}>
                                        <div style={{ display: 'inline-block' }}><label>Convert From </label>

                                        </div>
                                        <select className="form-control" name="type"
                                            onChange={event => this.setState({ convertfrom: event.target.value })}

                                        >
                                            <option value="none">None</option>
                                            <option value="squarefoot">Square foot</option>
                                            <option value="yard27.70">Yards(27.70)</option>
                                            <option value="yard30.25">Yards(30.25)</option>
                                            <option value="marla225">Marla(225)</option>
                                            <option value="marla250">Marla(250)</option>
                                            <option value="marla272.25">Marla(272.25)</option>
                                            <option value="kanal">Kanal</option>
                                            <option value="moza">Moza</option>

                                            <option value="acre">Acre</option>

                                        </select>
                                    </Col>
                                    <Col md={6}>
                                        <div style={{ display: 'inline-block' }}><label>Convert To </label>

                                        </div>
                                        <select className="form-control" name="type"
                                            onChange={event => this.setState({ convertto: event.target.value })}

                                        >
                                            <option value="none">None</option>
                                            <option value="squarefoot">Square foot</option>
                                            <option value="yard27.70">Yards(27.70)</option>
                                            <option value="yard30.25">Yards(30.25)</option>

                                            <option value="marla225">Marla(225)</option>
                                            <option value="marla250">Marla(250)</option>
                                            <option value="marla272.25">Marla(272.25)</option>
                                            <option value="kanal">Kanal</option>
                                            <option value="moza">Moza</option>

                                            <option value="acre">Acre</option>

                                        </select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <label>Conversion Value </label>
                                        <input type="text" className="form-control" placeholder="Value" name="value" value={this.state.value} onChange={(e) => {

                                            this.setState({ value: e.target.value })

                                        }} />
                                    </Col>
                                    <Col md={6}>
                                        <label>Answer</label>
                                        <input type="text" disabled className="form-control" placeholder="Value" name="value" value={this.state.answer} />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '4%' }}>
                                    <Col md={{ offset: 9, span: 3 }}>
                                        <Button variant="primary" onClick={() => {
                                            const nu = this.state.value;
                                            let val = `${nu}${0}`;
                                            this.setState({ value: `${nu}${0}` })
                                            console.log("val", val);
                                            if (this.state.convertfrom == "squarefoot") {
                                                if (this.state.convertto == "squarefoot") {
                                                    this.setState({ answer: val });
                                                }
                                                if (this.state.convertto == "yard27.70") {

                                                }
                                                if (this.state.convertto == "yard30.25") {

                                                }
                                                if (this.state.convertto == "marla225") {
                                                    let ans = this.state.value / 225;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "marla250") {
                                                    let ans = this.state.value / 250;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "marla272.25") {
                                                    let ans = this.state.value / 272.25;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "kanal") {

                                                }
                                                if (this.state.convertto == "acre") {

                                                }
                                            }
                                            if (this.state.convertfrom == "yard27.70") {
                                                if (this.state.convertto == "squarefoot") {
                                                }

                                                if (this.state.convertto == "yard27.70") {
                                                    this.setState({ answer: val });
                                                }
                                                if (this.state.convertto == "yard30.25") {

                                                }
                                                if (this.state.convertto == "marla225") {
                                                    let ans = this.state.value / 27.70;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "marla250") {
                                                    let ans = this.state.value / 27.70;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "marla272.25") {
                                                    let ans = this.state.value / 27.70;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "kanal") {

                                                }
                                                if (this.state.convertto == "acre") {

                                                }
                                            }
                                            if (this.state.convertfrom == "yard30.25") {
                                                if (this.state.convertto == "squarefoot") {
                                                }

                                                if (this.state.convertto == "yard27.70") {
                                                }
                                                if (this.state.convertto == "yard30.25") {
                                                    this.setState({ answer: val });

                                                }
                                                if (this.state.convertto == "marla225") {
                                                    let ans = this.state.value / 30.25;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "marla250") {
                                                    let ans = this.state.value / 30.25;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "marla272.25") {
                                                    let ans = this.state.value / 30.25;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "kanal") {

                                                }
                                                if (this.state.convertto == "acre") {

                                                }
                                            }
                                            if (this.state.convertfrom == "marla225") {
                                                if (this.state.convertto == "squarefoot") {
                                                    let ans = this.state.value * 225;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "yard27.70") {
                                                    let ans = this.state.value * 27.70;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "yard30.25") {
                                                    let ans = this.state.value * 30.25;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "marla225") {
                                                    this.setState({ answer: val });

                                                }
                                                if (this.state.convertto == "marla250") {

                                                }
                                                if (this.state.convertto == "marla272.25") {
                                                    let ans = this.state.value / 272.25;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "kanal") {
                                                    let ans = this.state.value / 20;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "acre") {

                                                }
                                            }
                                            if (this.state.convertfrom == "marla250") {
                                                if (this.state.convertto == "squarefoot") {
                                                    let ans = this.state.value * 250;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "yard27.70") {
                                                    let ans = this.state.value * 27.70;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "yard30.25") {
                                                    let ans = this.state.value * 30.25;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "marla225") {
                                                    let ans = this.state.value / 225;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "marla250") {
                                                    this.setState({ answer: val });

                                                }
                                                if (this.state.convertto == "marla272.25") {
                                                    let ans = this.state.value / 272.25;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "kanal") {
                                                    let ans = this.state.value / 20;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "acre") {

                                                }
                                            }

                                            if (this.state.convertfrom == "marla272.25") {
                                                if (this.state.convertto == "squarefoot") {
                                                    let ans = this.state.value * 272.25;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "yard27.70") {
                                                    let ans = this.state.value * 27.70;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "yard30.25") {
                                                    let ans = this.state.value * 30.25;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "marla225") {
                                                    let ans = this.state.value / 225;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "marla250") {
                                                    let ans = this.state.value / 250;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "marla272.25") {
                                                    this.setState({ answer: val });

                                                }
                                                if (this.state.convertto == "kanal") {
                                                    let ans = this.state.value / 20;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "acre") {

                                                }
                                            }
                                            if (this.state.convertfrom == "kanal") {
                                                if (this.state.convertto == "squarefoot") {
                                                }
                                                if (this.state.convertto == "yard27.70") {
                                                }
                                                if (this.state.convertto == "yard30.25") {

                                                }
                                                if (this.state.convertto == "marla225") {
                                                    let ans = this.state.value * 20;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "marla250") {
                                                    let ans = this.state.value * 20;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "marla272.25") {
                                                    let ans = this.state.value * 20;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "kanal") {
                                                    this.setState({ answer: val });

                                                }
                                                if (this.state.convertto == "acre") {
                                                    let ans = this.state.value * 8;
                                                    this.setState({ answer: ans });
                                                }
                                            }
                                            if (this.state.convertfrom == "acre") {
                                                if (this.state.convertto == "squarefoot") {
                                                }
                                                if (this.state.convertto == "yard27.70") {
                                                }
                                                if (this.state.convertto == "yard30.25") {

                                                }
                                                if (this.state.convertto == "marla225") {
                                                    let ans = this.state.value / 225;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "marla250") {
                                                    let ans = this.state.value / 250;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "marla272.25") {
                                                    let ans = this.state.value / 272.25;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "kanal") {
                                                    let ans = this.state.value / 8;
                                                    this.setState({ answer: ans });
                                                }
                                                if (this.state.convertto == "acre") {
                                                    this.setState({ answer: val });

                                                }
                                            }
                                        }}>Convert</Button>{' '}
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '4%', marginLeft: '3%' }}>
                                    <Col md={4} >
                                        <Button variant="outline-secondary" style={{ borderRadius: '25px', padding: '10%' }} onClick={() => {
                                            const nu = this.state.value;
                                            this.setState({ value: `${nu}${1}` })
                                        }}>1</Button>{' '}
                                    </Col>
                                    <Col md={4} >
                                        <Button variant="outline-secondary" style={{ borderRadius: '25px', padding: '10%' }} onClick={() => {
                                            const nu = this.state.value;
                                            this.setState({ value: `${nu}${2}` })
                                        }}>2</Button>{' '}
                                    </Col>
                                    <Col md={4} >
                                        <Button variant="outline-secondary" style={{ borderRadius: '25px', padding: '10%' }} onClick={() => {
                                            const nu = this.state.value;
                                            this.setState({ value: `${nu}${3}` })
                                        }}>3</Button>{' '}
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '4%', marginLeft: '3%' }}>
                                    <Col md={4}>
                                        <Button variant="outline-secondary" style={{ borderRadius: '25px', padding: '10%' }} onClick={() => {
                                            const nu = this.state.value;
                                            this.setState({ value: `${nu}${4}` })
                                        }}>4</Button>{' '}
                                    </Col>
                                    <Col md={4}>
                                        <Button variant="outline-secondary" style={{ borderRadius: '25px', padding: '10%' }} onClick={() => {
                                            const nu = this.state.value;
                                            this.setState({ value: `${nu}${5}` })
                                        }}>5</Button>{' '}
                                    </Col>
                                    <Col md={4}>
                                        <Button variant="outline-secondary" style={{ borderRadius: '25px', padding: '10%' }} onClick={() => {
                                            const nu = this.state.value;
                                            this.setState({ value: `${nu}${6}` })
                                        }}>6</Button>{' '}
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '4%', marginLeft: '3%' }}>
                                    <Col md={4}>
                                        <Button variant="outline-secondary" style={{ borderRadius: '25px', padding: '10%' }} onClick={() => {
                                            const nu = this.state.value;
                                            this.setState({ value: `${nu}${7}` })
                                        }}>7</Button>{' '}
                                    </Col>
                                    <Col md={4}>
                                        <Button variant="outline-secondary" style={{ borderRadius: '25px', padding: '10%' }} onClick={() => {
                                            const nu = this.state.value;
                                            this.setState({ value: `${nu}${8}` })
                                        }}>8</Button>{' '}
                                    </Col>
                                    <Col md={4} >
                                        <Button variant="outline-secondary" style={{ borderRadius: '25px', padding: '10%' }} onClick={() => {
                                            const nu = this.state.value;
                                            this.setState({ value: `${nu}${9}` })
                                        }}>9</Button>{' '}
                                    </Col>

                                </Row>
                                <Row style={{ marginTop: '4%', marginLeft: '3%' }}>
                                    <Col md={{ offset: 4, span: 4 }}>
                                        <Button variant="outline-secondary" style={{ borderRadius: '25px', padding: '10%' }} onClick={() => {
                                            const nu = this.state.value;
                                            this.setState({ value: `${nu}${0}` })
                                        }}>0</Button>{' '}
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="secondary" onClick={() => {
                            this.setState({ calc: false });
                        }}>
                            Close
 </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        // listingdetail:state.listingdetail
    };

}
const mapDispatchToProps = (dispatch) => {
    return {
        sendlistingcategory: (category, check) => {
            dispatch(getlistingcategory(category, check));
        },
    }
}

export default connect(null, mapDispatchToProps)(Menu);