import React from 'react';

import {DispatchSetStateActionString} from '../../types';

import styles from './styles.module.css';

type Props = {
    value: string;
    onChange: DispatchSetStateActionString;
}

const Input = (props: Props) => {
    const {value, onChange} = props;

    return (
        <input value={value} onChange={({target: {value}}) => {

            onChange(value);
        }} className={styles.root} />
    );
};

export default Input;
