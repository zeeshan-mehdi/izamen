import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/portfolio/Content';

class Portfolio extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Izameen | Portfolio</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Portfolio'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Portfolio;