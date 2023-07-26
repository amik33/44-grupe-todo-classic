import style from './Home.module.css';
import { Link } from 'react-router-dom';


export function Future1 () {
    return (
    <div className={style.home}>
        <Link className={style.link} to='/login'>Skip</Link>
        <img src="../img/cap.png" alt="Future" />
        <h3>Future 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <Link className={style.button} to='/future2'>Continue</Link>
    </div>
    )
};