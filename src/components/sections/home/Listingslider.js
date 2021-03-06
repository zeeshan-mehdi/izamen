import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from 'react-bootstrap';
import Slider from 'react-slick';
// import listing from '../../../data/listings.json';
import axios from 'axios';
import globalvariables from "../../../globalvariables";
import Pic from '../../../assets/img/house-isolated-field.jpg'
import { listingdetail } from '../../../redux/actions/listingActions';
import { connect } from 'react-redux';

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

class Listingslider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state={
            listing:[]
        }
    }
    componentDidMount() {
        try {
            axios.post(globalvariables.data.Basicapi + "getRecentProperties",
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(async (response) => {
                    console.log("Finding recent properties successfully", response.data);
                    this.setState({listing:response.data});
                    // this.props.sendlistingdetails(response.data, "fromfilters")

                })
                .catch(error => {
                    alert("in catch of axios while Find recent properties", error.toString());

                });

        } catch (error) {

            alert("in try catch while Finding recent properties", error.toString());

        }
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        }
        return (
            <div className="section section-padding pt-0 listings">
                <div className="container">
                    <div className="section-title-wrap section-header flex-header">
                        <div className="section-title-text">
                            <h5 className="custom-primary">Find Your Home</h5>
                            <h2 className="title">Recent Listings</h2>
                        </div>
                        <div className="acr-arrows primary-arrows">
                            <i className="slider-prev fas fa-arrow-left slick-arrow" onClick={this.previous} />
                            <i className="slider-next fas fa-arrow-right slick-arrow" onClick={this.next} />
                        </div>
                    </div>
                    <Slider className="listings-slider" ref={c => (this.slider = c)} {...settings}>
                        {/* Listing Start */}
                        {this.state.listing.map((item, i) => (
                            <div key={i} className="col-md-12" style={{width:'400px'}}>
                                <div className="listing">
                                    <div className="listing-thumbnail">
                                        <Link to="/listing-details-v1" onClick={() => { this.props.sendlistingdetail(item); }}><img src={item.img_path} alt="listing" /></Link>
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
                                        </div>
                                        <div className="listing-controls">
                                            <Link to="#" className="favorite"><i className="far fa-heart" /></Link>
                                            <Link to="#" className="compare"><i className="fas fa-sync-alt" /></Link>
                                        </div> */}
                                    </div>
                                    <div className="listing-body">
                                        <div className="listing-author">
                                            {/* <img src={process.env.PUBLIC_URL + "/" + item.authorimg} alt="author" /> */}
                                            <div className="listing-author-body">
                                                {/* <p> <Link to="#">{item.authorname}</Link> </p> */}
                                                <span className="listing-date">{item.dateOfAdvert}</span>
                                            </div>
                                            {/* <Dropdown className="options-dropdown">
                                                <Dropdown.Toggle as={NavLink}><i className="fas fa-ellipsis-v" /></Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-right">
                                                    <ul>
                                                        <li> <Link to="tel:+123456789"> <i className="fas fa-phone" /> Call Agent</Link> </li>
                                                        <li> <Link to="mailto:+123456789"> <i className="fas fa-envelope" /> Send Message</Link> </li>
                                                        <li> <Link to="/listing-details-v1"> <i className="fas fa-bookmark" /> Book Tour</Link> </li>
                                                    </ul>
                                                </Dropdown.Menu>
                                            </Dropdown> */}
                                        </div>
                                        <h5 className="listing-title"> <Link to="/listing-details-v1" title={item.title} onClick={() => { this.props.sendlistingdetail(item); }}>{item.title}</Link> </h5>
                                        <span className="listing-price">{item.price}Pkr <span>/month</span> </span>
                                        <p className="listing-text" style={{overflowWrap: 'break-word', whiteSpace: 'normal'}}>{item.description}</p>
                                        <div className="acr-listing-icons">
                                            {/* <OverlayTrigger overlay={bedstip}>
                                                <div className="acr-listing-icon">
                                                    <i className="flaticon-bedroom" />
                                                    <span className="acr-listing-icon-value">{item.beds}</span>
                                                </div>
                                            </OverlayTrigger>
                                            <OverlayTrigger overlay={bathstip}>
                                                <div className="acr-listing-icon">
                                                    <i className="flaticon-bathroom" />
                                                    <span className="acr-listing-icon-value">{item.bathrooms}</span>
                                                </div>
                                            </OverlayTrigger> */}
                                            <OverlayTrigger overlay={areatip}>
                                                <div className="acr-listing-icon">
                                                    <i className="flaticon-ruler" />
                                                    <span className="acr-listing-icon-value">{item.area + " " + item.area_type}</span>
                                                </div>
                                            </OverlayTrigger>
                                        </div>
                                        <div className="listing-gallery-wrapper">
                                            <Link to="/listing-details-v1" className="btn-custom btn-sm secondary" onClick={() => { this.props.sendlistingdetail(item); }}>View Details</Link>
                                            <OverlayTrigger overlay={gallerytip}>
                                                <Link to="#" className="listing-gallery"> <i className="fas fa-camera" /> </Link>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Listing End */}
                    </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Listingslider);