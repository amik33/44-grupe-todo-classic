import style from './Future1.module.css';
import { Link } from 'react-router-dom';


export function Future1 () {
    return (
    <div className={style.future1}>
        <Link className={style.button} to='/login'>Skip</Link>
        <img src="../img/cap.png" alt="Future" />
        <h3>Future 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <Link className={style.button} to='/future2'>Continue</Link>
    </div>
    )
};