export const clusterLayerConfig = {
    id: 'l2vlgiq',
    type: 'cluster',
    config: {
        dataId: 'covid_19_data',
        label: 'Covid19',
        color: [23, 184, 190],
        columns: { 'lat': 'lat', 'lng': 'lon' },
        isVisible: false,
        visConfig: {
            radius: 10,
            fixedRadius: false,
            opacity: 0.39,
            outline: false,
            thickness: 2,
            colorRange: {
                name: "ColorBrewer PRGn-6",
                type: "diverging",
                category: "ColorBrewer",
                colors: [
                    "#762a83",
                    "#af8dc3",
                    "#9826C1",
                    "#d9f0d3",
                    "#860DBA",
                    "#671690"
                ],
                reversed: false
            },
            radiusRange: [
                4.2,
                96.2
            ],
            "hi-precision": false
        },
        // textLabel: [{
        //     field: 'asdas',
        //     color: [255, 255, 255],
        //     size: 18,
        //     offset: [0, 0],
        //     anchor: 'start',
        //     alignment: 'center'
        // }]
    },
    // visualChannels: {
    //     colorField: {
    //         "name": "confirmed",
    //         "type": "real"
    //     },
    //     colorScale: 'quantile',
    //     sizeField: {
    //         "name": "confirmed",
    //         "type": "real"
    //     },
    //     sizeScale: "sqrt"
    // }
}