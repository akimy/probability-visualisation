import React, {useState, useEffect} from 'react';

import Settings from '../Settings';
import Button from '../Button';
import Graph from '../Graph';

import styles from './styles.module.css';
import computeCoordinates from '../../utils/computeCoordinates';

import {DispatchSetStateActionString} from '../../types';

const getAllSearchParamsKeys = (keys: string[]) => {
    return Object.fromEntries(new URLSearchParams(window.location.search).entries());
}

const updateUrl = ({probability, iterations}: {probability: string, iterations: string}): void => {
    const Url = new URL(window.location.href);
    Url.searchParams.set('probability', probability)
    Url.searchParams.set('iterations', iterations);

    const UrlString = Url.toString();

    window.history.pushState({path: UrlString}, '', UrlString);
}

const {probability="62", iterations="50"} = getAllSearchParamsKeys(['probability', 'iterations']);
const initialProbability = probability;
const initialIterations = iterations;

function App() {
    const [probability, setProbability]: [string, DispatchSetStateActionString] = useState(initialProbability);
    const [iterations, setIterations]: [string, DispatchSetStateActionString] = useState(initialIterations);
    const [{showGraph, coordinates}, setupGraph] = useState({showGraph: false, coordinates: [0]});

    const handleButtonClick = () => {
        const coordinates = computeCoordinates(probability, iterations);

        setupGraph({showGraph: true, coordinates});
    }

    useEffect(() => {
        updateUrl({probability, iterations});

        const coordinates = computeCoordinates(probability, iterations);
        
        setupGraph({showGraph: true, coordinates});
    }, [iterations, probability]);


    return (
        <div>
            <Settings 
                probability={probability} 
                iterations={iterations}
                setProbability={setProbability}
                setIterations={setIterations}
            />

            <Button className={styles.button} onClick={handleButtonClick} text="Run" />

            {showGraph && (
                <div>
                    <Graph coordinates={coordinates} />
                </div>
            )}
        </div>
    );
}

export default App;
