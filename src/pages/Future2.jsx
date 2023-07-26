import style from './Future2.module.css';
import { Link } from 'react-router-dom';


export function Future2 () {
    return (
    <div className={style.future2}>
        <Link className={style.button} to='/login'>Skip</Link>
        <img src="../img/cap.png" alt="Future" />
        <h3>Future 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <Link className={style.button} to='/create acaunt'>Continue</Link>
    </div>
    )
};