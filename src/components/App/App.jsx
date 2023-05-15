import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from '../SharedLayout';

const HomePage = lazy(() => import('../../pages/HomePage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
