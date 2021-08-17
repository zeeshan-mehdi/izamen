import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import agents from '../../../data/agents.json';
import axios from 'axios';
import globalvariables from '../../../globalvariables';
import { connect } from 'react-redux';
import {setAgentDetails} from '../../../redux/actions/agentActions';
import avatar from "../../../assets/img/avatar.png"

class Agentsslider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state={
            agents:[]
        }
    }
    componentDidMount(){
        
        try {
            axios.get(globalvariables.data.Basicapi + "getAllAgents",
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(async (response) => {
                    console.log("Finding Agents successfully", response.data);
                    this.setState({agents:response.data});
                    // this.props.sendlistingdetails(response.data, "fromfilters")

                })
                .catch(error => {
                    alert("in catch of axios while Agents", error.toString());

                });

        } catch (error) {

            alert("in try catch while Agents", error.toString());

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
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }
        return (
            <div className="section pt-0 agents">
                <div className="container">
                    <div className="section-title-wrap section-header flex-header">
                        <div className="section-title-text">
                            <h5 className="custom-primary">Our Back bone</h5>
                            <h2 className="title">Meet Our Agents</h2>
                        </div>
                        <div className="acr-arrows primary-arrows">
                            <i className="slider-prev fas fa-arrow-left slick-arrow" onClick={this.previous} />
                            <i className="slider-next fas fa-arrow-right slick-arrow" onClick={this.next} />
                        </div>
                    </div>
                    <Slider className="agents-slider" ref={c => (this.slider = c)} {...settings}>
                        {/* Agent Start */}
                        {this.state.agents.map((item, i) => (
                            
                            <div key={i} className="col-12">
                                {console.log("Items",item)}
                                <div className="acr-agent">
                                    {/* {item.star === true ? <div className="listing-badge featured"><i className="fas fa-star" /></div> : ''} */}
                                    <div className="acr-dots-wrapper acr-agent-thumb">
                                        <div className="acr-dots" />
                                        <img src={item.img_path ? item.img_path:avatar} alt="agent" />
                                    </div>
                                    <div className="acr-agent-body">
                                        <h6> {item.firstName +" "+ item.lastName} </h6>
                                        <span>{item.email}</span>
                                        <p>{item.address +" "+ item.city}</p>
                                        <Link to="/agent-details" className="btn-custom secondary btn-sm" onClick={()=>{this.props.sendagentdetail(item)}}>View Profile</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Agent End */}
                    </Slider>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendagentdetail: (agentdetail) => {
            dispatch(setAgentDetails(agentdetail));
        },
    }
}

export default connect(null, mapDispatchToProps)(Agentsslider);