
import React, {Component } from "react";
import { Container } from "react-bootstrap";

import { Navbar } from 'react-bootstrap';


class Header
    extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
        Covid19 Map
        </Navbar.Brand>
        </Navbar>);
    }
}

export default Header
    ;