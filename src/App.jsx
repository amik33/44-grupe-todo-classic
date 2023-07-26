import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Future } from './pages/Future';
import { Future1 } from './pages/Future1';
import { Future2 } from './pages/Future2';
import { Page404 } from './pages/Page404';
import { Create } from './pages/Create';
import { Login } from './pages/Login';
// import { Layout } from './layout/Layout';
// import { LayoutTwo } from './layout/LayoutTwo';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Home />} /> 

          {/* <Route Component={Layout}> */}
            <Route path="/future" element={<Future />} />
            <Route path="/future1" element={<Future1 />} />
            <Route path="/future2" element={<Future2 />} />
            <Route path="/create" element={<Create />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Page404 />} />
          {/* </Route> */}

          {/* <Route Component={LayoutTwo}> */}
        
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;