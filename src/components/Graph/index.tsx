// @ts-nocheck
import React, {useEffect, memo} from 'react';
import Highcharts from 'highcharts'; 

import setupChartsOptions from './setupChartsOptions';

import {Coordinates} from '../../types';


type Props = {
    coordinates: Coordinates,
};

const Graph = memo((props: Props) => {
    const {coordinates} = props;

    useEffect(() => {
        Highcharts.chart('graph', setupChartsOptions(coordinates));   
    })

    return (
        <div id="graph" />
    )
});

export default Graph;
