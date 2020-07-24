
import React, { Component } from "react";

import { Navbar, Nav } from 'react-bootstrap';
import InfoModal from "./InfoModal";
import CovidDataSlim from "./CovidDataSlim";


class Header
    extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    toggleModal = (show) => {
        this.setState({
            show: show
        });
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
                <Navbar.Brand href="#home" className={"text-center"}>
                    {/* <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '} */}
                    Covid19 Data Visualization
                    {/* <img width={30} alt="India Flag" src="https://disease.sh/assets/img/flags/in.png"></img> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className={"justify-content-end"}>
                    <Nav>
                        <CovidDataSlim />
                    </Nav>
                    <InfoModal />
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;