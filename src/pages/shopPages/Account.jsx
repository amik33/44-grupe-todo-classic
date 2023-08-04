import style from './Shops.module.css';
import { Link } from 'react-router-dom';



export function Account () {
    return (
        <div className={style.shops}>
            <h1>Account</h1>
            <div className={style.form}>
            </div>
            <Link to='/'>Go home</Link>
        </div>
    )
};