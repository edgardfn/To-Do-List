import { useState } from 'react'
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { HeaderList } from './components/HeaderList';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.main}>
        <AddTask />
        <HeaderList />
      </div>
    </div>
  )
}

export default App
