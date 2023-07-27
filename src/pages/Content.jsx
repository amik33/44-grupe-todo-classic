import style from './Create.module.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import { HiOutlineMenu } from 'react-icons/hi'

export function Content () {
    return (
        <div className={style.create}>
            <div className={style.readContent}>
                <img className={style.logoContent} src={logo} alt="logo" />
                <Link className={style.link} to='/tasks'><HiOutlineMenu size='5rem' color='#000' /></Link>
            </div>
                <h4>PAGE CONTENT</h4>
        </div>
    )
};