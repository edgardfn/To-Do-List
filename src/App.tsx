import { useState } from 'react'
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { HeaderList } from './components/HeaderList';
import { ToDoListEmpty } from './components/ToDoListEmpty';
import { ToDoList } from './components/ToDoList';
import {v4 as uuidv4} from 'uuid';

interface Task {
  id: string,
  text: string, 
  done: boolean,
};

function App() {
  const [tasks, setTasks] = useState<Task[]>(
    [],
  );
  const [numberTasksCompleted, setNumberTasksCompleted] = useState<number>(0);

  function updateNumbersOfCompletedTasksHeaderList(arrayOfTasks:Task[]) {
    if(arrayOfTasks.length === 0) {
      setNumberTasksCompleted(0);
    }
    else {
      let numberCompleted = 0;
      arrayOfTasks.map((item) => {
        if(item.done) {
          numberCompleted = numberCompleted + 1;
        };
      });
      setNumberTasksCompleted(numberCompleted);
    }
  }

  function addTask(taskToAdd: string) {
    const newTask:Task = {
      id: uuidv4(),
      text: taskToAdd,
      done: false,
    }
    const newArrayTask = [...tasks, newTask];
    setTasks(newArrayTask);
  } 

  console.log('tasks ====', tasks);
  const numberOfTasksCreated = tasks.length;

  function alterSituationTask(idTask:string) {
    const newArrayTask = tasks.map((item) => {
      if(item.id === idTask) {
        const newUpdateTask:Task = {
          ...item,
          done: item.done ? false : true,
        }
        return newUpdateTask;
      } else return item;
    });
    updateNumbersOfCompletedTasksHeaderList(newArrayTask);
    setTasks(newArrayTask);
  }

  return (
    <div>
      <Header />

      <div className={styles.main}>
        <AddTask 
          onAddTask={addTask} 
        />
        <HeaderList 
          tasksCompleted={numberTasksCompleted}
          tasksCreated={numberOfTasksCreated}
        />
        {tasks.length === 0 ?
          <ToDoListEmpty />
          :
          <div className={styles.containerListTasks}>
            {tasks.map((item) => {
              return <ToDoList 
                id={item.id}
                key={item.id}
                done={item.done}
                text={item.text}
                onAlterSituationTask = {alterSituationTask}
              />
            })}
            
          </div>
        }
        {/* <ToDoListEmpty /> */}
        
      </div>
    </div>
  )
}

export default App
