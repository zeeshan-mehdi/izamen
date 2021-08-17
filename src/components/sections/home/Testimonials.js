import React, { Component } from 'react';
import testimonial from '../../../data/testimonial.json';
import { processRatingStars } from '../../../helper/helper';
import axios from "axios";
import globalvariables from "../../../globalvariables";
import avatar from "../../../assets/img/avatar.png"
class Testimonials extends Component {
    constructor() {
        super();
        this.state = {
            testimonials: []
        }
    }
    async componentDidMount() {
        
        try {
            const res = await axios.get(globalvariables.data.Basicapi + "getAllTestimonials",
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            // console.log("saas", res.data);
            this.setState({ testimonials: res.data });



        } catch (error) {
            alert("From try catch of getting Testimonials", error.toString());

            console.log(error);
        }
    }
    render() {
        return (
            <div className="section section-padding">
                <div className="container">
                    <div className="section-title-wrap section-header">
                        <h5 className="custom-primary">Testimonials</h5>
                        <h2 className="title">What Are People Saying</h2>
                    </div>
                    <div className="row">
                        {/* Testimonail item start */}
                        {this.state.testimonials.slice(0, 3).map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-12">
                                <div className="acr-testimonial">
                                    <div className="acr-testimonial-body">                                       
                                        <p>{item.details}</p>
                                    </div>
                                    <div className="acr-testimonial-author">
                                        <img src={item.img_path ? item.img_path:avatar} alt="testimonial" />
                                        <div className="acr-testimonial-author-inner">
                                            <h6>{item.name}</h6>
                                            <span>{item.refrence}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Testimonail item end */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;