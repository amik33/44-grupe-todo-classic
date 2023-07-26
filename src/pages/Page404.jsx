import style from './Home.module.css';
import { Link } from 'react-router-dom';

export function Page404 () {
    return (
        <div className={style.home}>
            <img className={style.logo} src='../img/cap.png' alt="logo" />
            <h1>404</h1>
            <p>Page not found</p>
            <Link className={style.button} to='/'>Get Home</Link>
        </div>
    )
};