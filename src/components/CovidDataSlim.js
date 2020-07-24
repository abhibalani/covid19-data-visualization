import React, { Component } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import axios from "axios";
import StateCard from './StateCard'
// import StateCard from './StateCard'
import CountUp from 'react-countup';

class CovidDataSlim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmed: 0,
            active: 0,
            deceased: 0,
            recovered: 0,
            tested: 0,
            confirmedToday: 0,
            deceasedToday: 0,
            recoveredToday: 0,
            testedToday: 0,
            indiaFlag: "https://disease.sh/assets/img/flags/in.png"

        }
    }

    componentDidMount() {
        this.getIndiaStats();
    }

    getIndiaStats = () => {
        axios.get("https://corona.lmao.ninja/v2/countries/India?yesterday=0&strict=true&query")
            .then(res => {
                const data = res.data
                // const today = moment(data.updated).toObject();
                const dt = new Date(data.updated).format("dd-MM-yyyy hh:mm:ss");
                const lastUpdated = dt;
                this.setState({
                    confirmed: data.cases,
                    confirmedToday: data.todayCases,
                    deceased: data.deaths,
                    deceasedToday: data.todayDeaths,
                    recovered: data.recovered,
                    recoveredToday: data.todayRecovered,
                    updatedAt: lastUpdated,
                    active: data.active,
                })
            })

    }

    render() {
        return (
            <Container fluid className={"covid-data-slim"} >
                <Row>
                    <Col xs={6} lg>
                        <StateCard
                            cardName={"Confirmed"}
                            data={this.state.confirmed}
                            dataToday={this.state.confirmedToday}
                            variant={"danger"} />
                    </Col>
                    <Col xs={6}>
                        <StateCard
                            cardName={"Active"}
                            data={this.state.active}
                            dataToday={"-1"}
                            variant={"primary"}
                        />
                    </Col>
                    <Col xs={6}>
                        <StateCard
                            cardName={"Recovered"}
                            data={this.state.recovered}
                            dataToday={this.state.recoveredToday}
                            variant={"success"}
                        />
                    </Col>
                    <Col xs={6}>
                        <StateCard
                            cardName={"Deceased"}
                            data={this.state.deceased}
                            dataToday={this.state.deceasedToday}
                            variant={"secondary"}
                        />
                    </Col>
                </Row>
                {/* <Row >
                        <Col className={"text-center mt-2"} style={{ fontSize: 12 }} >
                            <p className={"text-light"}>Last Updated: {this.state.updatedAt}</p>
                            <p className={"text-light"}>Data till yesterday</p>
                        </Col>

                    </Row> */}

            </Container>
        );
    }
}

Date.prototype.format = function (format) {
    var date = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        'S+': this.getMilliseconds()
    };

    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    for (var k in date) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? date[k] : ('00' + date[k]).substr(('' + date[k]).length));
        }
    }

    return format;
}

export default CovidDataSlim;