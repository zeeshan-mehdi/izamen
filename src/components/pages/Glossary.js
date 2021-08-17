import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/glossary/Content';

class Glossary extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Izameen | Glossary</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Glossary'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Glossary;