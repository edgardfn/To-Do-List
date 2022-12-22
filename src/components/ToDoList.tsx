import styles from './ToDoList.module.css';
import imagecheck from '../assets/check.svg';
import imagechecked from '../assets/checked.svg';
import { Trash } from 'phosphor-react';

interface ToDoListProps {
    id: string,
    text: string,
    done: boolean,
};

export function ToDoList({id,text,done}:ToDoListProps) {
    console.log('text ===', text);
    console.log('id ===', id);
    return (
        <div className={styles.list}>
            <img src={done ? imagechecked : imagecheck}  alt="Image check" />
            <div className={styles.containerText}>
                {text}
            </div>
            <button title='Deletar tarefa'>
                <Trash size={24} className={styles.iconTrash}/>
            </button>
        </div>
    );
}
