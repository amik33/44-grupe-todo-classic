import style from './Home.module.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

export function Future () {
    return (
        <div className={style.home}>
            <Link className={style.link} to='/login'>Skip</Link>
            <img src={logo} alt="logo" />
            <h3>Future</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>         
            <Link className={style.button} to='/future1'>Continue</Link>
        </div>
    )
};