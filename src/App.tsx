import { useState } from 'react'
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { HeaderList } from './components/HeaderList';
import { ToDoListEmpty } from './components/ToDoListEmpty';
import { ToDoList } from './components/ToDoList';


function App() {

  return (
    <div>
      <Header />

      <div className={styles.main}>
        <AddTask />
        <HeaderList />
        {/* <ToDoListEmpty /> */}
        <div className={styles.containerListTasks}>
          <ToDoList />
        </div>
      </div>
    </div>
  )
}

export default App
