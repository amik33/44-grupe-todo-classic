import style from './Create.module.css';
import { Link } from 'react-router-dom';
import { HiOutlineX } from 'react-icons/hi';

export function Tasks () {
    return (
        <div className={style.Create}>
            <div className={style.readTask}>
                <Link className={style.link} to='/content'><HiOutlineX size='5rem' color='#000' /></Link>
            </div>
                TASK CONTENT
                
        </div>
    )
};