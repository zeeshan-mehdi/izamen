import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';
// import pic1 from '../../../assets/img/Park-House.jpg';
import pic2 from '../../../assets/img/construction-site-silhouettes.jpg';
import pic3 from '../../../assets/img/residential-area-with-new-buildings.jpg';
import axios from 'axios';
import globalvariables from '../../../globalvariables';

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            imagegalleries: []
        }
    }
    componentDidMount() {
        try {
            axios.get(globalvariables.data.Basicapi + "getAllGalleries",
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(async (response) => {
                    console.log("Finding all galleries", response.data);
                    this.setState({ imagegalleries: response.data });
                    // this.props.sendlistingdetails(response.data, "fromfilters")

                })
                .catch(error => {
                    alert("in catch of axios while fetching galleries", error.toString());

                });

        } catch (error) {

            alert("in try catch while while fetching galleries", error.toString());

        }
        // function popup() {
        //     $('.gallery-thumb').magnificPopup({
        //         type: 'image',
        //         gallery: {
        //             enabled: true
        //         },


        //     });
        // }
        // popup()
    }
    render() {
        return (
            <div className="section section-padding">
                <div className="container">
                    <div className="section-title-wrap section-header">
                        <h5 className="custom-primary">Our Image Gallery</h5>
                        <h2 className="title">What You're Working With</h2>
                    </div>
                    <div className="row gallery">
                        {
                            this.state.imagegalleries.map((item,i)=>{
                               return <div key={i}className="col-lg-6">
                                <Link to={item.img_path} className="gallery-thumb" >
                                    <img src={item.img_path} alt="gallery" />
                                    <p className="gallery-caption">{item.desc}</p>
                                </Link>
                            </div>
                            })
                        }
                        {/* <div className="col-lg-6">
                            <Link to={pic1} className="gallery-thumb" title="This is a video">
                                <img src={pic1} alt="services" />
                                <p className="gallery-caption">The XYZ Plaza</p>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link to={pic2} className="gallery-thumb">
                                <img src={pic2} alt="services" />
                                <p className="gallery-caption">The PDM Contruction</p>
                            </Link>
                            <Link to={pic2} className="gallery-thumb">
                                <img src={pic2} alt="services" />
                                <p className="gallery-caption">Yes Building</p>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;