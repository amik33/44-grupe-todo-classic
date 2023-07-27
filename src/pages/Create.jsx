import style from './Create.module.css';
import { useState } from "react";
import { Link } from 'react-router-dom';

export function Create () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const registr = `${name} ${email} ${password}`.trim();
  
    function updateName(event) {
      setName(event.target.value);
    }
  
    function updateEmail(event) {
      setEmail(event.target.value);
    }

    function updatePassword(event) {
        setPassword(event.target.value);
      }

    return (
        <div className={style.create}>
            <form className={style.form}>
                <h3>Create your account</h3>
                <div className={style.row}>
                    <input onChange={updateName} value={name} id='name' type='text' placeholder='Name' />
                </div>
                <div className={style.row}>
                    <input onChange={updateEmail} value={email} id='email' type='text' placeholder='Email' />
                </div>
                <div className={style.row}>
                    <input onChange={updatePassword} value={password} id='password' type='password' placeholder='Password' />
                </div>
                <div className={style.read}>
                    <Link className={style.btn} to='/team'></Link>
                    <p>Agree to our TOS (read)</p>
                </div>
                <div className={style.row}>
                    <Link className={style.button} to='/login'>Register</Link>
                    <Link className={style.button} to='/login'>Login</Link>
                </div>
            </form>
        </div>
  );

}