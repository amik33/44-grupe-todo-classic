import style from './Burger.module.css';
import logo from '../img/logo.png';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { useState } from 'react';
import { BsCircle } from 'react-icons/bs';
import { titleData } from '../data/title';




export function Burger () {
    const [burgerOn, setBurgerOn] = useState(false);


    function burgerClick () {
        setBurgerOn(!burgerOn);
    }

    return (
        <>
            <div className={style.header}> 
                <img className={style.logo} src={logo} alt="logo" />
                <HiOutlineMenu size='4rem' color='#000' onClick={burgerClick} />
            </div>
            <div className={`${style.burgerOf} ${burgerOn ? style.titlePlace : ''}`}>
                <div className={style.outline}><HiOutlineX size='4rem' color='#000' onClick={burgerClick} /></div>
                {titleData.map((title) => <p key={title.id}><BsCircle  size='1.5rem' color='#000' />{title.link}{title.title}</p>)}
            </div>
        </>
    );
};