import React, {useState} from 'react';

import Settings from '../Settings';
import Button from '../Button';

import styles from './styles.module.css';

function App() {
    const [probability, onChangeProbability] = useState('50');
    const [iterations, onChangeIterations] = useState('40');

    return (
        <div>
            <Settings 
                probability={probability} 
                iterations={iterations}
                onChangeProbability={onChangeProbability}
                onChangeIterations={onChangeIterations}
            />

            <Button className={styles.button} text="Run" onClick={e => console.log(e)} />
        </div>
    );
}

export default App;
