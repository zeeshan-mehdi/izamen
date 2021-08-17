import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from 'react-bootstrap';
import agents from '../../../data/agents.json';
import listing from '../../../data/listings.json';
import { connect } from 'react-redux';
import axios from "axios";
import globalvariables from "../../../globalvariables";
import { listingdetail } from '../../../redux/actions/listingActions';
import Pic from '../../../assets/img/house-isolated-field.jpg'

const gallerytip = (
    <Tooltip>
        Gallery
    </Tooltip>
);
const bedstip = (
    <Tooltip>
        Beds
    </Tooltip>
);
const bathstip = (
    <Tooltip>
        Bathrooms
    </Tooltip>
);
const areatip = (
    <Tooltip>
        Square Feet
    </Tooltip>
);

class Content extends Component {
    constructor() {
        super();
        this.state = {
            agentlinkedproperties: []
        }
    }
    componentDidMount() {
        try {

            axios.post(globalvariables.data.Basicapi + "getPropertiesLinkedOnAgentID",
                {
                    agent_ID: this.props.agentdetails.agent_ID
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(async (response) => {
                    console.log("getting agent properties successfully", response);
                    this.setState({ agentlinkedproperties: response.data })
                })
                .catch(error => {
                    alert("in catch of axios while getting agent properties", error.toString());

                });
        } catch (error) {

            alert("in try catch while getting agent properties", error.toString());

        }
    }
    render() {
        return (
            <div className="section agent-wrapper">

                <div className="container">
                    <div className="row">
                        {/* Agent Sidebar Start */}
                        <div className="col-lg-4">
                            <div className="sidebar sticky-sidebar sidebar-left">
                                <div className="sidebar-widget sidebar-widget-agent">
                                    {/* Author Start */}
                                    <div className="media sidebar-author listing-agent">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/agents/1.jpg"} alt="agent" />
                                        <div className="media-body">
                                            <h6> {this.props.agentdetails.firstName + " " + this.props.agentdetails.lastName} </h6>
                                        </div>
                                        {/* <Dropdown className="options-dropdown">
                                            <Dropdown.Toggle as={NavLink}><i className="fas fa-ellipsis-v" /></Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                                <ul>
                                                    <li> <Link to="tel:+123456789"> <i className="fas fa-phone" /> Call Freddy</Link> </li>
                                                    <li> <Link to="#"> <i className="fas fa-star" /> Save Agent</Link> </li>
                                                </ul>
                                            </Dropdown.Menu>
                                        </Dropdown> */}
                                    </div>
                                    {/* Author End */}
                                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                                    <div style={{ overflowWrap: 'break-word', whiteSpace: 'normal' }}>
                                        <h6>Email: {this.props.agentdetails.email}</h6>
                                        <h6>Contact No: {this.props.agentdetails.contactNo}</h6>
                                        <h6>Address: {this.props.agentdetails.address + " " + this.props.agentdetails.city + " " + this.props.agentdetails.country}</h6>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Agent Sidebar End */}
                        {/* Agent Listings Start */}
                        <div className="col-lg-8">
                            <div className="row pt-0 section section-padding">
                                {/* Listing Start */}
                                {this.state.agentlinkedproperties.map((item, i) => (
                                    <div key={i} className="col-md-6">
                                        <div className="listing">
                                            <div className="listing-thumbnail">
                                                <Link to="/listing-details-v1" onClick={() => { this.props.sendlistingdetail(item); }}><img src={Pic} alt="listing" /></Link>
                                                {/* <div className="listing-badges">
                        {
                            item.star === true ? <span className="listing-badge featured"> <i className="fas fa-star" /> </span> : ''
                        }
                        {
                            item.sale === true ? <span className="listing-badge sale">On Sale</span> : ''
                        }
                        {
                            item.pending === true ? <span className="listing-badge pending"> Pending</span> : ''
                        }
                        {
                            item.rental === true ? <span className="listing-badge rent"> Rental</span> : ''
                        }
                    </div> */}
                                                {/* <div className="listing-controls">
                        <Link to="#" className="favorite"><i className="far fa-heart" /></Link>
                        <Link to="#" className="compare"><i className="fas fa-sync-alt" /></Link>
                    </div> */}
                                            </div>
                                            <div className="listing-body">
                                                <div className="listing-author">
                                                    {/* <img src={process.env.PUBLIC_URL + "/" + item.authorimg} alt="author" /> */}
                                                    <div className="listing-author-body">
                                                        <p> <Link to="#">{item.authorname}</Link> </p>
                                                        <span className="listing-date">{item.postdate}</span>
                                                    </div>
                                                    <Dropdown className="options-dropdown">
                                                        <Dropdown.Toggle as={NavLink}><i className="fas fa-ellipsis-v" /></Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu-right">
                                                            <ul>
                                                                <li> <Link to="tel:+123456789"> <i className="fas fa-phone" /> Call Agent</Link> </li>
                                                                <li> <Link to="mailto:+123456789"> <i className="fas fa-envelope" /> Send Message</Link> </li>
                                                                <li> <Link to="/listing-details-v1"> <i className="fas fa-bookmark" /> Book Tour</Link> </li>
                                                            </ul>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                                <h5 className="listing-title"> <Link to="/listing-details-v1" title={item.title} onClick={() => { this.props.sendlistingdetail(item); }}>{item.title}</Link> </h5>
                                                <span className="listing-price">{new Intl.NumberFormat().format((item.price))}PKR  </span>
                                                <p className="listing-text">{item.text}</p>
                                                <div className="acr-listing-icons">
                                                    {/* <OverlayTrigger overlay={bedstip}>
                            <div className="acr-listing-icon">
                                <i className="flaticon-bedroom" />
                                <span className="acr-listing-icon-value">{item.beds}</span>
                            </div>
                        </OverlayTrigger> */}
                                                    {/* <OverlayTrigger overlay={bathstip}>
                            <div className="acr-listing-icon">
                                <i className="flaticon-bathroom" />
                                <span className="acr-listing-icon-value">{item.bathrooms}</span>
                            </div>
                        </OverlayTrigger> */}
                                                    <OverlayTrigger overlay={areatip}>
                                                        <div className="acr-listing-icon">
                                                            <i className="flaticon-ruler" />
                                                            <span className="acr-listing-icon-value">{new Intl.NumberFormat().format((item.area))}<span> </span>{item.area_type}</span>
                                                        </div>
                                                    </OverlayTrigger>
                                                </div>
                                                <div className="acr-listing-icons">
                                                    {/* <OverlayTrigger overlay={bedstip}>
                            <div className="acr-listing-icon">
                                <i className="flaticon-bedroom" />
                                <span className="acr-listing-icon-value">{item.beds}</span>
                            </div>
                        </OverlayTrigger> */}
                                                    {/* <OverlayTrigger overlay={bathstip}>
                            <div className="acr-listing-icon">
                                <i className="flaticon-bathroom" />
                                <span className="acr-listing-icon-value">{item.bathrooms}</span>
                            </div>
                        </OverlayTrigger> */}
                                                    <OverlayTrigger overlay={areatip}>
                                                        <div className="acr-listing-icon">
                                                            <i className="flaticon-location" />
                                                            <span className="acr-listing-icon-value">{item.address} {item.city} </span>
                                                        </div>
                                                    </OverlayTrigger>
                                                </div>
                                                <div className="listing-gallery-wrapper">
                                                    <Link to="/listing-details-v1" className="btn-custom btn-sm secondary" onClick={() => {
                                                        this.props.sendlistingdetail(item);
                                                    }}>View details</Link>
                                                    {/* <OverlayTrigger overlay={gallerytip}>
                            <Link to="#" className="listing-gallery"> <i className="fas fa-camera" /> </Link>
                        </OverlayTrigger> */}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                                {/* Listing End */}
                            </div>
                            {/* Comments Start */}
                            {/* <div className="comment-form section p-0">
                                <h4>Leave Freddy a Comment</h4>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label>Full Name</label>
                                            <input type="text" className="form-control" placeholder="Full Name" name="fname" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Email Address</label>
                                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <label>Your Message</label>
                                            <textarea className="form-control" placeholder="Type your comment..." name="comment" rows={7} />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="sendNotifications" />
                                                <label className="custom-control-label fw-400" htmlFor="sendNotifications">Notify me when I receive a reply to my comment</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn-custom primary" name="button">Post comment</button>
                                </form>
                            </div>*/}
                        </div>
                        {/* Agent Listings End */}
                    </div>
                    {/* Similar Agents Start */}
                    {/* <div className="section pb-0">
                        <h4 className="section-title">Similar Agents</h4>
                        <div className="row">
                            {agents.slice(0, 3).map((item, i) => (
                                <div key={i} className="col-lg-4">
                                    <div className="acr-agent">
                                        {item.star === true ? <div className="listing-badge featured"><i className="fas fa-star" /></div> : ''}
                                        <div className="acr-dots-wrapper acr-agent-thumb">
                                            <div className="acr-dots" />
                                            <Link to="/agent-details"><img src={process.env.PUBLIC_URL + "/" + item.img} alt="agent" /></Link>
                                        </div>
                                        <div className="acr-agent-body">
                                            <h6> <Link to="/agent-details">{item.name}</Link> </h6>
                                            <span>{item.post}</span>
                                            <p>{item.text}</p>
                                            <Link to="/agent-details" className="btn-custom secondary btn-sm">View Profile</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
                    {/* Similar Agents End */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        agentdetails: state.agentReducer.AgentDetails,
        listingdetail: state.listingdetail,


    };

}
const mapDispatchToProps = (dispatch) => {
    return {
        sendlistingdetail: (listingdetails) => {
            dispatch(listingdetail(listingdetails));
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Content);