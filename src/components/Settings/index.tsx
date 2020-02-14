import React from 'react';

import Label from '../Label';
import Input from '../Input';

import styles from './styles.module.css';

const Settings = () => {
    return (
        <div>
            <Label className={styles.probabilityLabel} text="Probability %">
                <Input value={233} onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e)} />
            </Label>

            <Label text="Iterations count">
                <Input value={233} onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e)} />
            </Label>
        </div>
    );
};

export default Settings;
