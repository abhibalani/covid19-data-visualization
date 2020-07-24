import React, { Component } from 'react';
import { Card, Col, Badge } from 'react-bootstrap';
import CountUp from 'react-countup';
import './StateCard.css'

import { convertNumber } from '../utils'

class StatCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let badge = <Badge className={"state-card-badge"} variant={this.props.variant}>+<CountUp end={this.props.dataToday} duration={5} />{}</Badge>
        if (this.props.dataToday === '-1') {
            badge = <><br /></>;
        }

        return (
            <Card className={"state-card"}>
                <Card.Body className={"state-card-body"}>
                    <Card.Title className={"state-card-title"}><p>{this.props.cardName}</p></Card.Title>
                    <Card.Text >
                        <Col className={"state-card-count"}>
                            <h3>{convertNumber(this.props.data)}</h3>
                            {badge}
                        </Col>
                    </Card.Text >
                </Card.Body>
            </Card>
        );
    }
}

export default StatCard;