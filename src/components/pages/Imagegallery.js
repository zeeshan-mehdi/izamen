import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/image-gallery/Content';

class Imagegallery extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Izameen | Images Gallery</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Images Gallery'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Imagegallery;