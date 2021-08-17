import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/agency-details/Content';

class Agencydetails extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Izameen | Laws Of The Lands</title>
                    <meta
                        name="description"
                        content="#" 
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Laws Of The Lands'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Agencydetails;