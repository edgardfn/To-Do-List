import { PlusCircle } from 'phosphor-react';
import styles from './AddTask.module.css';

export function AddTask() {
    return (
        <div className={styles.body}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>  
                <div className={styles.containerButtonAddTask}>
                    <div className={styles.containerTextButtonAddTask}>
                        Criar
                    </div>
                    <div className={styles.containerIconButtonAddTask}>
                        <PlusCircle size={16} />
                    </div>
                </div>
            </button>
        </div>
    );
}