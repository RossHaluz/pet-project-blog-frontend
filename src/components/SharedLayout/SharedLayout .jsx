import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
