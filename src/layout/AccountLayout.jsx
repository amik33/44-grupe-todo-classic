import { Outlet, Link } from 'react-router-dom';
import logo from '../img/logo.png';
import style from '../pages/AccountLayout.module.css';
import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { FaShoppingCart, FaProductHunt, FaHouseUser} from 'react-icons/fa';
import { MdAccountCircle, MdSettings, MdLogout } from 'react-icons/md';

export function AccountLayout() {
    const [burgerOn, setBurgerOn] = useState(false);

     const  titleData = [
        {
            type: 'link',
            id: 'm11',
            icon: <FaShoppingCart size='1.3rem' />,
            title: 'Shopping carts',
            url: '/future',
        },
        {
            type: 'link',
            id:'m12',
            icon: <FaProductHunt size='1.3rem'/>,
            title: 'Product catalog',
            url: '/catalog',
        },
        {
            type: 'link',
            id:'m13',
            icon: <FaHouseUser size='1.3rem'/>,
            title: 'Shops',
            url: '/shops',
        },
        {
            type: 'line',
        },
        {
            type: 'link',
            id:'m21',
            icon: <FaShoppingCart size='1.3rem' />,
            title: 'New shopping cart',
            url: '/new shopping',
        },
        {
            type: 'link',
            id:'m22',
            icon: <FaProductHunt size='1.3rem'/>,
            title: 'New product',
            url: '/new product',
        },
        {
            type: 'link',
            id:'m23',
            icon: <FaHouseUser size='1.3rem'/>,
            title: 'New shop',
            url: '/new shop',
        },
        {
            type: 'line',
        },
        {
            type: 'link',
            id:'m31',
            icon: <MdAccountCircle size='1.3rem'/>,
            title: 'Account',
            url: '/account',
        },
        {
            type: 'link',
            id:'m32',
            icon: <MdSettings size='1.3rem'/>,
            title: 'Settings',
            url: '/settings',
        },
        {
            type: 'link',
            id:'m33',
            icon: <MdLogout size='1.3rem'/>,
            title: 'Sign out',
            url: '/',
        },
    ]
    
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