import React from 'react';

import Label from '../Label';
import Input from '../Input';

import {ReactInputChangeEvent} from '../../types';

import styles from './styles.module.css';

type Props = {
    iterations: string;
    probability: string;
    onChangeProbability: ReactInputChangeEvent;
    onChangeIterations: ReactInputChangeEvent;
}

const Settings = (props: Props) => {
    const {onChangeProbability, onChangeIterations, iterations, probability} = props;

    return (
        <div>
            <Label className={styles.probabilityLabel} text="Probability %">
                <Input value={probability} onChange={onChangeProbability} />
            </Label>

            <Label text="Iterations count">
                <Input value={iterations} onChange={onChangeIterations} />
            </Label>
        </div>
    );
};

export default Settings;
