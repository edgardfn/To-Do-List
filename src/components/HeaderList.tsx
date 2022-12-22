import styles from './HeaderList.module.css';

interface HeaderListProps {
    tasksCompleted: number,
    tasksCreated: number,
};

export function HeaderList({tasksCompleted,tasksCreated}:HeaderListProps) {

    return (
        <div className={styles.headerlist}>
            <div className={styles.containercreatedtasks}>
                <div className={styles.containertextcreated}>
                    Tarefas criadas
                </div>
                <div className={styles.containercountercreated}>
                    {tasksCreated}
                </div>
            </div>
            <div className={styles.containercompletedtasks}>
                <div className={styles.containertextcompleted}>
                    Concluidas
                </div>
                <div className={styles.containercountercompleted}>
                    {tasksCompleted}
                </div>
            </div>
        </div>
    );
}