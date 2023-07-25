import style from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Future } from './pages/Future';
import { Future1 } from './pages/Future1';
import { Page404 } from './pages/Page404';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Service } from './pages/Service';
import { Login } from './pages/Login';
import { Layout } from './layout/Layout';
import { LayoutTwo } from './layout/LayoutTwo';


function App() {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>
          <Route Component={Layout}>
            <Route index path="/" element={<Home />} />
            {/* <Route path="/future" element={<Future />} />
            <Route path="/future1" element={<Future1 />} /> */}
            <Route path="/login" element={<Login />} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/services/:serviceId" element={<Service />} />
            <Route path="/services/:serviceId/edit" element={<Service />} />
            <Route path="/services/:serviceId/providers/:name" element={<Service />} />
          </Route>
          <Route Component={LayoutTwo}>
            <Route path="/future" element={<Future />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;