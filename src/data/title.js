import { FaShoppingCart, FaProductHunt, FaHouseUser} from 'react-icons/fa';
import { MdAccountCircle, MdSettings, MdLogout } from 'react-icons/md';

export const  titleData = [
    {
        type: 'link',
        id: 'm11',
        icon: <FaShoppingCart size='1.3rem' />,
        title: 'Shopping carts',
        url: '/shoppingCarts',
    },
    {
        type: 'link',
        id:'m12',
        icon: <FaProductHunt size='1.3rem'/>,
        title: 'Product catalog',
        url: '/productCatalog',
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
        url: '/newShoppingCart',
    },
    {
        type: 'link',
        id:'m22',
        icon: <FaProductHunt size='1.3rem'/>,
        title: 'New product',
        url: '/newProduct',
    },
    {
        type: 'link',
        id:'m23',
        icon: <FaHouseUser size='1.3rem'/>,
        title: 'New shop',
        url: '/newShop',
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
        url: '/signOut',
    },
]