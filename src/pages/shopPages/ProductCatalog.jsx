import style from './Shops.module.css';
import { Link } from 'react-router-dom';
import { productData } from '../../data/product';


export function ProductCatalog () {
    return (
        <div className={style.shops}>
            <h1>Product catalog</h1>
            <div className={style.form}>
                {productData.map(product => <p key={product.id}>{product.id}) {product.productName} {product.price}</p>)}
            </div>
            <Link to='/'>Go shopping cart</Link>
        </div>
    )
};