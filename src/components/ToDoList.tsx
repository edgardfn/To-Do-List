import styles from './ToDoList.module.css';
import imagecheck from '../assets/check.svg';
import imagechecked from '../assets/checked.svg';
import { Trash } from 'phosphor-react';

interface ToDoListProps {
    id: string,
    text: string,
    done: boolean,
    onAlterSituationTask: (idTask: string) => void,
};

export function ToDoList({id,text,done,onAlterSituationTask}:ToDoListProps) {
    
    function handleAlterSituationTask () {
        onAlterSituationTask(id);
    }


    return (
        <div className={styles.list}>
            <img 
                onClick={handleAlterSituationTask} 
                src={done ? imagechecked : imagecheck}  
                alt="Image check" 
            />
            <div 
                onClick={handleAlterSituationTask} 
                className={done ? styles.containerTextCompleted : styles.containerText}>
                {text}
            </div>
            <button title='Deletar tarefa'>
                <Trash 
                    size={24} 
                    className={styles.iconTrash}
                />
            </button>
        </div>
    );
}
