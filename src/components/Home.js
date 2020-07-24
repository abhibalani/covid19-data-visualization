import React from "react";
import { Component } from "react";
import { connect } from 'react-redux';
import { addDataToMap } from 'kepler.gl/actions';
import { Container } from "react-bootstrap";
import CovidData from "./CovidData";
import Kepler from "./Kepler";
import { pointLayerConfig } from "../keplerConfigs/pointLayerConfig";
import { pointLayerConfig2 } from "../keplerConfigs/pointLayerConfig2";
import { mapStyleConfig } from "../keplerConfigs/mapStyleConfig";
import { interactionConfig } from "../keplerConfigs/interactionConfig";
import { clusterLayerConfig } from "../keplerConfigs/clusterLayerConfig";
import { heatMapLayerConfig } from "../keplerConfigs/heapMapLayerConfig";


class Home extends Component {
    constructor(props) {
        super(props);

        let layerConfigList = [pointLayerConfig, clusterLayerConfig, heatMapLayerConfig]
        let mapStyle = mapStyleConfig;
        let interactionConf = interactionConfig;

        if ('layerConfigs' in this.props) {
            layerConfigList = this.props.layerConfigs;
        }

        if ('mapStyle' in this.props) {
            mapStyle = this.props.mapStyle;
        }

        if ('interactionConf' in this.props) {
            interactionConf = this.props.interactionConf;
        }

        this.state = {
            displayDownButton: false,
            displayUpButton: false,
            scrollPosition: 0,
            covidData: 0,
            layerConfigList: layerConfigList,
            mapStyle: mapStyle,
            interactionConf: interactionConf
        }

    }

    loadDataOnMap = (covidData) => {
        const config = {
            datasets: {
                info: {
                    label: 'Covid 19',
                    id: 'covid_19_data'
                },
                data: covidData
            },
            option: {
                centerMap: true,
                readOnly: true
            },
            config: {
                interactionConfig: this.state.interactionConfig,
                mapStyle: this.state.mapStyle,
                visState: {
                    filters: [],
                    layerBlending: "normal",
                    layers: this.state.layerConfigList
                }
            }
        }

        this.props.dispatch(addDataToMap(config));
    }

    componentDidMount() {
        fetch('/covid_data.json')
            .then(response => response.json())
            .then((jsonData) => {
                this.setState({
                    covidData: jsonData
                });
                this.loadDataOnMap(jsonData);
            })
            .catch((error) => {
                console.error("Unabled to fetch json")
            })
    }

    getCovidData = () => {
        // Unused
        // const parsedConfig = KeplerGlSchema.parseSavedConfig(keplerConfig);
        // this.props.dispatch(receiveMapConfig(parsedConfig));
    }

    render() {

        return (
            <Container fluid className="p-0 bg-dark" >
                <CovidData />
                <Kepler />
            </Container >
        )
    }

}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(Home);
