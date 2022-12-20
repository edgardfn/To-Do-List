import { useState } from 'react'
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.main}>
        <AddTask />
      </div>
    </div>
  )
}

export default App
