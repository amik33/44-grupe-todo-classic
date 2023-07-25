import style from './Home.module.css';


export function Home () {
    return (
            <div className={style.header}>
                    <img src='../img/cap.png' alt="logo" />
                <div className={style.main}>
                    <h2>Shopping platform</h2>
                </div>
                <div className={style.footer}>
                    <button className={style.button}>Get started</button>
                </div>
            </div>
    )
};