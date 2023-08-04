import style from './Shops.module.css';
import { Link } from 'react-router-dom';
import { newProductData } from '../../data/newProduct';


export function NewShoppingCart () {
    return (
        <div className={style.shops}>
            <h1>New shopping cart</h1>
            <div className={style.form}>
                {newProductData.map(NewProduct => <p key={NewProduct.id}>{NewProduct.id}</p>)}
            </div>
            <Link to='/'>Go to shop</Link>
        </div>
    )
};