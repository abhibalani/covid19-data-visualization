import React, { Component } from 'react';
import KeplerGl from 'kepler.gl';

class Kepler
    extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <KeplerGl
                id="map"
                width={window.innerWidth}
                mapboxApiAccessToken={"pk.eyJ1IjoiYWJoaWJhbGFuaSIsImEiOiJja2NyZnRzM3gwaml4MzFteDU1ZnM1dGhpIn0.t8SA-yrv7Im74S8pjd5TiQ"}
                height={window.innerHeight}
                appName={'OddBlogger'}
            />
        );
    }
}

export default Kepler
    ;