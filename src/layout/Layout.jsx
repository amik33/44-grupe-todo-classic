import { Header} from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';


export function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <Main />
        </>
    );
}