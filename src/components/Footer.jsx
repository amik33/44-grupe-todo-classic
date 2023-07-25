import style from './Footer.module.css';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className={style.footer}>
             <Link className={style.button} to='/future'>Get Started</Link>
        </footer>
    );
}