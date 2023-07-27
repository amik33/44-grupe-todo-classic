import style from './Create.module.css';
import { Link, useParams } from 'react-router-dom';
import logo from '../img/logo.png';
import { HiOutlineMenu } from 'react-icons/hi'
import { tasksData } from '../data/tasks';

export function Content () {

    const { id } = useParams();

    const task = tasksData.filter(task => '' + task.id === id)[0];

    return (
        <div className={style.create}>
            <div className={style.readContent}>
                <img className={style.logoContent} src={logo} alt="logo" />
                <Link className={style.link} to='/tasks'><HiOutlineMenu size='5rem' color='#000' /></Link>
            </div>
            <div className={style.form}>
                {tasksData.map(task => <p>{task.id}) {task.text}</p>)}
            </div>
            <div>
            {task ? <p>{task.text}</p> : <p>ERROR: task not found.</p>}
            <Link to='/tasks'>Back to list</Link>
        </div>   
        </div>
    )
};