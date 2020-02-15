
import {Coordinates} from '../../types';

const setupChartsOptions = (coordinates: Coordinates) => {
    return {
        title: {
            text: ' Total event fired percent per iteration count'
        },

        subtitle: {
            text: 'Source: https://github.com/akimy'
        },

        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: '%'
            }
        },

        xAxis: {
            title: {
                text: 'iterations'
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 1
            }
        },

        series: [{
            name: 'Current probability total %',
            data: coordinates,
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        },
    }
}

export default setupChartsOptions;
