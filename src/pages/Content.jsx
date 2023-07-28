import style from './Create.module.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import { HiOutlineMenu } from 'react-icons/hi'
import { tasksData } from '../data/tasks';

export function Content () {
    return (
        <div className={style.create}>
            <div className={style.readContent}>
                <img className={style.logoContent} src={logo} alt="logo" />
                <Link className={style.link} to='/tasks'><HiOutlineMenu size='5rem' color='#000' /></Link>
            </div>
            <div className={style.form}>
                {tasksData.map(task => <p className={style.read} key={task.id}>{task.id}) {task.text}</p>)}
            </div>
        </div>
    )
};