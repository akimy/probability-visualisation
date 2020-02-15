import React from 'react';

import Label from '../Label';
import Input from '../Input';

import {DispatchSetStateActionString} from '../../types';

import styles from './styles.module.css';

type Props = {
    iterations: string;
    probability: string;
    setProbability: DispatchSetStateActionString;
    setIterations: DispatchSetStateActionString;
}

const Settings = (props: Props) => {
    const {setProbability, setIterations, iterations, probability} = props;

    return (
        <div>
            <Label className={styles.probabilityLabel} text="Probability %">
                <Input value={probability} onChange={setProbability} />
            </Label>

            <Label text="Iterations count">
                <Input value={iterations} onChange={setIterations} />
            </Label>
        </div>
    );
};

export default Settings;
