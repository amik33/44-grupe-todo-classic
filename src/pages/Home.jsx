import style from './Home.module.css';
import { Link } from 'react-router-dom';


export function Home () {
    return (
            <div className={style.home}>
                <img className={style.logo} src='../img/cap.png' alt="logo" />
                <h2>Shopping platform</h2>
                <Link className={style.button} to='/future'>Get Started</Link>
            </div>
    )
};