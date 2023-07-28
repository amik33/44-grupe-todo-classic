import style from './Create.module.css';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';



export function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    function updateEmail(event) {
        setEmail(event.target.value);
    }

    function updatePassword(event) {
        setPassword(event.target.value);
    }

    function loginUser(event) {
        const minEmailLength = 6;
        const maxEmailLength = 30;
        const minPasswordLength = 6;
        const maxPasswordLength = 100;
        event.preventDefault();

        const newErrors = [];

        if (email.length < minEmailLength || email.length > maxEmailLength) {
            newErrors.push('Error: email');
        }

        if (password.length < minPasswordLength || password.length > maxPasswordLength) {
            newErrors.push('Error: password');
        }

        setErrors(newErrors);

        if (!errors.length) {
            setUsers((prev) => [...prev, { email, password }]);
        }
    }

    return (
        <div className={style.create}>
            <form className={style.form}>
                <h3>Log in to your account</h3>
                <div className={style.rowLog}>
                    <input onChange={updateEmail} value={email} id='email' type='text' placeholder='Email' />
                </div>
                <div className={style.rowLog}>
                    <input onChange={updatePassword} value={password} id='password' type='password' placeholder='Password' />
                </div>
                <div className={`${style.error} ${errors.length ? style.show : ''}`}>
                    {errors.map(err => <p key={password}>{err}</p>)}
                </div>
                <div className={style.rowLog}>
                    <Link onClick={loginUser} className={style.button} to='/content'>Log in</Link>
                    <p className={style.rowLog}>or</p>
                    <Link className={style.button} to='/create'>Register</Link>
                </div>
            </form>
        </div>
    );

}