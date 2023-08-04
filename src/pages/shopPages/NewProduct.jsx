import style from './Shops.module.css';
import { Link } from 'react-router-dom';
import { newProductData } from '../../data/newProduct';


export function NewProduct () {
    return (
        <div className={style.shops}>
            <h1>New product</h1>
            <div className={style.form}>
                {newProductData.map(NewProduct => <p key={NewProduct.id}>{NewProduct.id}) {NewProduct.newProductName} {NewProduct.price}</p>)}
            </div>
            <Link to='/'>Go shopping cart</Link>
        </div>
    )
};