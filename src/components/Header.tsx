import styles from './Header.module.css';

import todolistlogo from '../assets/rocket.svg';
import todolisttext from '../assets/todo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todolistlogo} alt="Logotipo do To Do List" />
            <img src={todolisttext} alt="Texto do Logotipo do To Do List" />
        </header>
    );
}