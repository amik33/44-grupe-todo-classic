import style from './Home.module.css';


export function Home () {
    return (
            <div className={style.home}>
                    <img src='../img/cap.png' alt="logo" />
                <div className={style.section}>
                    <h2>Shopping platform</h2>
                </div>
                    <button className={style.button}>Get started</button>
            </div>
    )
};