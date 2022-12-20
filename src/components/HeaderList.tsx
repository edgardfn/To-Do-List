import styles from './HeaderList.module.css';

export function HeaderList() {
    return (
        <div className={styles.headerlist}>
            <div className={styles.containercreatedtasks}>
                <div className={styles.containertextcreated}>
                    Tarefas criadas
                </div>
                <div className={styles.containercountercreated}>
                    10
                </div>
            </div>
            <div className={styles.containercompletedtasks}>
                <div className={styles.containertextcompleted}>
                    Concluidas
                </div>
                <div className={styles.containercountercompleted}>
                    2
                </div>
            </div>
        </div>
    );
}