import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './AddTask.module.css';

interface AddTaskProps {
    onAddTask: (task:string) => void;
}

export function AddTask({onAddTask}:AddTaskProps) {
    const [newTaskText, setNewTaskText] = useState('');

    function handleAddTask(event:FormEvent) {
        event.preventDefault();
        onAddTask(newTaskText);
        setNewTaskText('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value);
    }

    const isNewTaskEmpty = newTaskText.length === 0;

    return (
        <form onSubmit={handleAddTask} className={styles.body}>
            <input 
                type="text" 
                placeholder='Adicione uma nova tarefa' 
                value={newTaskText}
                onChange={handleNewTaskChange}
            />
            <button type='submit' id='submit' disabled={isNewTaskEmpty} >  
                <div className={styles.containerButtonAddTask}>
                    <div className={styles.containerTextButtonAddTask}>
                        Criar
                    </div>
                    <div className={styles.containerIconButtonAddTask}>
                        <PlusCircle size={16} />
                    </div>
                </div>
            </button>
        </form>
    );
}