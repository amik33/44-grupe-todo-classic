import style from './App.module.css';


function App() {
  return (
    <div className={style.app}>
      <div className={style.platform}>
          <img src='../img/cap.png' alt="logo" />
        <div className={style.section}>
          <h2>Shopping platform</h2>
        </div>
          <button className={style.button}>Get started</button>
      </div>
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
      <div className={style.platform}>
          <img src="../img/cap.png" alt="Future" />
        <div className={style.section}>
          <h3>Future</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
          <button className={style.button}>Continue</button>
      </div>
    </div>
  );
}

export default App;
