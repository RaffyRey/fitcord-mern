import {Routes, Route} from 'react-router-dom';
import {Suspense, lazy} from 'react'
import Loading from './components/Loading';

// lazy page
const LoginLazy = lazy(() => import('./page/Login'));
const RegisterLazy = lazy(() => import('./page/Register'));
const DashboardLazy = lazy(() => import('./page/Dashboard'));


function App() {
  return (
    <div >
      <Routes>
        <Route path="/login" element={
          <Suspense fallback={<Loading/>}>
            <LoginLazy/>
          </Suspense>
        } />

        <Route path="/register" element={
          <Suspense fallback={<Loading/>}>
            <RegisterLazy/>
          </Suspense>
        } />

        <Route path="/" element={
          <Suspense fallback={<Loading/>}>
            <DashboardLazy/>
          </Suspense>
        } />
      </Routes>
    </div>
  );
}

export default App;
