import React, {ReactChild} from 'react';
import cn from 'classnames';

import {ClassName} from '../../types';

import styles from './styles.module.css';

type Props = {
    children: ReactChild,
    className?: ClassName,
    text: string;
}

const Label = (props: Props) => {
    const {children, text, className} = props;

    return (
        <label className={cn(styles.root, className)}>
            {text}

            {children}
        </label>
    );
};

export default Label;
