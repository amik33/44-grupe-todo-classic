import style from './Create.module.css';
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

export function Create () {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    function updateUsername(event) {
        setUsername(event.target.value);
    }
  
    function updateEmail(event) {
        setEmail(event.target.value);
    }

    function updatePassword(event) {
        setPassword(event.target.value);
    }

    function createUser(event) {
        const minUsernameLength = 3;
        const maxUsernameLength = 20;
        const minEmailLength = 6;
        const maxEmailLength = 30;
        const minPasswordLength = 6;
        const maxPasswordLength = 100;
        event.preventDefault();
        

        const newErrors = [];
        if (username.length < minUsernameLength || username.length > maxUsernameLength) {
            newErrors.push('Error: username');
        }

        if (email.length < minEmailLength || email.length > maxEmailLength) {
            newErrors.push('Error: email');
        }

        if (password.length < minPasswordLength || password.length > maxPasswordLength) {
            newErrors.push('Error: password');
        }

        setErrors(newErrors);

        if (!errors.length) {
            setUsers((prev) => [...prev, { username, email, password }]);
        }

        if (newErrors.length === 0) {
            const newUser = { username, email, password };
            setUsers((prev) => [...prev, newUser]);
            localStorage.setItem('users', JSON.stringify([...users, newUser]));
            navigate('/login');
        }    

    }

    return (
        <div className={style.create}>
            <form className={style.form}>
                <h3>Create your account</h3>
                <div className={style.row}>
                    <input onChange={updateUsername} value={username} id='name' type='text' placeholder='Name' />
                </div>
                <div className={style.row}>
                    <input onChange={updateEmail} value={email} id='email' type='text' placeholder='Email' />
                </div>
                <div className={style.row}>
                    <input onChange={updatePassword} value={password} id='password' type='password' placeholder='Password' />
                </div>
                <div className={`${style.error} ${errors.length ? style.show : ''}`}>
                    {errors.map(err => <p key={username}>{err}</p>)}
                </div>
                <div className={style.read}>
                    <Link className={style.btn} to='/terms'></Link>
                    <p>Agree to our TOS (read)</p>
                </div>
                <div className={style.row}>
                    <Link onClick={createUser} className={style.button}>Register</Link>
                    <p>or</p>
                    <Link className={style.button} to='/login'>Login</Link>
                </div>
            </form>
        </div>

    );

}