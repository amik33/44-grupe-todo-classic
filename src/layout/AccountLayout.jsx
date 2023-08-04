import { Outlet, Link } from 'react-router-dom';
import logo from '../img/logo.png';
import style from '../pages/AccountLayout.module.css';
import { useState } from 'react';
import { titleData} from '../data/title';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'


export function AccountLayout() {
    const [burgerOn, setBurgerOn] = useState(false);

    function burgerClick () {
        setBurgerOn(!burgerOn);
    }

    return (
        <div>
            <header  className={style.header}>
                <img className={style.logo} src={logo} alt="logo" />
                {burgerOn && (
                    <div className={style.menuContent}>
                        <HiOutlineX onClick={burgerClick} className={style.menuIcon} size='3rem' />
                        <nav className={style.menu}>
                            {
                                titleData.map((link, i ) => {
                                    if (link.type === 'line') {
                                        return <hr key={i}  />;
                                    }
                                    if (link.type === 'link') {
                                        return (
                                            <Link key={link.id} to={link.url}>
                                                {link.icon}{link.title}
                                            </Link>
                                        );
                                    }

                                    return <>Error</>;
                                })
                            }
                        </nav>
                    </div>
                )}
                < HiOutlineMenu onClick={burgerClick} className={style.menuIcon} size='3rem' />
            </header>
            <Outlet />
        </div>
    );
}