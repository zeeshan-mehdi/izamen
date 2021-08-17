import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import pic from '../../../assets/img/skyscrapers-sunset.jpg'
import axios from "axios";
import globalvariables from "../../../globalvariables";
import { listingdetail } from '../../../redux/actions/listingActions';
import { connect } from 'react-redux';
import { datafromfilters } from '../../../redux/actions/listingActions';

// Banner
const bannerpost = [
    {
        id: 1,
        img: 'assets/img/1.jpg',
        price: 852000,
        emitime: 60,
        location: 'Iris Watson, Frederick Nebraska 20620',
        beds: 3,
        baths: 2,
        area: 2499,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        type: 'House',
        view: 'City View',
        size: '89 Acres',
        condition: 'Brand New'
    },
    {
        id: 2,
        img: 'assets/img/banner/2.jpg',
        price: 1200000,
        emitime: 60,
        location: 'Theodore Lowe, Azusa New York 39531',
        beds: 4,
        baths: 3,
        area: 3120,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        type: 'Duplex',
        view: 'Forest View',
        size: '180 Acres',
        condition: 'Brand New'
    },
];

class Banner extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.findproperties = this.findproperties.bind(this);
        this.state = {
            city: "",
            location: "",
            propertytype: "",
            subtype: "",
            upperprice: "",
            lowerprice: ""
        }
    }
    findproperties() {
        try {
            if (this.state.city === "" && this.state.location === "" && this.state.propertytype === "" && this.state.subtype === "" && this.state.upperprice === "" && this.state.lowerprice === "") {
                alert("please enter any filter")
            }
            else {
                var data = {
                    city: this.state.city,
                    address: this.state.location,
                    property_type: this.state.propertytype,
                    sub_type: this.state.subtype,
                    upper_price: this.state.upperprice,
                    lower_price: this.state.lowerprice
                }
                if (data.city === "") {
                    data.city = "null";
                }
                if (data.address === "") {
                    data.address = "null";
                }
                if (data.property_type === "") {
                    data.property_type = "null";
                }
                if (data.sub_type === "") {
                    data.sub_type = "null";
                }
                if (data.upper_price === "") {
                    data.upper_price = "null";
                }
                if (data.lower_price === "") {
                    data.lower_price = "null";
                }
                axios.post(globalvariables.data.Basicapi + "getPropertyOnFilter",
                    data,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                    .then(async (response) => {
                        console.log("Finding properties successfully", response.data);
                        this.props.sendlistingdetails(response.data,"fromfilters")

                    })
                    .catch(error => {
                        alert("in catch of axios while Find properties", error.toString());

                    });
            }
        } catch (error) {

            alert("in try catch while Finding properties", error.toString());

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
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
        }
        return (
            <>
                <div className="banner banner-2">
                    <Slider className="banner-slider" ref={c => (this.slider = c)} {...settings}>
                        {bannerpost.map((item, i) => (
                            <div key={i} className="banner-item">
                                <div className="banner-inner bg-cover bg-center dark-overlay" style={{ backgroundImage: `url(${pic})` }} >
                                    <div style={{ paddingTop: '15%', color: 'white' }}>
                                        <div className="row" style={{ paddingLeft: '25%' }}>
                                            <div className="col-md-3 form-group">
                                                <label>City</label>
                                                <input type="text" name="City" className="form-control" placeholder="City" onChange={(event) => { this.setState({ city: event.target.value }) }} />
                                            </div>
                                            <div className="col-md-3 form-group">
                                                <label>Location</label>
                                                <input type="text" name="location" className="form-control" placeholder="Location" onChange={(event) => { this.setState({ location: event.target.value }) }} />
                                            </div>
                                            <div className="col-md-3 form-group">
                                                <label>Property Type<span style={{ color: "red" }}>*</span></label>
                                                <select className="form-control" name="type" onChange={(event) => this.setState({ propertytype: event.target.value })}

                                                >
                                                    <option value="null">None</option>
                                                    <option value="Land/Plot">Land/Plot</option>
                                                    <option value="Buildings">Buildings</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="row" style={{ paddingLeft: '25%' }}>
                                            <div className="col-md-3 form-group">
                                                {
                                                    this.state.propertytype === "none" ? (null) :
                                                        (null)

                                                }
                                                {
                                                    this.state.propertytype === "Land/Plot" ? (<div className="col-md-12">
                                                        <label>Property Sub Type<span style={{ color: "red" }}>*</span></label>
                                                        <select className="form-control" name="subtype" onChange={(event) => { this.setState({ subtype: event.target.value }) }}
                                                        >
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
                                                    this.state.propertytype === "Buildings" ?
                                                        (<div className="col-md-12">
                                                            <label>Property Sub Type<span style={{ color: "red" }}>*</span></label>
                                                            <select className="form-control" name="type" onChange={(event) => this.setState({ subtype: event.target.value })} >
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


                                            </div>
                                            <div className="col-md-3 form-group">
                                                <label>Upper Price</label>
                                                <input type="text" name="UpperPrice" className="form-control" placeholder="Upper Price" onChange={(event) => { this.setState({ upperprice: event.target.value }) }} />
                                            </div>
                                            <div className="col-md-3 form-group">
                                                <label>Lower Price</label>
                                                <input type="LowerPrice" name="title" className="form-control" placeholder="Lower Price" onChange={(event) => { this.setState({ lowerprice: event.target.value }) }} />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row" style={{ paddingLeft: '50%' }}>
                                        <Link to="listing-list" className="btn-custom" onClick={() => {
                                            this.findproperties();
                                        }}>Finding Properties</Link>
                                        {/* <button  onClick={ }>Find Properties</button> */}

                                    </div>
                                </div>


                                {/* <div className="acr-listing-details">
                                <div className="acr-listing-section">
                                    <div className="acr-listing-nav">
                                        <Link to="/listing-details-v1" className="btn-custom secondary">See more details</Link>
                                    </div>
                                    <div className="acr-listing-section-body">
                                        <div className="acr-listing-section-price">
                                            <span>For Sale</span>
                                            <h3>${new Intl.NumberFormat().format((item.price).toFixed(2))}</h3>
                                            <span>Est. Mortgage</span>
                                            <p>${new Intl.NumberFormat().format((item.price / item.emitime).toFixed(2))}/mo</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="acr-listing-section">
                                    <div className="acr-listing-section-body">
                                        <h4> <Link to="/listing-details-v1">{item.location}</Link> </h4>
                                        <div className="acr-listing-icons">
                                            <div className="acr-listing-icon">
                                                <i className="flaticon-bedroom" />
                                                <span>Beds</span>
                                                <span className="acr-listing-icon-value">{item.beds}</span>
                                            </div>
                                            <div className="acr-listing-icon">
                                                <i className="flaticon-bathroom" />
                                                <span>Baths</span>
                                                <span className="acr-listing-icon-value">{item.baths}</span>
                                            </div>
                                            <div className="acr-listing-icon">
                                                <i className="flaticon-ruler" />
                                                <span>Sqft</span>
                                                <span className="acr-listing-icon-value">{new Intl.NumberFormat().format((item.area).toFixed(2))}</span>
                                            </div>
                                        </div>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                                <div className="acr-listing-section">
                                    <div className="acr-listing-controls">
                                        <Link to="#" className="acr-listing-control">
                                            <i className="flaticon-share" />
                                        </Link>
                                        <Link to="#" className="acr-listing-control">
                                            <i className="flaticon-star" />
                                        </Link>
                                        <Link to="#" className="acr-schedule-tour acr-listing-control">
                                            <i className="flaticon-event" />
                                            <span>Schedule Link tour</span>
                                        </Link>
                                    </div>
                                    <div className="acr-listing-section-body">
                                        <div className="acr-listing-meta">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-3 col-sm-3">
                                                    <div className="acr-listing-meta-item">
                                                        <span>Type</span>
                                                        <p>{item.type}</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-3 col-sm-3">
                                                    <div className="acr-listing-meta-item">
                                                        <span>View</span>
                                                        <p>{item.view}</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-3 col-sm-3">
                                                    <div className="acr-listing-meta-item">
                                                        <span>Lot Size</span>
                                                        <p>{item.size}</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-3 col-sm-3">
                                                    <div className="acr-listing-meta-item">
                                                        <span>Condition</span>
                                                        <p>{item.condition}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            </div>
                        ))}
                    </Slider>

                    {/* <div className="acr-arrows">
                    <i className="slider-prev fas fa-arrow-left slick-arrow" onClick={this.previous} />
                    <i className="slider-next fas fa-arrow-right slick-arrow" onClick={this.next} />
                </div> */}
                </div>

            </>
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
        sendlistingdetails: (data,check) => {
            dispatch(datafromfilters(data,check));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Banner);