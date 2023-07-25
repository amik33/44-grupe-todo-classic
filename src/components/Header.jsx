// import { Link } from 'react-router-dom';
import style from './Header.module.css';

export function Header() {
    return (
        <header className={style.header}>
            <img src='../img/cap.png' alt="Logo" />
        </header>
    );
}