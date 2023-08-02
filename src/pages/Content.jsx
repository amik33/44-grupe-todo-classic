import style from './Create.module.css';
import { tasksData } from '../data/tasks';

export function Content () {
    return (
        <div className={style.create}>
            <div className={style.form}>
                {tasksData.map(task => <p className={style.readTitle} key={task.id}>{task.id}) {task.text}</p>)}
            </div>
        </div>
    )
};