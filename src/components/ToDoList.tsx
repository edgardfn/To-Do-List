import styles from './ToDoList.module.css';
import imagecheck from '../assets/check.svg';
import imagechecked from '../assets/checked.svg';
import { Trash } from 'phosphor-react';

export function ToDoList() {
    return (
        <>
            <div className={styles.list}>
                <img src={imagecheck} alt="Image check" />
                <span>
                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                </span>
                <button title='Deletar tarefa'>
                    <Trash size={24} className={styles.iconTrash}/>
                </button>
            </div>
            <div className={styles.list}>
                <img src={imagecheck} alt="Image check" />
                <span>
                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                </span>
                <button title='Deletar tarefa'>
                    <Trash size={24} className={styles.iconTrash}/>
                </button>
            </div>
            <div className={styles.list}>
                <img src={imagechecked} alt="Image check" />
                <span>
                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                </span>
                <button title='Deletar tarefa'>
                    <Trash size={24} className={styles.iconTrash}/>
                </button>
            </div>
        </>

    );
}
