import style from './Create.module.css';
import { Link } from 'react-router-dom';



export function Terms () {
    return (
        <div className={style.create}>
            <form className={style.form}>
                <h3>Terms of service</h3>
                <div className={style.row}>
                    <p className={style.description}>First topic</p>
                    <p className={style.info}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil eius saepe perspiciatis odit nam vero iste eveniet itaque a hic!</p>
                </div>
                <div className={style.row}>
                    <p className={style.description}>Second topic</p>
                    <p className={style.info} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, accusamus.</p> 
                </div>
                <div className={style.row}>
                    <Link className={style.buttonTerms} to='/create'>Back</Link>
                </div>
            </form>
        </div>
    )
};