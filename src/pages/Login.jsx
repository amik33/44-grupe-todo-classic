import style from './Create.module.css';
import { useState } from "react";
import { Link } from 'react-router-dom';



export function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const registr = `${email} ${password}`.trim();
  
  
    function updateEmail(event) {
      setEmail(event.target.value);
    }

    function updatePassword(event) {
        setPassword(event.target.value);
      }

    return (
        <div className={style.create}>
            <form className={style.form}>
                <h3>Log in to your account</h3>
                <div className={style.row}>
                    <input onChange={updateEmail} value={email} id='email' type='text' placeholder='Email' />
                </div>
                <div className={style.row}>
                    <input onChange={updatePassword} value={password} id='password' type='password' placeholder='Password' />
                </div>
                <div className={style.row}>
                    <Link className={style.button} to='/content'>Log in</Link>
                    <Link className={style.button} to='/create'>Register</Link>
                </div>
            </form>
        </div>
  );

}