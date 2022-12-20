import styles from './ToDoListEmpty.module.css';
import imageemptylist from '../assets/Clipboard.svg'

export function ToDoListEmpty() {
    return (
       <div className={styles.list}>
            <img src={imageemptylist} alt="Imagem de lista Vazia" />
            <span>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
       </div>
       
    );
}
