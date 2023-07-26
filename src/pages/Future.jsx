import style from './Future.module.css';
import { Link } from 'react-router-dom';


export function Future () {
    return (
        <div className={style.future}>
            <Link className={style.link} to='/login'>Skip</Link>
            <img src="../img/cap.png" alt="Future" />
            <h3>Future</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>         
            <Link className={style.button} to='/future1'>Continue</Link>
        </div>
    )
};