import style from './Future1.module.css';
import { Link } from 'react-router-dom';


export function Future1 () {
    return (
    <div className={style.future1}>
        <div className={style.header}>
        <Link className={style.button} to='/future2'>Skip</Link>
            <img src="../img/cap.png" alt="Future" />
        </div>
        <div className={style.main}>
            <h3>Future</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className={style.footer}>
            <button className={style.button}>Continue</button>
        </div>
    </div>
    )
};