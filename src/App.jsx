import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Future } from './pages/Future';
import { Future1 } from './pages/Future1';
import { Future2 } from './pages/Future2';
import { Page404 } from './pages/Page404';
import { Create } from './pages/Create';
import { Login } from './pages/Login';
import { Content } from './pages/Content';
import { Terms } from './pages/Terms';
import { AccountLayout } from './layout/AccountLayout';
import { Shops } from './pages/shopPages/Shops';
import { NewShop } from './pages/shopPages/NewShop';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Home />} /> 
            <Route path="/future" element={<Future />} />
            <Route path="/future1" element={<Future1 />} />
            <Route path="/future2" element={<Future2 />} />
            <Route path="/create" element={<Create />} />
            <Route path="/login" element={<Login />} />
            <Route path="/terms" element={<Terms />} />

          <Route Component={AccountLayout} >
            <Route path="/content" element={<Content />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/newShop" element={<NewShop />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;