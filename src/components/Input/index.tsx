import React, {ChangeEvent} from 'react';

import styles from './styles.module.css';

type Props = {
    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: Props) => {
    const {value, onChange} = props;

    return (
        <input value={value} onChange={onChange} className={styles.root} />
    );
};

export default Input;
