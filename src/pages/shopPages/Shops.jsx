import style from './Shops.module.css';
import { Link } from 'react-router-dom';
import { shopsData } from '../../data/shops';


export function Shops () {
    return (
        <div className={style.shops}>
            <h1>Shops</h1>
            <div className={style.form}>
                {shopsData.map(shop => <Shops key={shop.id} />) }
            </div>
            <Link className={style.button} to='/'>Get Started</Link>
        </div>
    )
};