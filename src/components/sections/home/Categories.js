import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { type } from '../../../data/category.json'
import pic from '../../../assets/img/house-isolated-field.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {connect} from 'react-redux';
import {getlistingcategory} from '../../../redux/actions/listingActions';
import villa from '../../../assets/img/villa.png';
import villa1 from '../../../assets/img/villa1.jpg';
import farmhouse from '../../../assets/img/farmhouse.jpg';
import Mall from '../../../assets/img/ParkHouse.jpg';
import Appartments from '../../../assets/img/appartments.jpg';
import AppartmentsBlock from '../../../assets/img/appartmentsblock.jpg';
import Hotel from '../../../assets/img/hotel.jpg';
import Industrial from '../../../assets/img/industrial.jpg';
import Penthouse from '../../../assets/img/penthouse.jpg';
import opentland from '../../../assets/img/openland.jpg';
import residentialplot from '../../../assets/img/residentialplot.jpg';
import commercial from '../../../assets/img/commercial.jpg';
import agricultural from '../../../assets/img/agricultural.jpg';
import industrial from '../../../assets/img/industrialplot.jpg';

class Categories extends Component {
    render() {
        return (
            <div className="section section-padding">
                <div className="container">
                    <div className="section-title-wrap section-header">
                        <h5 className="custom-primary">Categories</h5>
                        <h2 className="title">Browse By Category</h2>
                    </div>
                    <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="acr-category">
                                    <div className="acr-category-thumb">
                                    <i class="fas fa-home"></i>
                                    <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("HouseProperty",true)}}><img src={pic} alt="category" style={{width:'400px',height:'250px'}} /></Link>
                                        <div className="acr-category-body">
                                            <h5> <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("HouseProperty",true)}}>House Property</Link> </h5>
                                            {/* <span>{item.numberofitem} Listings</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="acr-category">
                                    <div className="acr-category-thumb">
                                    <i class="fas fa-home"></i>
                                    <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("Villa",true)}}><img src={villa1} style={{width:'400px',height:'250px'}} alt="category" /></Link>
                                        <div className="acr-category-body">
                                            <h5> <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("Villa",true)}}>Villa</Link> </h5>
                                            {/* <span>{item.numberofitem} Listings</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="acr-category">
                                    <div className="acr-category-thumb">
                                    <i class="fas fa-home"></i>
                                    <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("FarmHouse",true)}}><img src={farmhouse} style={{width:'400px',height:'250px'}} alt="category" /></Link>
                                        <div className="acr-category-body">
                                            <h5> <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("FarmHouse",true)}}>Farm House</Link> </h5>
                                            {/* <span>{item.numberofitem} Listings</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="acr-category">
                                    <div className="acr-category-thumb">
                                    <i class="fas fa-store"></i>
                                    <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("Mall",true)}}><img src={Mall} style={{width:'400px',height:'250px'}} alt="category" /></Link>
                                        <div className="acr-category-body">
                                            <h5> <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("Mall",true)}}>Mall</Link> </h5>
                                            {/* <span>{item.numberofitem} Listings</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="acr-category">
                                    <div className="acr-category-thumb">
                                    <i class="fas fa-building"></i>
                                    <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("Appartment",true)}}><img src={Appartments} style={{width:'400px',height:'250px'}} alt="category" /></Link>
                                        <div className="acr-category-body">
                                            <h5> <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("Appartment",true)}}>Appartment</Link> </h5>
                                            {/* <span>{item.numberofitem} Listings</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="acr-category">
                                    <div className="acr-category-thumb">
                                    <i class="fas fa-building"></i>
                                    <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("AppartmentBlock",true)}}><img src={AppartmentsBlock} style={{width:'400px',height:'250px'}} alt="category" /></Link>
                                        <div className="acr-category-body">
                                            <h5><Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("AppartmentBlock",true)}}>Appartment Block</Link> </h5>
                                            {/* <span>{item.numberofitem} Listings</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="acr-category">
                                    <div className="acr-category-thumb">
                                    <i class="fas fa-hotel"></i>
                                    <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("Hotel",true)}}><img src={Hotel} style={{width:'400px',height:'250px'}} alt="category" /></Link>
                                        <div className="acr-category-body">
                                            <h5> <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("Hotel",true)}}>Hotel</Link> </h5>
                                            {/* <span>{item.numberofitem} Listings</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="acr-category">
                                    <div className="acr-category-thumb">
                                    <i class="fas fa-industry"></i>
                                    <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("IndustrialBuilding",true)}}><img src={Industrial} style={{width:'400px',height:'250px'}} alt="category" /></Link>
                                        <div className="acr-category-body">
                                            <h5> <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("IndustrialBuilding",true)}}>Industrial Building</Link> </h5>
                                            {/* <span>{item.numberofitem} Listings</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="acr-category">
                                    <div className="acr-category-thumb">
                                    <i class="fas fa-monument"></i>                                        
                                    <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("PentHouse",true)}}><img src={Penthouse} style={{width:'400px',height:'250px'}} alt="category" /></Link>
                                        <div className="acr-category-body">
                                            <h5> <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("PentHouse",true)}}>Pent House</Link> </h5>
                                            {/* <span>{item.numberofitem} Listings</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="acr-category">
                                    <div className="acr-category-thumb">
                                    <i class="fas fa-city"></i>
                                    <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("OpenLand",true)}}><img src={opentland} style={{width:'400px',height:'250px'}} alt="category" /></Link>
                                        <div className="acr-category-body">
                                            <h5><Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("OpenLand",true)}}>Open Land</Link> </h5>
                                            {/* <span>{item.numberofitem} Listings</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="acr-category">
                                    <div className="acr-category-thumb">
                                    <i class="fas fa-city"></i>
                                    <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("ResidentialPlot",true)}}><img src={residentialplot} style={{width:'400px',height:'250px'}} alt="category" /></Link>
                                        <div className="acr-category-body">
                                            <h5> <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("ResidentialPlot",true)}}>Residential Plot</Link> </h5>
                                            {/* <span>{item.numberofitem} Listings</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="acr-category">
                                    <div className="acr-category-thumb">
                                    <i class="fas fa-city"></i>
                                    <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("Commercial",true)}}><img src={commercial} style={{width:'400px',height:'250px'}} alt="category" /></Link>
                                        <div className="acr-category-body">
                                            <h5><Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("Commercial",true)}}>Commercial Plot</Link> </h5>
                                            {/* <span>{item.numberofitem} Listings</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="acr-category">
                                    <div className="acr-category-thumb">
                                    <i class="fas fa-city"></i>
                                    <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("AgriculturalLand",true)}}><img src={agricultural} style={{width:'400px',height:'250px'}} alt="category" /></Link>
                                        <div className="acr-category-body">
                                            <h5> <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("AgriculturalLand",true)}}>Agricultural Land</Link> </h5>
                                            {/* <span>{item.numberofitem} Listings</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="acr-category">
                                    <div className="acr-category-thumb">
                                    <i class="fas fa-city"></i>
                                    <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("IndustrialLand",true)}}><img src={industrial} style={{width:'400px',height:'250px'}} alt="category" /></Link>
                                        <div className="acr-category-body">
                                            <h5> <Link to="/listing-list" onClick={()=>{this.props.sendlistingcategory("IndustrialLand",true)}}>Industrial Plot</Link> </h5>
                                            {/* <span>{item.numberofitem} Listings</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        // listingdetail:state.listingdetail
    };
    
}
const mapDispatchToProps = (dispatch) => {
    return {
      sendlistingcategory: (category,check) => {
        dispatch(getlistingcategory(category,check));
      },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Categories);