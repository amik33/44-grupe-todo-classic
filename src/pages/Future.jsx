import style from './Future.module.css';


export function Future () {
    return (
        <div className={style.future}>
            <div className={style.skip}>
            <a href="/">Skip</a>
        </div>
            <img src="../img/cap.png" alt="Future" />
        <div className={style.section}>
            <h3>Future</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
            <button className={style.button}>Continue</button>
        </div>
    )
};