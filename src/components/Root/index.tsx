import React from 'react';

import Settings from '../Settings';
import Button from '../Button';

import styles from './styles.module.css';

function App() {
  return (
    <div>
        <Settings />

        <Button className={styles.button} text="Run" onClick={e => console.log(e)} />
    </div>
  );
}

export default App;
