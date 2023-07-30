import style from './Home.module.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';


export function Home () {
    return (
        <div className={style.home}>
            <img className={style.logo} src={logo} alt="logo" />
            <h1>Green dot</h1>
            <Link className={style.button} to='/future'>Get Started</Link>
        </div>
    )
};