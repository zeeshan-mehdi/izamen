import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Listingwrapper from './Listingwrapper';
import {connect} from 'react-redux';
import {getlistingdetail,listingdetail} from '../../../redux/actions/listingActions';
class Content extends Component {
    render() {

        return (
            <Fragment>
                <Banner lisitingdetailproperty={this.props.listingdetail}/>
                <Listingwrapper lisitingdetailproperty={this.props.listingdetail}/>
            </Fragment>
        );
    }
}
const mapStateToProps = state=> {
    return{
        listingdetail:state.listingReducer.listingfordetail
    };
    
 }
export default connect(mapStateToProps)(Content);