import style from './Home.module.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

export function Page404 () {
    return (
        <div className={style.home}>
            <img className={style.logo} src={logo} alt="logo" />
            <h1 className={style.noPageTitle}>404</h1>
            <p>Page not found</p>
            <Link className={style.button} to='/'>Get Home</Link>
        </div>
    )
};