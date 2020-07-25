import React, { Component } from 'react';
import { Container, Spinner } from 'react-bootstrap';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<Container fluid className="p-0 bg-dark text-center" style={{ height: "100%", position: "fixed" }}>
            <Spinner className={"mt-5"} animation="grow" variant="light" />
        </Container>);
    }
}

export default Loading;