import style from './Shops.module.css';
import { Link } from 'react-router-dom';



export function SignOut () {
    return (
        <div className={style.shops}>
            <h1>Sign out</h1>
            <div className={style.form}>
            </div>
            <Link to='/'>Go home</Link>
        </div>
    )
};