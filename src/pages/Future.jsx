import style from './Future.module.css';
import { Link } from 'react-router-dom';


export function Future () {
    return (
        <div className={style.header}>
            <div>
            <Link className={style.button} to='/login'>Skip</Link>
                <img src="../img/cap.png" alt="Future" />
            </div>
            <div className={style.main}>
                <h3>Future</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className={style.footer}>
                <Link className={style.button} to='/future1'>Continue</Link>
            </div>
        </div>
    )
};