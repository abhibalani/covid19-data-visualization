import React, { Component } from 'react';
import { Card, Col, Badge } from 'react-bootstrap';
import CountUp from 'react-countup';

class StatCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let badge = <Badge variant={this.props.variant}>+<CountUp end={this.props.dataToday} duration={5} />{}</Badge>
        if (this.props.dataToday === '-1') {
            badge = <br />;
        }

        return (
            <Card>
                <Card.Body className={"text-center p-2"}>
                    <Card.Title style={{ textAlign: "center !important", fontSize: 14 }}><p >{this.props.cardName}</p></Card.Title>
                    <Card.Text>
                        <Col>
                            <h3 className="text-center">{this.props.data}</h3>
                            {badge}
                        </Col>
                    </Card.Text >
                </Card.Body >
            </Card >
        );
    }
}

export default StatCard;