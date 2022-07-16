import {Routes, Route} from 'react-router-dom';
import {Suspense, lazy} from 'react'
import Loading from './components/Loading';
import { PageContainer } from './style/container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Login from './page/Login';
// import Register from './page/Register';
// import Dashboard from './page/Dashboard';


// lazy page
const LoginLazy = lazy(() => import('./page/Login'));
const RegisterLazy = lazy(() => import('./page/Register'));
const DashboardLazy = lazy(() => import('./page/Dashboard'));


function App() {
  return (
    // hello
    <PageContainer >
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
      <ToastContainer />
    </PageContainer>
  );
}

export default App;
