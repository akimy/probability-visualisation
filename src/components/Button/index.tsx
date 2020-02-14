import React, {MouseEvent} from 'react';
import cn from 'classnames';

import {ClassName} from '../../types';

import styles from './styles.module.css';

type Props = {
    text: string;
    className?: ClassName;
    onClick: (e: MouseEvent<HTMLElement>) => void;
}

const Button = (props: Props) => {
    const {text, onClick, className} = props;

    return (
        <button className={cn(styles.root, className)} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
