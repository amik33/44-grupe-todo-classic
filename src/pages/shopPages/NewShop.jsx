import style from './Shops.module.css';
import { Link } from 'react-router-dom';
import { shopsData } from '../../data/shops';


export function NewShop () {
    return (
        <div className={style.newShop}>
            <h1>New shop</h1>
            <div className={style.form}>
                {shopsData.map(shop => <p key={shop.id}>{shop.id}) {shop.name}</p>)};
            </div>
            <Link to='/'>Go home</Link>
        </div>
    )
};