import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Dropdown, NavLink, Button } from 'react-bootstrap';
import Sidebar from '../../layouts/Shopsidebar';
import listing from '../../../data/listings.json';
import classNames from 'classnames';
import Loader from '../../layouts/Loader';
import globalvariables from "../../../globalvariables";
import axios from 'axios';
import { connect } from 'react-redux';
import { listingdetail } from '../../../redux/actions/listingActions';
import { getlistingcategory } from '../../../redux/actions/listingActions';

import Pic from '../../../assets/img/house-isolated-field.jpg'
const gallerytip = (
    <Tooltip>
        Gallery
    </Tooltip>
);
const gridtip = (
    <Tooltip>
        Grid
    </Tooltip>
);
const listtip = (
    <Tooltip>
        List
    </Tooltip>
);
const maptip = (
    <Tooltip>
        Map
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
        Space
    </Tooltip>
);

class Content extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            currentPage: 1,
            itemsPerPage: 5,
            loading: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount() {
        if (this.props.check === "fromfilters") {
            this.setState({ items: this.props.data })
        }
        else {
            if (this.props.check) {


                try {
                    const res = await axios.post(globalvariables.data.Basicapi + "getPropertiesOnSubType",
                        {

                            'sub_type': this.props.category
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        });
                    console.log("res from getting properties", res.data);
                    if (res.data.length > 0) {
                        this.setState({ items: res.data })

                    }

                } catch (error) {
                    alert("From try catch of getting properties", error.toString());

                    // console.log(error);
                }

            }
            else {
                try {
                    const res = await axios.get(globalvariables.data.Basicapi + "getAllProperties",
                        {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        });
                    console.log("res from getting properties", res.data);
                    if (res.data.length > 0) {
                        this.setState({ items: res.data })

                    }

                } catch (error) {
                    alert("From try catch of getting properties", error.toString());

                    // console.log(error);
                }
            }
        }
    }

    handleClick(event) {
        var paginationContent = event.target.closest('.pagination-content');

        if (paginationContent) {
            paginationContent.scrollIntoView();
        }

        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                currentPage: Number(event.target.getAttribute('data-page')),
                loading: false
            });
        }, 2000);

    }
    render() {
        const { items, currentPage, itemsPerPage } = this.state;

        // Logic for displaying items
        const indexOfLastitem = currentPage * itemsPerPage;
        const indexOfFirstitem = indexOfLastitem - itemsPerPage;
        const currentitems = items.slice(indexOfFirstitem, indexOfLastitem);
       let renderitems;
        if (currentitems.length !=0) {
            renderitems = currentitems.map((item, i) => {
                return <div key={i} className="col-md-6">
                    <div className="listing-thumbnail">
                        <Link to="/listing-details-v1" onClick={() => { this.props.sendlistingdetail(item); }}><img src={Pic} alt="listing" /></Link>
                
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
            })
        }
        else {
            return <div style={{margin:'10%'}}><h2>No Properties Found</h2></div>
        }



        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPagination = pageNumbers.map(number => {
            const activeCondition = this.state.currentPage === number ? 'active' : ''
            return (
                <Fragment key={number}>
                    {pageNumbers.length > 1 ? <li className={classNames("page-item", { "active": activeCondition })}>
                        <Link className="page-link" to="#" data-page={number} onClick={this.handleClick}>{number}</Link>
                    </li> : ''}
                </Fragment>
            );
        });
        return (
            <div className="section pagination-content">
                <div className="container">
                    <div className="row">
                        {/* Sidebar Start */}
                        <div className="col-lg-4">
                            {/* <Sidebar /> */}
                        </div>
                        {/* Sidebar End */}
                        {/* Posts Start */}
                        <div className="col-lg-8">
                            {/* Controls Start */}
                            {/* <div className="acr-global-listing-controls">
                                <div className="acr-listing-active-filters">
                                    <Link to="#">
                                        <div className="close-btn close-dark">
                                            <span />
                                            <span />
                                        </div>
                                        Any Status
                                    </Link>
                                    <Link to="#">
                                        <div className="close-btn close-dark">
                                            <span />
                                            <span />
                                        </div>
                                    West Roxbury, MA
                                    </Link>
                                    <Link to="#">
                                        <div className="close-btn close-dark">
                                            <span />
                                            <span />
                                        </div>
                                        House
                                    </Link>
                                </div> */}
                            {/* <div className="acr-toggle-views">
                                    <OverlayTrigger placement="top" overlay={gridtip}>
                                        <Link to="/listing-grid"><i className="fas fa-th-large" /></Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="top" overlay={listtip}>
                                        <Link to="/listing-list" className="active"><i className="fas fa-th-list" /></Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="top" overlay={maptip}>
                                        <Link to="/listing-map"><i className="fas fa-map" /></Link>
                                    </OverlayTrigger>
                                </div> */}
                            {/* </div> */}
                            {/* Controls End */}
                            <div className="row">
                                {/* Listing Start */}
                                {this.state.loading === false ? renderitems : <Loader />}
                                {/* Listing End */}
                            </div>
                            {/* Pagination Start */}
                            {pageNumbers.length > 1 ?
                                <ul className="pagination">
                                    {/* Prev */}
                                    {/* to show previous, we need to be on the 2nd or more page */}
                                    {pageNumbers.length > 1 && this.state.currentPage !== 1 ?
                                        <li className="page-item">
                                            <Link className="page-link" to="#" data-page={this.state.currentPage - 1} onClick={this.handleClick}>
                                                <i className="fas fa-chevron-left" />
                                            </Link>
                                        </li>
                                        : ''}
                                    {/* Prev */}
                                    {renderPagination}
                                    {/* Next */}
                                    {/* to show next, we should not be on the last page */}
                                    {pageNumbers.length > 1 && this.state.currentPage !== pageNumbers.length ? <li className="page-item">
                                        <Link className="page-link" to="#" data-page={parseInt(this.state.currentPage + 1)} onClick={this.handleClick}>
                                            <i className="fas fa-chevron-right" />
                                        </Link>
                                    </li>
                                        : ''}
                                    {/* Next */}
                                </ul> : ''}
                            {/* Pagination End */}
                        </div>
                        {/* Posts End */}
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        listingdetail: state.listingdetail,
        category: state.listingReducer.category,
        check: state.listingReducer.check,
        data: state.listingReducer.data

    };

}
const mapDispatchToProps = (dispatch) => {
    return {
        sendlistingdetail: (listingdetails) => {
            dispatch(listingdetail(listingdetails));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);