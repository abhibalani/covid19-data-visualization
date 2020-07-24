export const heatMapLayerConfig = {
    "id": "78jbw4c",
    "type": "heatmap",
    "config": {
        "dataId": "covid_19_data",
        "label": "new layer",
        "color": [
            218,
            112,
            191
        ],
        "columns": {
            "lat": "lat",
            "lng": "lon"
        },
        "isVisible": false,
        "visConfig": {
            "opacity": 0.8,
            "colorRange": {
                "name": "Global Warming",
                "type": "sequential",
                "category": "Uber",
                "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                ]
            },
            "radius": 62.3
        },
        "hidden": false,
        "textLabel": [
            {
                "field": null,
                "color": [
                    255,
                    255,
                    255
                ],
                "size": 18,
                "offset": [
                    0,
                    0
                ],
                "anchor": "start",
                "alignment": "center"
            }
        ]
    },
    "visualChannels": {
        "weightField": null,
        "weightScale": "linear"
    }
}
