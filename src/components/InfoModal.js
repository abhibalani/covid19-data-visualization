import React, { Component } from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

class InfoModal extends Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: this.props.show
        }
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }


    render() {
        return (
            <React.Fragment>
                <Button variant="info" size="sm" onClick={this.handleShow}>Info</Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>About</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={"text-center"}>
                        <a href="https://oddblogger.com" target="_blank" rel="noopener noreferrer">
                            <Image width={120} src={"https://oddblogger.com/wp-content/uploads/2017/01/OB-Shield-1.png"} />
                        </a>
                        <br />
                        <br />
                        <p style={{ fontSize: 14 }}>
                            <a href="https://oddblogger.com/integrating-kepler-gl-in-react-js/" target="_blank" rel="noopener noreferrer">
                                About this project
                        </a>
                        </p>


                        <h5>Powered By</h5>
                        <p style={{ fontSize: 14 }}>Covid19India.org, Kepler.gl, React, Python</p>

                        <h5>Github Link</h5>
                        <p style={{ fontSize: 14 }}>
                            <a href="https://github.com/abhibalani/covid19-data-visualization" target="_blank" rel="noopener noreferrer">
                                Covid19 Data Visualization
                            </a>
                        </p>

                        <h5>Contact</h5>
                        <p style={{ fontSize: 14 }}>
                            <a href="https://oddblogger.com/contact" target="_blank" rel="noopener noreferrer">
                                oddblogger.com/contact
                            </a>
                        </p>



                        <h5>
                            Disclaimer
                        </h5>
                        <p style={{ fontSize: 14 }}>This is not an official site for Covid19 data tracking.</p>



                    </Modal.Body>
                    <Modal.Footer className={"text-center"}>
                        <Button
                            variant="success"
                            onClick={this.handleClose}
                        >
                            Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default InfoModal;