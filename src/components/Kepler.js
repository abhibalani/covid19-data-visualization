import React, { Component } from 'react';
import KeplerGl from 'kepler.gl';
import { Container, Spinner } from 'react-bootstrap';
import Loading from './Loading';

class Kepler
    extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        let DisplayComponent = <Loading />

        if (!this.props.isLoading) {
            DisplayComponent = <KeplerGl
                id="map"
                width={window.innerWidth}
                mapboxApiAccessToken={"pk.eyJ1IjoiYWJoaWJhbGFuaSIsImEiOiJja2NyZnRzM3gwaml4MzFteDU1ZnM1dGhpIn0.t8SA-yrv7Im74S8pjd5TiQ"}
                height={window.innerHeight}
                appName={'OddBlogger'}
            />
        }

        return (
            <Container fluid className="p-0 bg-dark">
                {DisplayComponent}
            </Container>

        );
    }
}

export default Kepler
    ;