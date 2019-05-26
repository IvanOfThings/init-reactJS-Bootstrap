// Content.js

import React, { Component } from 'react';
import Headbar from '../components/Headbar'
import Footer from '../components/Footer'
//import NotFound from './pages/NotFound';

export default function Content(props) {
    return (

        <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">
                <Headbar />

                {props.children}
            </div>
            <Footer />
        </div>

    )
}