export const pointLayerConfig2 = {
    id: "cqvvbpn",
    type: "point",
    config: {
        dataId: "covid_19_data",
        label: "Covid19 Stats",
        color: [
            159,
            0,
            0
        ],
        columns: {
            "lat": "lat",
            "lng": "lon",
            "altitude": null
        },
        isVisible: true,
        visConfig: {
            radius: 10,
            fixedRadius: false,
            opacity: 0.5,
            outline: false,
            thickness: 2,
            strokeColor: null,
            colorRange: {
                name: "Global Warming",
                type: "sequential",
                category: "Uber",
                colors: [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                ]
            },
            strokeColorRange: {
                name: "Global Warming",
                type: "sequential",
                category: "Uber",
                colors: [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                ]
            },
            radiusRange: [
                0,
                245.6
            ],
            filled: true
        },
        hidden: false,
        textLabel: [
            {
                field: null,
                color: [
                    255,
                    255,
                    255
                ],
                size: 18,
                offset: [
                    0,
                    0
                ],
                anchor: "start",
                alignment: "center"
            }
        ]
    },
    visualChannels: {
        colorField: null,
        colorScale: "quantile",
        strokeColorField: null,
        strokeColorScale: "quantile",
        sizeField: {
            name: "confirmed",
            type: "integer"
        },
        sizeScale: "sqrt"
    }
}